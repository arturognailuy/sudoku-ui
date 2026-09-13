import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SudokuApiClient, SudokuApiError } from '../api/client';
import type { Difficulty, GameAction, Session } from '../api/types';
import {
  ACTIVE_GAME_KEY,
  DIFFICULTY_PREFERENCE_KEY,
  actionableError,
  readActiveGame,
  readDifficultyPreference,
  titleCase,
  type ActiveGameRecord,
} from '../presentation';

export interface PendingAction {
  sequence: number;
  action: GameAction;
}

interface QueuedAction extends PendingAction {
  sessionId: string;
  resolve: (accepted: boolean) => void;
}

export const useSessionLifecycle = () => {
  const client = useMemo(() => new SudokuApiClient(), []);
  const [initializing, setInitializing] = useState(true);
  const [connection, setConnection] = useState<
    'checking' | 'online' | 'offline'
  >('checking');
  const [difficulty, setDifficulty] = useState<Difficulty>(
    readDifficultyPreference,
  );
  const [session, setSession] = useState<Session>();
  const sessionRef = useRef<Session | undefined>(undefined);
  const [preparingDifficulty, setPreparingDifficulty] = useState<Difficulty>();
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const [pendingActions, setPendingActions] = useState<PendingAction[]>([]);
  const actionQueue = useRef<QueuedAction[]>([]);
  const processingActions = useRef(false);
  const nextSequence = useRef(1);
  const processActionQueueRef = useRef<() => Promise<void>>(
    async () => undefined,
  );
  const enqueueActionRef = useRef<(action: GameAction) => Promise<boolean>>(
    async () => false,
  );
  const [retryLabel, setRetryLabel] = useState<string>();
  const retryAction = useRef<() => void>(() => undefined);
  const [message, setMessage] = useState('Choose a level and begin.');
  const [restoredGame, setRestoredGame] = useState<ActiveGameRecord>();

  const setCurrentSession = useCallback((nextSession?: Session) => {
    sessionRef.current = nextSession;
    setSession(nextSession);
  }, []);

  const setBusyState = useCallback((nextBusy: boolean) => {
    busyRef.current = nextBusy;
    setBusy(nextBusy);
  }, []);

  const syncPendingActions = useCallback(() => {
    setPendingActions(
      actionQueue.current.map(({ sequence, action }) => ({ sequence, action })),
    );
  }, []);

  const discardQueuedActions = useCallback(() => {
    const discarded = actionQueue.current.splice(0);
    for (const queued of discarded) queued.resolve(false);
    syncPendingActions();
  }, [syncPendingActions]);

  const showRetry = useCallback(
    (label: string, action: () => void, nextMessage: string) => {
      retryAction.current = action;
      setRetryLabel(label);
      setMessage(nextMessage);
    },
    [],
  );

  const reloadLatestSession = useCallback(
    async (sessionId: string) => {
      try {
        const current = await client.getSession(sessionId);
        if (sessionRef.current?.id !== sessionId) return false;
        setCurrentSession(current);
        setRetryLabel(undefined);
        setMessage('The latest game was loaded.');
        return true;
      } catch {
        showRetry(
          'Reload latest board',
          () => void reloadLatestSession(sessionId),
          'The latest game state could not be loaded. Your last confirmed board is still shown.',
        );
        return false;
      }
    },
    [client, setCurrentSession, showRetry],
  );

  const restoreActiveGame = useCallback(async () => {
    const saved = readActiveGame();
    if (!saved) return;
    setBusyState(true);
    setMessage('Restoring your puzzle…');
    try {
      const restored = await client.getSession(saved.sessionId);
      setCurrentSession(restored);
      setDifficulty(saved.difficulty);
      setRestoredGame(saved);
      setRetryLabel(undefined);
      setMessage('Your active puzzle was restored.');
    } catch (error) {
      showRetry(
        'Try restoring again',
        () => void restoreActiveGame(),
        actionableError(error, 'Your active puzzle could not be restored.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [client, setBusyState, setCurrentSession, showRetry]);

  useEffect(() => {
    let active = true;
    void client
      .health()
      .then(async (healthy) => {
        if (!active) return;
        setConnection(healthy ? 'online' : 'offline');
        if (healthy) await restoreActiveGame();
      })
      .catch(() => {
        if (!active) return;
        setConnection('offline');
        showRetry(
          'Check connection',
          () => window.location.reload(),
          'The game service could not be reached. Check your connection and try again.',
        );
      })
      .finally(() => {
        if (active) setInitializing(false);
      });
    return () => {
      active = false;
    };
  }, [client, restoreActiveGame, showRetry]);

  useEffect(() => {
    try {
      localStorage.setItem(DIFFICULTY_PREFERENCE_KEY, difficulty);
    } catch {
      // The app still works when browser storage is unavailable.
    }
  }, [difficulty]);

  const startGame = useCallback(
    async (requestedDifficulty: Difficulty = difficulty) => {
      if (actionQueue.current.length > 0) {
        setMessage('Wait for pending moves before starting another puzzle.');
        return undefined;
      }
      const replacingSession = session !== undefined;
      if (replacingSession) setPreparingDifficulty(requestedDifficulty);
      setBusyState(true);
      setMessage(`Preparing a ${requestedDifficulty} puzzle…`);
      try {
        const nextSession = await client.createSession(requestedDifficulty);
        setCurrentSession(nextSession);
        setDifficulty(requestedDifficulty);
        setRetryLabel(undefined);
        setMessage(`${titleCase(requestedDifficulty)} puzzle ready.`);
        return nextSession;
      } catch (error) {
        showRetry(
          'Try again',
          () => void startGame(requestedDifficulty),
          actionableError(error, 'The game could not be started.'),
        );
        return undefined;
      } finally {
        if (replacingSession) setPreparingDifficulty(undefined);
        setBusyState(false);
      }
    },
    [client, difficulty, session, setBusyState, setCurrentSession, showRetry],
  );

  const processActionQueue = useCallback(async () => {
    if (processingActions.current) return;
    processingActions.current = true;
    try {
      while (actionQueue.current.length > 0) {
        const queued = actionQueue.current[0]!;
        const currentSession = sessionRef.current;
        if (!currentSession || currentSession.id !== queued.sessionId) {
          actionQueue.current.shift();
          queued.resolve(false);
          syncPendingActions();
          continue;
        }

        try {
          const response = await client.applyAction(
            currentSession,
            queued.action,
          );
          if (sessionRef.current?.id !== queued.sessionId) {
            actionQueue.current.shift();
            queued.resolve(false);
            syncPendingActions();
            continue;
          }
          setCurrentSession({
            ...currentSession,
            revision: response.revision,
            snapshot: response.snapshot,
          });
          actionQueue.current.shift();
          queued.resolve(true);
          syncPendingActions();
          setRetryLabel(undefined);
          setMessage(
            response.snapshot.status === 'solved'
              ? 'Puzzle solved. Beautiful work!'
              : (response.warnings?.[0] ?? 'Move saved.'),
          );
        } catch (error) {
          const failedAction = queued.action;
          const sessionId = queued.sessionId;
          if (
            error instanceof SudokuApiError &&
            error.code === 'revision-conflict'
          ) {
            const reloaded = await reloadLatestSession(sessionId);
            if (reloaded) {
              setMessage(
                'The board changed elsewhere, so the latest game was loaded.',
              );
            }
          } else {
            showRetry(
              'Retry move',
              () => void enqueueActionRef.current(failedAction),
              actionableError(error, 'The move could not be saved.'),
            );
          }
          discardQueuedActions();
          break;
        }
      }
    } finally {
      processingActions.current = false;
    }
  }, [
    client,
    discardQueuedActions,
    reloadLatestSession,
    setCurrentSession,
    showRetry,
    syncPendingActions,
  ]);

  useEffect(() => {
    processActionQueueRef.current = processActionQueue;
  }, [processActionQueue]);

  const enqueueAction = useCallback(
    (action: GameAction): Promise<boolean> => {
      const currentSession = sessionRef.current;
      if (!currentSession || busyRef.current) return Promise.resolve(false);
      return new Promise((resolve) => {
        actionQueue.current.push({
          sequence: nextSequence.current++,
          action,
          sessionId: currentSession.id,
          resolve,
        });
        syncPendingActions();
        void processActionQueueRef.current();
      });
    },
    [syncPendingActions],
  );

  useEffect(() => {
    enqueueActionRef.current = enqueueAction;
  }, [enqueueAction]);

  const leaveGame = useCallback(() => {
    if (actionQueue.current.length > 0) {
      setMessage('Wait for pending moves before leaving this puzzle.');
      return;
    }
    localStorage.removeItem(ACTIVE_GAME_KEY);
    setCurrentSession(undefined);
    setRetryLabel(undefined);
    setRestoredGame(undefined);
    setMessage('Choose a level and begin.');
  }, [setCurrentSession]);

  return {
    initializing,
    connection,
    difficulty,
    setDifficulty,
    session,
    preparingDifficulty,
    busy,
    pendingActions,
    hasPendingActions: pendingActions.length > 0,
    retryLabel,
    retryAction,
    message,
    setMessage,
    restoredGame,
    startGame,
    applyAction: enqueueAction,
    leaveGame,
  };
};

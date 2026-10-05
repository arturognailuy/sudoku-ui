import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SudokuApiClient } from '../api/client';
import type { Difficulty, GameAction, GuestGame, Session } from '../api/types';
import {
  DIFFICULTY_PREFERENCE_KEY,
  actionableError,
  readDifficultyPreference,
  titleCase,
  type ActiveGameRecord,
} from '../presentation';
import {
  GuestGameRepository,
  type GuestGameRecord,
  type GuestPresentationState,
} from '../storage/guestGameRepository';

export interface PendingAction {
  sequence: number;
  action: GameAction;
}

interface QueuedAction extends PendingAction {
  localId: string;
  resolve: (accepted: boolean) => void;
}

const sessionFromGuest = (record: GuestGameRecord): Session => ({
  id: record.local_id,
  revision: record.game.revision,
  actual_difficulty: record.game.actual_difficulty,
  snapshot: record.game.snapshot,
});

const activeGameFromGuest = (record: GuestGameRecord): ActiveGameRecord => ({
  sessionId: record.local_id,
  difficulty: record.game.actual_difficulty,
  elapsedSeconds: record.presentation.elapsed_seconds,
  paused: record.presentation.paused,
  resumedAt: record.presentation.resumed_at,
});

const createLocalId = () =>
  globalThis.crypto?.randomUUID?.() ??
  `guest-${Date.now()}-${Math.random().toString(36).slice(2)}`;

export const useSessionLifecycle = () => {
  const client = useMemo(() => new SudokuApiClient(), []);
  const repository = useMemo(() => new GuestGameRepository(), []);
  const [initializing, setInitializing] = useState(true);
  const [connection, setConnection] = useState<
    'checking' | 'online' | 'offline'
  >('checking');
  const [difficulty, setDifficulty] = useState<Difficulty>(
    readDifficultyPreference,
  );
  const [session, setSession] = useState<Session>();
  const activeDifficulty = session?.actual_difficulty ?? difficulty;
  const guestRef = useRef<GuestGameRecord | undefined>(undefined);
  const presentationRef = useRef<GuestPresentationState>({
    elapsed_seconds: 0,
    paused: false,
  });
  const storageQueue = useRef<Promise<void>>(Promise.resolve());
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

  const setBusyState = useCallback((nextBusy: boolean) => {
    busyRef.current = nextBusy;
    setBusy(nextBusy);
  }, []);

  const showRetry = useCallback(
    (label: string, action: () => void, nextMessage: string) => {
      retryAction.current = action;
      setRetryLabel(label);
      setMessage(nextMessage);
    },
    [],
  );

  const persistRecord = useCallback(
    async (record: GuestGameRecord) => {
      const next = storageQueue.current
        .catch(() => undefined)
        .then(() => repository.replace(record));
      storageQueue.current = next;
      await next;
    },
    [repository],
  );

  const setCurrentGuest = useCallback((record?: GuestGameRecord) => {
    guestRef.current = record;
    if (record) presentationRef.current = record.presentation;
    setSession(record ? sessionFromGuest(record) : undefined);
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

  const restoreActiveGame = useCallback(async () => {
    setBusyState(true);
    setMessage('Restoring your puzzle…');
    try {
      const restored = await repository.get();
      if (!restored) {
        setMessage('Choose a level and begin.');
        return;
      }
      setCurrentGuest(restored);
      setDifficulty(restored.game.actual_difficulty);
      setRestoredGame(activeGameFromGuest(restored));
      setRetryLabel(undefined);
      setMessage('Your local puzzle was restored.');
    } catch (error) {
      showRetry(
        'Try restoring again',
        () => void restoreActiveGame(),
        actionableError(error, 'Your local puzzle could not be restored.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [repository, setBusyState, setCurrentGuest, showRetry]);

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
      const replacingGame = guestRef.current !== undefined;
      if (replacingGame) setPreparingDifficulty(requestedDifficulty);
      setBusyState(true);
      setMessage(`Preparing a ${requestedDifficulty} puzzle…`);
      try {
        const game = await client.createGuestGame(requestedDifficulty);
        const nextRecord: GuestGameRecord = {
          schema_version: 1,
          local_id: createLocalId(),
          game,
          presentation: { elapsed_seconds: 0, paused: false },
        };
        await persistRecord(nextRecord);
        setCurrentGuest(nextRecord);
        setDifficulty(requestedDifficulty);
        setRestoredGame(undefined);
        setRetryLabel(undefined);
        setMessage(`${titleCase(game.actual_difficulty)} puzzle ready.`);
        return sessionFromGuest(nextRecord);
      } catch (error) {
        showRetry(
          'Try again',
          () => void startGame(requestedDifficulty),
          actionableError(error, 'The game could not be started.'),
        );
        return undefined;
      } finally {
        if (replacingGame) setPreparingDifficulty(undefined);
        setBusyState(false);
      }
    },
    [
      client,
      difficulty,
      persistRecord,
      setBusyState,
      setCurrentGuest,
      showRetry,
    ],
  );

  const processActionQueue = useCallback(async () => {
    if (processingActions.current) return;
    processingActions.current = true;
    try {
      while (actionQueue.current.length > 0) {
        const queued = actionQueue.current[0]!;
        const currentRecord = guestRef.current;
        if (!currentRecord || currentRecord.local_id !== queued.localId) {
          actionQueue.current.shift();
          queued.resolve(false);
          syncPendingActions();
          continue;
        }

        try {
          const response = await client.applyGuestAction(
            currentRecord.game,
            queued.action,
          );
          if (guestRef.current?.local_id !== queued.localId) {
            actionQueue.current.shift();
            queued.resolve(false);
            syncPendingActions();
            continue;
          }
          const nextGame: GuestGame = {
            document: response.document,
            revision: response.revision,
            actual_difficulty: response.actual_difficulty,
            snapshot: response.snapshot,
          };
          const nextRecord: GuestGameRecord = {
            ...currentRecord,
            game: nextGame,
            presentation: presentationRef.current,
          };
          await persistRecord(nextRecord);
          setCurrentGuest(nextRecord);
          actionQueue.current.shift();
          queued.resolve(true);
          syncPendingActions();
          setRetryLabel(undefined);
          setMessage(
            response.snapshot.status === 'solved'
              ? 'Puzzle solved. Beautiful work!'
              : 'Move saved.',
          );
        } catch (error) {
          const failedAction = queued.action;
          showRetry(
            'Retry move',
            () => void enqueueActionRef.current(failedAction),
            actionableError(error, 'The move could not be saved.'),
          );
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
    persistRecord,
    setCurrentGuest,
    showRetry,
    syncPendingActions,
  ]);

  useEffect(() => {
    processActionQueueRef.current = processActionQueue;
  }, [processActionQueue]);

  const enqueueAction = useCallback(
    (action: GameAction): Promise<boolean> => {
      const currentRecord = guestRef.current;
      if (!currentRecord || busyRef.current) return Promise.resolve(false);
      return new Promise((resolve) => {
        actionQueue.current.push({
          sequence: nextSequence.current++,
          action,
          localId: currentRecord.local_id,
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

  const persistPresentation = useCallback(
    (record: ActiveGameRecord) => {
      const presentation: GuestPresentationState = {
        elapsed_seconds: record.elapsedSeconds,
        paused: record.paused,
        resumed_at: record.resumedAt,
      };
      presentationRef.current = presentation;
      const currentRecord = guestRef.current;
      if (!currentRecord || currentRecord.local_id !== record.sessionId) return;
      void persistRecord({ ...currentRecord, presentation }).catch((error) => {
        showRetry(
          'Retry saving progress',
          () => persistPresentation(record),
          actionableError(error, 'The latest timer state could not be saved.'),
        );
      });
    },
    [persistRecord, showRetry],
  );

  const leaveGame = useCallback(async () => {
    if (actionQueue.current.length > 0) {
      setMessage('Wait for pending moves before leaving this puzzle.');
      return;
    }
    setBusyState(true);
    try {
      await storageQueue.current.catch(() => undefined);
      await repository.clear();
      setCurrentGuest(undefined);
      setRetryLabel(undefined);
      setRestoredGame(undefined);
      setMessage('Choose a level and begin.');
    } catch (error) {
      showRetry(
        'Try leaving again',
        () => void leaveGame(),
        actionableError(error, 'The local puzzle could not be cleared.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [repository, setBusyState, setCurrentGuest, showRetry]);

  return {
    initializing,
    connection,
    difficulty,
    activeDifficulty,
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
    persistPresentation,
    startGame,
    applyAction: enqueueAction,
    leaveGame,
  };
};

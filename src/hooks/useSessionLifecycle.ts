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

  const showRetry = useCallback(
    (label: string, action: () => void, nextMessage: string) => {
      retryAction.current = action;
      setRetryLabel(label);
      setMessage(nextMessage);
    },
    [],
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

  const applyAction = useCallback(
    async (action: GameAction) => {
      const currentSession = sessionRef.current;
      if (!currentSession || busyRef.current) return false;
      setBusyState(true);
      try {
        const response = await client.applyAction(currentSession, action);
        setCurrentSession({
          ...currentSession,
          revision: response.revision,
          snapshot: response.snapshot,
        });
        setRetryLabel(undefined);
        setMessage(
          response.snapshot.status === 'solved'
            ? 'Puzzle solved. Beautiful work!'
            : (response.warnings?.[0] ?? 'Move saved.'),
        );
        return true;
      } catch (error) {
        if (
          error instanceof SudokuApiError &&
          error.code === 'revision-conflict'
        ) {
          try {
            const current = await client.getSession(currentSession.id);
            setCurrentSession(current);
            setMessage(
              'The board changed elsewhere, so the latest game was loaded.',
            );
          } catch {
            showRetry(
              'Reload latest board',
              () => void applyAction(action),
              'The latest game state could not be loaded. Your last confirmed board is still shown.',
            );
          }
        } else {
          showRetry(
            'Retry move',
            () => void applyAction(action),
            actionableError(error, 'The move could not be saved.'),
          );
        }
        return false;
      } finally {
        setBusyState(false);
      }
    },
    [client, setBusyState, setCurrentSession, showRetry],
  );

  const leaveGame = useCallback(() => {
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
    retryLabel,
    retryAction,
    message,
    setMessage,
    restoredGame,
    startGame,
    applyAction,
    leaveGame,
  };
};

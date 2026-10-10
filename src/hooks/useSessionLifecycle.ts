import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SudokuApiClient, SudokuApiError } from '../api/client';
import type {
  Account,
  AccountGame,
  AccountGameSummary,
  Difficulty,
  GameAction,
  GuestGame,
  Session,
} from '../api/types';
import {
  ACTIVE_GAME_KEY,
  DIFFICULTY_PREFERENCE_KEY,
  actionableError,
  readActiveGame,
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
  gameKey: string;
  resolve: (accepted: boolean) => void;
}

type GameMode = 'guest' | 'account';

const sessionFromGuest = (record: GuestGameRecord): Session => ({
  id: record.local_id,
  revision: record.game.revision,
  actual_difficulty: record.game.actual_difficulty,
  snapshot: record.game.snapshot,
});

const sessionFromAccountGame = (game: AccountGame): Session => ({
  id: game.id,
  revision: game.revision,
  actual_difficulty: game.actual_difficulty,
  snapshot: game.snapshot,
});

const activeGameFromGuest = (record: GuestGameRecord): ActiveGameRecord => ({
  sessionId: record.local_id,
  difficulty: record.game.actual_difficulty,
  elapsedSeconds: record.presentation.elapsed_seconds,
  paused: record.presentation.paused,
  resumedAt: record.presentation.resumed_at,
});

const activeGameFromAccount = (game: AccountGame): ActiveGameRecord => ({
  sessionId: game.id,
  difficulty: game.actual_difficulty,
  elapsedSeconds: game.elapsed_seconds,
  paused: false,
});

const createLocalId = () =>
  globalThis.crypto?.randomUUID?.() ??
  `guest-${Date.now()}-${Math.random().toString(36).slice(2)}`;

const isSignedOut = (error: unknown) =>
  error instanceof SudokuApiError &&
  (error.status === 401 || error.status === 403);

const saveActiveAccountGame = (record: ActiveGameRecord) => {
  try {
    localStorage.setItem(ACTIVE_GAME_KEY, JSON.stringify(record));
  } catch {
    // Account recovery remains available from My games when storage is unavailable.
  }
};

const clearActiveAccountGame = () => {
  try {
    localStorage.removeItem(ACTIVE_GAME_KEY);
  } catch {
    // Storage restrictions must not block account actions.
  }
};

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
  const [account, setAccount] = useState<Account>();
  const [accountGames, setAccountGames] = useState<AccountGameSummary[]>([]);
  const [gameMode, setGameMode] = useState<GameMode>('guest');
  const guestRef = useRef<GuestGameRecord | undefined>(undefined);
  const accountRef = useRef<Account | undefined>(undefined);
  const accountGameRef = useRef<AccountGame | undefined>(undefined);
  const lastSyncedAccountElapsed = useRef(0);
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

  const setCurrentAccount = useCallback((next?: Account) => {
    accountRef.current = next;
    setAccount(next);
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
    accountGameRef.current = undefined;
    setGameMode('guest');
    if (record) presentationRef.current = record.presentation;
    setSession(record ? sessionFromGuest(record) : undefined);
  }, []);

  const setCurrentAccountGame = useCallback((game?: AccountGame) => {
    accountGameRef.current = game;
    lastSyncedAccountElapsed.current = game?.elapsed_seconds ?? 0;
    setGameMode('account');
    setSession(game ? sessionFromAccountGame(game) : undefined);
  }, []);

  const refreshAccountGames = useCallback(async () => {
    if (!accountRef.current) {
      setAccountGames([]);
      return;
    }
    const result = await client.listAccountGames();
    setAccountGames(result.games);
    return result.games;
  }, [client]);

  const claimGuest = useCallback(
    async (record: GuestGameRecord, currentAccount: Account) => {
      setMessage('Saving your local game to your account…');
      try {
        const claimed = await client.claimGuestGame(
          record.game.document,
          currentAccount.csrf_token,
        );
        await storageQueue.current.catch(() => undefined);
        await repository.clear();
        guestRef.current = undefined;
        setCurrentAccountGame(claimed);
        setRestoredGame(activeGameFromAccount(claimed));
        await refreshAccountGames();
        setRetryLabel(undefined);
        setMessage('Game saved to your account.');
        return true;
      } catch (error) {
        setCurrentGuest(record);
        setRestoredGame(activeGameFromGuest(record));
        showRetry(
          'Try saving again',
          () => void claimGuest(record, currentAccount),
          actionableError(
            error,
            'Your local game is safe, but it could not be saved to your account.',
          ),
        );
        return false;
      }
    },
    [
      client,
      refreshAccountGames,
      repository,
      setCurrentAccountGame,
      setCurrentGuest,
      showRetry,
    ],
  );

  const restoreApplication = useCallback(async () => {
    setBusyState(true);
    setMessage('Restoring your puzzle…');
    try {
      const restored = await repository.get();
      const activeGame = readActiveGame();
      let currentAccount: Account | undefined;
      try {
        currentAccount = await client.getCurrentAccount();
      } catch (error) {
        if (!isSignedOut(error)) throw error;
      }
      setCurrentAccount(currentAccount);
      if (currentAccount) {
        const games = await refreshAccountGames();
        if (restored) {
          await claimGuest(restored, currentAccount);
          return;
        }
        const activeSummary = activeGame
          ? games?.find((game) => game.id === activeGame.sessionId)
          : undefined;
        if (activeSummary && activeGame) {
          const game = await client.getAccountGame(activeGame.sessionId);
          setCurrentAccountGame(game);
          setDifficulty(game.actual_difficulty);
          setRestoredGame({
            ...activeGameFromAccount(game),
            paused: activeGame.paused,
          });
          setRetryLabel(undefined);
          setMessage(`${titleCase(game.actual_difficulty)} puzzle restored.`);
          return;
        }
        if (activeGame) clearActiveAccountGame();
        setCurrentAccountGame(undefined);
        setMessage(`Signed in as ${currentAccount.display_name}.`);
        return;
      }
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
        () => void restoreApplication(),
        actionableError(error, 'Your puzzle could not be restored.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [
    claimGuest,
    client,
    refreshAccountGames,
    repository,
    setBusyState,
    setCurrentAccount,
    setCurrentAccountGame,
    setCurrentGuest,
    showRetry,
  ]);

  useEffect(() => {
    let active = true;
    void client
      .health()
      .then(async (healthy) => {
        if (!active) return;
        setConnection(healthy ? 'online' : 'offline');
        if (healthy) await restoreApplication();
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
  }, [client, restoreApplication, showRetry]);

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
      const replacingGame = session !== undefined;
      if (replacingGame) setPreparingDifficulty(requestedDifficulty);
      setBusyState(true);
      setMessage(`Preparing a ${requestedDifficulty} puzzle…`);
      try {
        const currentAccount = accountRef.current;
        if (currentAccount) {
          const nextGame = await client.createAccountGame(
            requestedDifficulty,
            currentAccount.csrf_token,
          );
          setCurrentAccountGame(nextGame);
          await refreshAccountGames();
          setDifficulty(requestedDifficulty);
          setRestoredGame(undefined);
          setRetryLabel(undefined);
          setMessage(`${titleCase(nextGame.actual_difficulty)} puzzle ready.`);
          return sessionFromAccountGame(nextGame);
        }
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
      refreshAccountGames,
      session,
      setBusyState,
      setCurrentAccountGame,
      setCurrentGuest,
      showRetry,
    ],
  );

  const currentGameKey = useCallback(() => {
    if (gameMode === 'account') return accountGameRef.current?.id;
    return guestRef.current?.local_id;
  }, [gameMode]);

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

  const processActionQueue = useCallback(async () => {
    if (processingActions.current) return;
    processingActions.current = true;
    try {
      while (actionQueue.current.length > 0) {
        const queued = actionQueue.current[0]!;
        if (currentGameKey() !== queued.gameKey) {
          actionQueue.current.shift();
          queued.resolve(false);
          syncPendingActions();
          continue;
        }
        try {
          if (accountGameRef.current) {
            const currentAccount = accountRef.current;
            if (!currentAccount)
              throw new Error('Sign in again to save moves.');
            const response = await client.applyAccountGameAction(
              accountGameRef.current,
              queued.action,
              currentAccount.csrf_token,
            );
            if (currentGameKey() !== queued.gameKey) {
              actionQueue.current.shift();
              queued.resolve(false);
              syncPendingActions();
              continue;
            }
            setCurrentAccountGame(response.game);
            setAccountGames((games) =>
              games.map((summary) => {
                if (summary.id !== response.game.id) return summary;
                return {
                  ...summary,
                  revision: response.game.revision,
                  status: response.game.snapshot.status,
                  elapsed_seconds: response.game.elapsed_seconds,
                };
              }),
            );
          } else {
            const currentRecord = guestRef.current;
            if (!currentRecord)
              throw new Error('The local game is unavailable.');
            const response = await client.applyGuestAction(
              currentRecord.game,
              queued.action,
            );
            if (currentGameKey() !== queued.gameKey) {
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
          }
          actionQueue.current.shift();
          queued.resolve(true);
          syncPendingActions();
          setRetryLabel(undefined);
          const solved =
            accountGameRef.current?.snapshot.status === 'solved' ||
            guestRef.current?.game.snapshot.status === 'solved';
          setMessage(solved ? 'Puzzle solved. Beautiful work!' : 'Move saved.');
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
    currentGameKey,
    discardQueuedActions,
    persistRecord,
    setCurrentAccountGame,
    setCurrentGuest,
    showRetry,
    syncPendingActions,
  ]);

  useEffect(() => {
    processActionQueueRef.current = processActionQueue;
  }, [processActionQueue]);

  const enqueueAction = useCallback(
    (action: GameAction): Promise<boolean> => {
      const gameKey = currentGameKey();
      if (!gameKey || busyRef.current) return Promise.resolve(false);
      return new Promise((resolve) => {
        actionQueue.current.push({
          sequence: nextSequence.current++,
          action,
          gameKey,
          resolve,
        });
        syncPendingActions();
        void processActionQueueRef.current();
      });
    },
    [currentGameKey, syncPendingActions],
  );

  useEffect(() => {
    enqueueActionRef.current = enqueueAction;
  }, [enqueueAction]);

  const persistPresentation = useCallback(
    (record: ActiveGameRecord, force = false) => {
      if (gameMode === 'account') {
        saveActiveAccountGame(record);
        const currentGame = accountGameRef.current;
        const currentAccount = accountRef.current;
        if (
          !currentGame ||
          !currentAccount ||
          currentGame.id !== record.sessionId
        )
          return;
        const finalState =
          record.paused || currentGame.snapshot.status === 'solved';
        if (
          !force &&
          !finalState &&
          record.elapsedSeconds - lastSyncedAccountElapsed.current < 5
        )
          return;
        lastSyncedAccountElapsed.current = record.elapsedSeconds;
        void client
          .updateAccountGamePresentation(
            currentGame.id,
            record.elapsedSeconds,
            currentAccount.csrf_token,
          )
          .catch((error) => {
            showRetry(
              'Retry saving time',
              () => persistPresentation(record, true),
              actionableError(
                error,
                'The latest game time could not be saved.',
              ),
            );
          });
        return;
      }
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
    [client, gameMode, persistRecord, showRetry],
  );

  const leaveGame = useCallback(async () => {
    if (actionQueue.current.length > 0) {
      setMessage('Wait for pending moves before leaving this puzzle.');
      return;
    }
    setBusyState(true);
    try {
      if (accountGameRef.current) {
        clearActiveAccountGame();
        setCurrentAccountGame(undefined);
      } else {
        await storageQueue.current.catch(() => undefined);
        await repository.clear();
        setCurrentGuest(undefined);
      }
      setRetryLabel(undefined);
      setRestoredGame(undefined);
      setMessage(
        accountRef.current
          ? 'Choose a game or start a new one.'
          : 'Choose a level and begin.',
      );
    } catch (error) {
      showRetry(
        'Try leaving again',
        () => void leaveGame(),
        actionableError(error, 'The local puzzle could not be cleared.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [
    repository,
    setBusyState,
    setCurrentAccountGame,
    setCurrentGuest,
    showRetry,
  ]);

  const resumeAccountGame = useCallback(
    async (gameId: string) => {
      setBusyState(true);
      setMessage('Opening your saved game…');
      try {
        const game = await client.getAccountGame(gameId);
        setCurrentAccountGame(game);
        setDifficulty(game.actual_difficulty);
        setRestoredGame(activeGameFromAccount(game));
        setRetryLabel(undefined);
        setMessage(`${titleCase(game.actual_difficulty)} puzzle restored.`);
      } catch (error) {
        showRetry(
          'Try opening again',
          () => void resumeAccountGame(gameId),
          actionableError(error, 'That saved game could not be opened.'),
        );
      } finally {
        setBusyState(false);
      }
    },
    [client, setBusyState, setCurrentAccountGame, showRetry],
  );

  const deleteAccountGame = useCallback(
    async (gameId: string) => {
      const currentAccount = accountRef.current;
      if (!currentAccount) return;
      setBusyState(true);
      try {
        await client.deleteAccountGame(gameId, currentAccount.csrf_token);
        if (accountGameRef.current?.id === gameId) {
          clearActiveAccountGame();
          setCurrentAccountGame(undefined);
        }
        await refreshAccountGames();
        setMessage('Saved game deleted.');
      } catch (error) {
        showRetry(
          'Try deleting again',
          () => void deleteAccountGame(gameId),
          actionableError(error, 'The saved game could not be deleted.'),
        );
      } finally {
        setBusyState(false);
      }
    },
    [
      client,
      refreshAccountGames,
      setBusyState,
      setCurrentAccountGame,
      showRetry,
    ],
  );

  const deleteAllAccountGames = useCallback(async () => {
    const currentAccount = accountRef.current;
    if (!currentAccount) return;
    setBusyState(true);
    try {
      await client.deleteAllAccountGames(currentAccount.csrf_token);
      setAccountGames([]);
      clearActiveAccountGame();
      setCurrentAccountGame(undefined);
      setRestoredGame(undefined);
      setMessage('All saved games deleted.');
    } catch (error) {
      showRetry(
        'Try deleting again',
        () => void deleteAllAccountGames(),
        actionableError(error, 'The saved games could not be deleted.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [client, setBusyState, setCurrentAccountGame, showRetry]);

  const logout = useCallback(async () => {
    const currentAccount = accountRef.current;
    if (!currentAccount) return;
    setBusyState(true);
    try {
      await client.logout(currentAccount.csrf_token);
      setCurrentAccount(undefined);
      setAccountGames([]);
      clearActiveAccountGame();
      setCurrentAccountGame(undefined);
      setMessage('Signed out. Your account games remain saved.');
    } catch (error) {
      showRetry(
        'Try signing out again',
        () => void logout(),
        actionableError(error, 'You could not be signed out.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [
    client,
    setBusyState,
    setCurrentAccount,
    setCurrentAccountGame,
    showRetry,
  ]);

  const revokeAccountSessions = useCallback(async () => {
    const currentAccount = accountRef.current;
    if (!currentAccount) return;
    setBusyState(true);
    try {
      await client.revokeAccountSessions(currentAccount.csrf_token);
      setCurrentAccount(undefined);
      setAccountGames([]);
      clearActiveAccountGame();
      setCurrentAccountGame(undefined);
      setMessage('All sessions revoked. Sign in again to continue.');
    } catch (error) {
      showRetry(
        'Try revoking again',
        () => void revokeAccountSessions(),
        actionableError(error, 'Sessions could not be revoked.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [
    client,
    setBusyState,
    setCurrentAccount,
    setCurrentAccountGame,
    showRetry,
  ]);

  const deleteAccount = useCallback(async () => {
    const currentAccount = accountRef.current;
    if (!currentAccount) return;
    setBusyState(true);
    try {
      await client.deleteCurrentAccount(currentAccount.csrf_token);
      setCurrentAccount(undefined);
      setAccountGames([]);
      clearActiveAccountGame();
      setCurrentAccountGame(undefined);
      setMessage('Account and saved games deleted.');
    } catch (error) {
      showRetry(
        'Try deleting the account again',
        () => void deleteAccount(),
        actionableError(error, 'The account could not be deleted.'),
      );
    } finally {
      setBusyState(false);
    }
  }, [
    client,
    setBusyState,
    setCurrentAccount,
    setCurrentAccountGame,
    showRetry,
  ]);

  const signInUrl = client.googleLoginUrl(
    typeof window === 'undefined'
      ? '/'
      : `${window.location.pathname}${window.location.search}`,
  );

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
    account,
    accountGames,
    isAccountGame:
      gameMode === 'account' && accountGameRef.current !== undefined,
    signInUrl,
    resumeAccountGame,
    deleteAccountGame,
    deleteAllAccountGames,
    logout,
    revokeAccountSessions,
    deleteAccount,
  };
};

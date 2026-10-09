// @vitest-environment jsdom
import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ACTIVE_GAME_KEY, DIFFICULTY_PREFERENCE_KEY } from '../presentation';
import type { Account, AccountGame, GuestGame } from '../api/types';
import { makeSnapshot } from '../test/fixtures';

const api = vi.hoisted(() => ({
  health: vi.fn(),
  createGuestGame: vi.fn(),
  applyGuestAction: vi.fn(),
  getCurrentAccount: vi.fn(),
  listAccountGames: vi.fn(),
  claimGuestGame: vi.fn(),
  createAccountGame: vi.fn(),
  getAccountGame: vi.fn(),
  applyAccountGameAction: vi.fn(),
  deleteAccountGame: vi.fn(),
  deleteAllAccountGames: vi.fn(),
  updateAccountGamePresentation: vi.fn(),
  logout: vi.fn(),
  revokeAccountSessions: vi.fn(),
  deleteCurrentAccount: vi.fn(),
}));

const storage = vi.hoisted(() => ({
  get: vi.fn(),
  replace: vi.fn(),
  clear: vi.fn(),
}));

vi.mock('../api/client', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../api/client')>();
  return {
    ...actual,
    SudokuApiClient: class {
      health = api.health;
      createGuestGame = api.createGuestGame;
      applyGuestAction = api.applyGuestAction;
      getCurrentAccount = api.getCurrentAccount;
      listAccountGames = api.listAccountGames;
      claimGuestGame = api.claimGuestGame;
      createAccountGame = api.createAccountGame;
      getAccountGame = api.getAccountGame;
      applyAccountGameAction = api.applyAccountGameAction;
      deleteAccountGame = api.deleteAccountGame;
      deleteAllAccountGames = api.deleteAllAccountGames;
      updateAccountGamePresentation = api.updateAccountGamePresentation;
      logout = api.logout;
      revokeAccountSessions = api.revokeAccountSessions;
      deleteCurrentAccount = api.deleteCurrentAccount;
      googleLoginUrl = (returnTo: string) => `/login?return_to=${returnTo}`;
    },
  };
});

vi.mock('../storage/guestGameRepository', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('../storage/guestGameRepository')>();
  return {
    ...actual,
    GuestGameRepository: class {
      get = storage.get;
      replace = storage.replace;
      clear = storage.clear;
    },
  };
});

import { SudokuApiError } from '../api/client';
import type { GuestGameRecord } from '../storage/guestGameRepository';
import { useSessionLifecycle } from './useSessionLifecycle';

const guest = (
  document = 'sealed-1',
  revision = 3,
  actualDifficulty: GuestGame['actual_difficulty'] = 'hard',
): GuestGame => ({
  document,
  revision,
  actual_difficulty: actualDifficulty,
  snapshot: makeSnapshot(),
});

const record = (
  game = guest(),
  localId = 'local-guest-1',
): GuestGameRecord => ({
  schema_version: 1,
  local_id: localId,
  game,
  presentation: {
    elapsed_seconds: 12,
    paused: true,
    resumed_at: 1_700_000_000_000,
  },
});

const signedInAccount: Account = {
  email: 'player@example.test',
  display_name: 'Puzzle Player',
  csrf_token: 'csrf-proof',
};

const accountGame = (id = 'account-game-1', revision = 2): AccountGame => ({
  id,
  revision,
  actual_difficulty: 'medium',
  elapsed_seconds: 12,
  snapshot: makeSnapshot(),
});

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  api.health.mockResolvedValue(true);
  api.getCurrentAccount.mockRejectedValue(
    new SudokuApiError('sign in required', 401, 'unauthenticated'),
  );
  api.listAccountGames.mockResolvedValue({ games: [] });
  storage.get.mockResolvedValue(undefined);
  storage.replace.mockResolvedValue(undefined);
  storage.clear.mockResolvedValue(undefined);
});
afterEach(() => vi.restoreAllMocks());

const readyHook = async () => {
  const hook = renderHook(() => useSessionLifecycle());
  await waitFor(() => expect(hook.result.current.initializing).toBe(false));
  return hook;
};

describe('useSessionLifecycle', () => {
  it('checks health, persists difficulty, starts a guest game, applies an action, and leaves', async () => {
    const initial = guest();
    api.createGuestGame.mockResolvedValue(initial);
    api.applyGuestAction.mockResolvedValue({
      ...guest('sealed-2', 4),
      snapshot: makeSnapshot({ can_undo: true }),
      result: {},
    });
    const { result } = await readyHook();
    expect(result.current.connection).toBe('online');
    act(() => result.current.setDifficulty('expert'));
    expect(localStorage.getItem(DIFFICULTY_PREFERENCE_KEY)).toBe('expert');

    await act(async () => void (await result.current.startGame()));
    expect(api.createGuestGame).toHaveBeenCalledWith('expert');
    expect(result.current.session?.id).toEqual(expect.any(String));
    expect(result.current.message).toBe('Hard puzzle ready.');
    expect(result.current.activeDifficulty).toBe('hard');
    expect(storage.replace).toHaveBeenCalledWith(
      expect.objectContaining({ game: initial, schema_version: 1 }),
    );

    await act(
      async () => void (await result.current.applyAction({ kind: 'undo' })),
    );
    expect(api.applyGuestAction).toHaveBeenCalledWith(initial, {
      kind: 'undo',
    });
    expect(result.current.session?.revision).toBe(4);
    expect(result.current.message).toBe('Move saved.');

    await act(async () => void (await result.current.leaveGame()));
    expect(storage.clear).toHaveBeenCalledOnce();
    expect(result.current.session).toBeUndefined();
  });

  it('restores one IndexedDB guest game and its presentation state', async () => {
    const saved = record();
    storage.get.mockResolvedValue(saved);
    const { result } = await readyHook();
    expect(result.current.session).toMatchObject({
      id: 'local-guest-1',
      revision: 3,
      actual_difficulty: 'hard',
    });
    expect(result.current.difficulty).toBe('hard');
    expect(result.current.restoredGame).toEqual({
      sessionId: 'local-guest-1',
      difficulty: 'hard',
      elapsedSeconds: 12,
      paused: true,
      resumedAt: 1_700_000_000_000,
    });
    expect(result.current.message).toBe('Your local puzzle was restored.');
  });

  it('offers retry when health, restore, creation, or storage fails', async () => {
    api.health.mockRejectedValue(new Error('offline'));
    const offline = await readyHook();
    expect(offline.result.current.connection).toBe('offline');
    expect(offline.result.current.retryLabel).toBe('Check connection');
    offline.unmount();

    api.health.mockResolvedValue(true);
    storage.get.mockRejectedValueOnce(new Error('restore failed'));
    const restoring = await readyHook();
    expect(restoring.result.current.retryLabel).toBe('Try restoring again');
    storage.get.mockResolvedValueOnce(record());
    await act(
      async () => void (await restoring.result.current.retryAction.current()),
    );
    expect(restoring.result.current.session?.id).toBe('local-guest-1');
    restoring.unmount();

    storage.get.mockResolvedValue(undefined);
    api.createGuestGame.mockRejectedValue(
      new SudokuApiError('down', 503, 'server'),
    );
    const creating = await readyHook();
    await act(
      async () => void (await creating.result.current.startGame('evil')),
    );
    expect(creating.result.current.retryLabel).toBe('Try again');
    expect(creating.result.current.message).toContain(
      'temporarily unavailable',
    );

    api.createGuestGame.mockResolvedValue(guest());
    storage.replace.mockRejectedValueOnce(new Error('storage unavailable'));
    await act(
      async () => void (await creating.result.current.retryAction.current()),
    );
    expect(creating.result.current.session).toBeUndefined();
    expect(creating.result.current.message).toBe('storage unavailable');
  });

  it('persists timer presentation with the latest sealed game', async () => {
    api.createGuestGame.mockResolvedValue(guest());
    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('easy')));
    storage.replace.mockClear();

    act(() =>
      result.current.persistPresentation({
        sessionId: result.current.session!.id,
        difficulty: 'hard',
        elapsedSeconds: 19,
        paused: false,
        resumedAt: 1_800_000_000_000,
      }),
    );
    await waitFor(() => expect(storage.replace).toHaveBeenCalledOnce());
    expect(storage.replace).toHaveBeenCalledWith(
      expect.objectContaining({
        game: expect.objectContaining({ document: 'sealed-1' }),
        presentation: {
          elapsed_seconds: 19,
          paused: false,
          resumed_at: 1_800_000_000_000,
        },
      }),
    );
  });

  it('retries failed presentation persistence and local deletion', async () => {
    api.createGuestGame.mockResolvedValue(guest());
    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('easy')));

    storage.replace.mockClear();
    storage.replace.mockRejectedValueOnce(new Error('timer storage failed'));
    act(() =>
      result.current.persistPresentation({
        sessionId: result.current.session!.id,
        difficulty: 'hard',
        elapsedSeconds: 8,
        paused: false,
      }),
    );
    await waitFor(() =>
      expect(result.current.retryLabel).toBe('Retry saving progress'),
    );
    storage.replace.mockResolvedValue(undefined);
    act(() => result.current.retryAction.current());
    await waitFor(() => expect(storage.replace).toHaveBeenCalledTimes(2));

    storage.clear.mockRejectedValueOnce(new Error('clear failed'));
    await act(async () => void (await result.current.leaveGame()));
    expect(result.current.retryLabel).toBe('Try leaving again');
    storage.clear.mockResolvedValue(undefined);
    await act(async () => void (await result.current.retryAction.current()));
    expect(storage.clear).toHaveBeenCalledTimes(2);
    expect(result.current.session).toBeUndefined();
  });

  it('covers replacement loading and solved/default action messages', async () => {
    api.createGuestGame.mockResolvedValue(guest());
    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('easy')));

    let resolveReplacement!: (game: GuestGame) => void;
    api.createGuestGame.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveReplacement = resolve;
        }),
    );
    let replacement: Promise<unknown>;
    act(() => {
      replacement = result.current.startGame('hard');
    });
    expect(result.current.preparingDifficulty).toBe('hard');
    await act(async () => {
      resolveReplacement(guest('replacement', 0, 'hard'));
      await replacement!;
    });
    expect(result.current.preparingDifficulty).toBeUndefined();

    api.applyGuestAction
      .mockResolvedValueOnce({
        ...guest('solved', 1),
        snapshot: makeSnapshot({ status: 'solved' }),
        result: {},
      })
      .mockResolvedValueOnce({
        ...guest('redo', 2),
        snapshot: makeSnapshot(),
        result: {},
      });
    await act(
      async () => void (await result.current.applyAction({ kind: 'undo' })),
    );
    expect(result.current.message).toContain('Puzzle solved');
    await act(
      async () => void (await result.current.applyAction({ kind: 'redo' })),
    );
    expect(result.current.message).toBe('Move saved.');
  });

  it('discards dependent queued actions after a failed request', async () => {
    const initial = guest();
    api.createGuestGame.mockResolvedValue(initial);
    let rejectFirst!: (error: Error) => void;
    api.applyGuestAction.mockImplementationOnce(
      () =>
        new Promise((_resolve, reject) => {
          rejectFirst = reject;
        }),
    );
    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('easy')));

    let first!: Promise<boolean>;
    let second!: Promise<boolean>;
    act(() => {
      first = result.current.applyAction({ kind: 'apply-hint' });
      second = result.current.applyAction({ kind: 'undo' });
    });
    expect(result.current.pendingActions).toHaveLength(2);

    await act(async () => {
      rejectFirst(new Error('transport failed'));
      expect(await first).toBe(false);
      expect(await second).toBe(false);
    });
    expect(api.applyGuestAction).toHaveBeenCalledTimes(1);
    expect(result.current.pendingActions).toHaveLength(0);
    expect(result.current.retryLabel).toBe('Retry move');
    expect(result.current.session?.revision).toBe(initial.revision);
  });

  it('serializes rapid guest actions against each replacement document', async () => {
    const initial = guest('sealed-3', 3);
    api.createGuestGame.mockResolvedValue(initial);
    let resolveFirst!: (response: GuestGame & { result: object }) => void;
    let resolveSecond!: (response: GuestGame & { result: object }) => void;
    api.applyGuestAction
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveFirst = resolve;
          }),
      )
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolveSecond = resolve;
          }),
      );

    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('easy')));

    let first!: Promise<boolean>;
    let second!: Promise<boolean>;
    act(() => {
      first = result.current.applyAction({
        kind: 'set-value',
        row: 1,
        column: 1,
        value: 1,
      });
      second = result.current.applyAction({
        kind: 'set-value',
        row: 1,
        column: 4,
        value: 2,
      });
    });

    expect(result.current.pendingActions).toHaveLength(2);
    expect(api.applyGuestAction).toHaveBeenCalledTimes(1);
    expect(api.applyGuestAction).toHaveBeenNthCalledWith(1, initial, {
      kind: 'set-value',
      row: 1,
      column: 1,
      value: 1,
    });

    const firstSnapshot = makeSnapshot({ can_undo: true });
    firstSnapshot.values[0]![0] = 1;
    await act(async () => {
      resolveFirst({
        ...guest('sealed-4', 4),
        snapshot: firstSnapshot,
        result: {},
      });
      expect(await first).toBe(true);
    });
    await waitFor(() => expect(api.applyGuestAction).toHaveBeenCalledTimes(2));
    expect(api.applyGuestAction.mock.calls[1]?.[0]).toMatchObject({
      document: 'sealed-4',
      revision: 4,
    });
    expect(result.current.pendingActions).toHaveLength(1);

    const secondSnapshot = makeSnapshot({ can_undo: true });
    secondSnapshot.values[0]![0] = 1;
    secondSnapshot.values[0]![3] = 2;
    await act(async () => {
      resolveSecond({
        ...guest('sealed-5', 5),
        snapshot: secondSnapshot,
        result: {},
      });
      expect(await second).toBe(true);
    });
    expect(result.current.pendingActions).toHaveLength(0);
    expect(result.current.session?.revision).toBe(5);
  });

  it('automatically claims the one local game after sign-in and only then clears it', async () => {
    const saved = record();
    storage.get.mockResolvedValue(saved);
    api.getCurrentAccount.mockResolvedValue(signedInAccount);
    api.claimGuestGame.mockResolvedValue(accountGame());
    api.listAccountGames.mockResolvedValue({
      games: [
        {
          id: 'account-game-1',
          revision: 2,
          actual_difficulty: 'medium',
          status: 'in-progress',
          elapsed_seconds: 12,
          updated_at: '2026-10-05T00:00:00Z',
        },
      ],
    });

    const { result } = await readyHook();

    expect(api.claimGuestGame).toHaveBeenCalledWith(
      saved.game.document,
      'csrf-proof',
    );
    expect(storage.clear).toHaveBeenCalledOnce();
    expect(result.current.account).toEqual(signedInAccount);
    expect(result.current.session?.id).toBe('account-game-1');
    expect(result.current.message).toBe('Game saved to your account.');
    expect(result.current.accountGames).toHaveLength(1);
  });

  it('retains a local game and offers an idempotent claim retry when claim fails', async () => {
    const saved = record();
    storage.get.mockResolvedValue(saved);
    api.getCurrentAccount.mockResolvedValue(signedInAccount);
    api.claimGuestGame.mockRejectedValueOnce(new Error('claim interrupted'));

    const { result } = await readyHook();

    expect(storage.clear).not.toHaveBeenCalled();
    expect(result.current.session?.id).toBe(saved.local_id);
    expect(result.current.retryLabel).toBe('Try saving again');

    api.claimGuestGame.mockResolvedValueOnce(accountGame());
    await act(async () => void (await result.current.retryAction.current()));
    expect(storage.clear).toHaveBeenCalledOnce();
    expect(result.current.session?.id).toBe('account-game-1');
  });

  it('reopens the active browser account game from its authoritative route', async () => {
    api.getCurrentAccount.mockResolvedValue(signedInAccount);
    api.listAccountGames.mockResolvedValue({
      games: [
        {
          id: 'saved-game',
          revision: 4,
          actual_difficulty: 'medium',
          status: 'in-progress',
          elapsed_seconds: 12,
          updated_at: '2026-10-09T17:00:00Z',
        },
      ],
    });
    api.getAccountGame.mockResolvedValue(accountGame('saved-game', 4));
    localStorage.setItem(
      ACTIVE_GAME_KEY,
      JSON.stringify({
        sessionId: 'saved-game',
        difficulty: 'medium',
        elapsedSeconds: 12,
        paused: true,
      }),
    );

    const { result } = await readyHook();

    expect(api.getAccountGame).toHaveBeenCalledWith('saved-game');
    expect(result.current.session?.id).toBe('saved-game');
    expect(result.current.restoredGame).toEqual({
      sessionId: 'saved-game',
      difficulty: 'medium',
      elapsedSeconds: 12,
      paused: true,
    });
    expect(result.current.message).toBe('Medium puzzle restored.');
  });

  it('creates, resumes, mutates, deletes, and signs out of account games', async () => {
    api.getCurrentAccount.mockResolvedValue(signedInAccount);
    const created = accountGame('created-game', 0);
    const resumed = accountGame('saved-game', 4);
    api.createAccountGame.mockResolvedValue(created);
    api.getAccountGame.mockResolvedValue(resumed);
    api.applyAccountGameAction.mockResolvedValue({
      game: accountGame('saved-game', 5),
      result: {},
    });
    api.updateAccountGamePresentation.mockResolvedValue(
      accountGame('saved-game', 5),
    );
    api.deleteAccountGame.mockResolvedValue(undefined);
    api.deleteAllAccountGames.mockResolvedValue(undefined);
    api.logout.mockResolvedValue(undefined);

    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('medium')));
    expect(api.createAccountGame).toHaveBeenCalledWith('medium', 'csrf-proof');

    await act(
      async () => void (await result.current.resumeAccountGame('saved-game')),
    );
    await act(
      async () => void (await result.current.applyAction({ kind: 'undo' })),
    );
    expect(api.applyAccountGameAction).toHaveBeenCalledWith(
      resumed,
      { kind: 'undo' },
      'csrf-proof',
    );
    expect(result.current.session?.revision).toBe(5);

    act(() =>
      result.current.persistPresentation({
        sessionId: 'saved-game',
        difficulty: 'medium',
        elapsedSeconds: 17,
        paused: false,
      }),
    );
    await waitFor(() =>
      expect(api.updateAccountGamePresentation).toHaveBeenCalledWith(
        'saved-game',
        17,
        'csrf-proof',
      ),
    );

    await act(
      async () => void (await result.current.deleteAccountGame('saved-game')),
    );
    expect(api.deleteAccountGame).toHaveBeenCalledWith(
      'saved-game',
      'csrf-proof',
    );

    await act(async () => void (await result.current.deleteAllAccountGames()));
    expect(api.deleteAllAccountGames).toHaveBeenCalledWith('csrf-proof');
    expect(result.current.accountGames).toEqual([]);

    await act(async () => void (await result.current.logout()));
    expect(api.logout).toHaveBeenCalledWith('csrf-proof');
    expect(result.current.account).toBeUndefined();
  });

  it('offers retries when account time or bulk deletion cannot be saved', async () => {
    api.getCurrentAccount.mockResolvedValue(signedInAccount);
    api.getAccountGame.mockResolvedValue(accountGame('saved-game', 4));
    api.updateAccountGamePresentation.mockRejectedValueOnce(
      new Error('time unavailable'),
    );
    api.deleteAllAccountGames.mockRejectedValueOnce(
      new Error('delete unavailable'),
    );

    const { result } = await readyHook();
    await act(
      async () => void (await result.current.resumeAccountGame('saved-game')),
    );
    act(() =>
      result.current.persistPresentation({
        sessionId: 'saved-game',
        difficulty: 'medium',
        elapsedSeconds: 17,
        paused: false,
      }),
    );
    await waitFor(() =>
      expect(result.current.retryLabel).toBe('Retry saving time'),
    );
    api.updateAccountGamePresentation.mockResolvedValue(
      accountGame('saved-game', 4),
    );
    act(() => result.current.retryAction.current());
    await waitFor(() =>
      expect(api.updateAccountGamePresentation).toHaveBeenCalledTimes(2),
    );

    await act(async () => void (await result.current.deleteAllAccountGames()));
    expect(result.current.retryLabel).toBe('Try deleting again');
    api.deleteAllAccountGames.mockResolvedValue(undefined);
    act(() => result.current.retryAction.current());
    await waitFor(() =>
      expect(api.deleteAllAccountGames).toHaveBeenCalledTimes(2),
    );
  });

  it('revokes all sessions and deletes the current account through confirmed controls', async () => {
    api.getCurrentAccount.mockResolvedValue(signedInAccount);
    api.revokeAccountSessions.mockResolvedValue(undefined);
    api.deleteCurrentAccount.mockResolvedValue(undefined);

    const revokeHook = await readyHook();
    act(() =>
      revokeHook.result.current.persistPresentation({
        sessionId: 'account-game',
        difficulty: 'easy',
        elapsedSeconds: 10,
        paused: false,
      }),
    );
    await act(
      async () =>
        void (await revokeHook.result.current.revokeAccountSessions()),
    );
    expect(api.revokeAccountSessions).toHaveBeenCalledWith('csrf-proof');
    expect(revokeHook.result.current.account).toBeUndefined();
    revokeHook.unmount();

    const deleteHook = await readyHook();
    await act(
      async () => void (await deleteHook.result.current.deleteAccount()),
    );
    expect(api.deleteCurrentAccount).toHaveBeenCalledWith('csrf-proof');
    expect(deleteHook.result.current.message).toBe(
      'Account and saved games deleted.',
    );
  });
});

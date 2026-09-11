// @vitest-environment jsdom
import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ACTIVE_GAME_KEY, DIFFICULTY_PREFERENCE_KEY } from '../presentation';
import { makeSession, makeSnapshot } from '../test/fixtures';

const api = vi.hoisted(() => ({
  health: vi.fn(),
  getSession: vi.fn(),
  createSession: vi.fn(),
  applyAction: vi.fn(),
}));

vi.mock('../api/client', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../api/client')>();
  return {
    ...actual,
    SudokuApiClient: class {
      health = api.health;
      getSession = api.getSession;
      createSession = api.createSession;
      applyAction = api.applyAction;
    },
  };
});

import { SudokuApiError } from '../api/client';
import { useSessionLifecycle } from './useSessionLifecycle';

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  api.health.mockResolvedValue(true);
});
afterEach(() => vi.restoreAllMocks());

const readyHook = async () => {
  const hook = renderHook(() => useSessionLifecycle());
  await waitFor(() => expect(hook.result.current.initializing).toBe(false));
  return hook;
};

describe('useSessionLifecycle', () => {
  it('checks health, persists difficulty, starts a game, applies an action, and leaves', async () => {
    const initial = makeSession();
    api.createSession.mockResolvedValue(initial);
    api.applyAction.mockResolvedValue({
      revision: 4,
      snapshot: makeSnapshot({ can_undo: true }),
      result: {},
      warnings: ['Careful move.'],
    });
    const { result } = await readyHook();
    expect(result.current.connection).toBe('online');
    act(() => result.current.setDifficulty('expert'));
    expect(localStorage.getItem(DIFFICULTY_PREFERENCE_KEY)).toBe('expert');

    await act(async () => void (await result.current.startGame()));
    expect(api.createSession).toHaveBeenCalledWith('expert');
    expect(result.current.session?.id).toBe('session-1');
    expect(result.current.message).toBe('Expert puzzle ready.');

    await act(
      async () => void (await result.current.applyAction({ kind: 'undo' })),
    );
    expect(api.applyAction).toHaveBeenCalledWith(initial, { kind: 'undo' });
    expect(result.current.session?.revision).toBe(4);
    expect(result.current.message).toBe('Careful move.');

    localStorage.setItem(ACTIVE_GAME_KEY, '{}');
    act(() => result.current.leaveGame());
    expect(result.current.session).toBeUndefined();
    expect(localStorage.getItem(ACTIVE_GAME_KEY)).toBeNull();
  });

  it('restores an active session and its presentation record', async () => {
    const restored = makeSession({ id: 'saved-session' });
    api.getSession.mockResolvedValue(restored);
    localStorage.setItem(
      ACTIVE_GAME_KEY,
      JSON.stringify({
        sessionId: 'saved-session',
        difficulty: 'hard',
        elapsedSeconds: 12,
        paused: true,
      }),
    );
    const { result } = await readyHook();
    expect(api.getSession).toHaveBeenCalledWith('saved-session');
    expect(result.current.session).toEqual(restored);
    expect(result.current.difficulty).toBe('hard');
    expect(result.current.restoredGame?.elapsedSeconds).toBe(12);
  });

  it('offers retry when health or game creation fails', async () => {
    api.health.mockRejectedValue(new Error('offline'));
    const offline = await readyHook();
    expect(offline.result.current.connection).toBe('offline');
    expect(offline.result.current.retryLabel).toBe('Check connection');
    expect(offline.result.current.message).toContain('could not be reached');
    offline.unmount();

    api.health.mockResolvedValue(true);
    api.createSession.mockRejectedValue(
      new SudokuApiError('down', 503, 'server'),
    );
    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('evil')));
    expect(result.current.retryLabel).toBe('Try again');
    expect(result.current.message).toContain('temporarily unavailable');
    api.createSession.mockResolvedValue(makeSession());
    await act(async () => void (await result.current.retryAction.current()));
    expect(result.current.session?.id).toBe('session-1');
  });

  it('reloads authoritative state after a revision conflict', async () => {
    const initial = makeSession();
    const current = makeSession({ revision: 9 });
    api.createSession.mockResolvedValue(initial);
    api.applyAction.mockRejectedValue(
      new SudokuApiError('stale', 409, 'revision-conflict'),
    );
    api.getSession.mockResolvedValue(current);
    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('easy')));
    await act(
      async () => void (await result.current.applyAction({ kind: 'undo' })),
    );
    expect(api.getSession).toHaveBeenCalledWith('session-1');
    expect(result.current.session?.revision).toBe(9);
    expect(result.current.message).toContain('latest game was loaded');
  });

  it('keeps the confirmed board and exposes retries for failed actions and reloads', async () => {
    const initial = makeSession();
    api.createSession.mockResolvedValue(initial);
    api.applyAction.mockRejectedValue(new Error('move failed'));
    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('easy')));
    await act(
      async () => void (await result.current.applyAction({ kind: 'undo' })),
    );
    expect(result.current.retryLabel).toBe('Retry move');
    expect(result.current.message).toBe('move failed');

    api.applyAction.mockRejectedValue(
      new SudokuApiError('stale', 409, 'revision-conflict'),
    );
    api.getSession.mockRejectedValue(new Error('reload failed'));
    await act(async () => void (await result.current.retryAction.current()));
    expect(result.current.retryLabel).toBe('Reload latest board');
    expect(result.current.message).toContain('last confirmed board');
    api.getSession.mockResolvedValue(makeSession({ revision: 11 }));
    await act(async () => void (await result.current.retryAction.current()));
    expect(result.current.session?.revision).toBe(11);
  });

  it('supports an offline health result and retrying a failed restore', async () => {
    api.health.mockResolvedValue(false);
    const offline = await readyHook();
    expect(offline.result.current.connection).toBe('offline');
    offline.unmount();

    api.health.mockResolvedValue(true);
    localStorage.setItem(
      ACTIVE_GAME_KEY,
      JSON.stringify({
        sessionId: 'saved-session',
        difficulty: 'medium',
        elapsedSeconds: 2,
        paused: false,
      }),
    );
    api.getSession.mockRejectedValue(new Error('restore failed'));
    const { result } = await readyHook();
    expect(result.current.retryLabel).toBe('Try restoring again');
    api.getSession.mockResolvedValue(makeSession({ id: 'saved-session' }));
    await act(async () => void (await result.current.retryAction.current()));
    expect(result.current.session?.id).toBe('saved-session');
  });

  it('covers replacement loading and solved/default action messages', async () => {
    const initial = makeSession();
    api.createSession.mockResolvedValue(initial);
    const { result } = await readyHook();
    await act(async () => void (await result.current.startGame('easy')));

    let resolveReplacement!: (session: ReturnType<typeof makeSession>) => void;
    api.createSession.mockImplementation(
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
      resolveReplacement(makeSession({ id: 'replacement' }));
      await replacement!;
    });
    expect(result.current.preparingDifficulty).toBeUndefined();

    api.applyAction
      .mockResolvedValueOnce({
        revision: 5,
        snapshot: makeSnapshot({ status: 'solved' }),
        result: {},
      })
      .mockResolvedValueOnce({
        revision: 6,
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
});

// @vitest-environment jsdom
import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ACTIVE_GAME_KEY, DIFFICULTY_PREFERENCE_KEY } from '../presentation';
import { makeSession, makeSnapshot } from '../test/fixtures';

const api = vi.hoisted(() => ({
  health: vi.fn(),
  getSession: vi.fn(),
  listSessions: vi.fn(),
  deleteSession: vi.fn(),
  importSession: vi.fn(),
  exportSession: vi.fn(),
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
      listSessions = api.listSessions;
      deleteSession = api.deleteSession;
      importSession = api.importSession;
      exportSession = api.exportSession;
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
  api.listSessions.mockResolvedValue({ sessions: [] });
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
    api.listSessions.mockResolvedValue({ sessions: [] });
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
    api.listSessions.mockResolvedValue({ sessions: [] });
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

  it('discards dependent queued actions after a failed request', async () => {
    const initial = makeSession();
    api.createSession.mockResolvedValue(initial);
    let rejectFirst!: (error: Error) => void;
    api.applyAction.mockImplementationOnce(
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
    expect(api.applyAction).toHaveBeenCalledTimes(1);
    expect(result.current.pendingActions).toHaveLength(0);
    expect(result.current.retryLabel).toBe('Retry move');
    expect(result.current.session).toEqual(initial);
  });

  it('serializes rapid actions against each confirmed revision', async () => {
    const initial = makeSession({ revision: 3 });
    api.createSession.mockResolvedValue(initial);
    let resolveFirst!: (response: {
      revision: number;
      snapshot: ReturnType<typeof makeSnapshot>;
      result: object;
    }) => void;
    let resolveSecond!: (response: {
      revision: number;
      snapshot: ReturnType<typeof makeSnapshot>;
      result: object;
    }) => void;
    api.applyAction
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
    expect(api.applyAction).toHaveBeenCalledTimes(1);
    expect(api.applyAction).toHaveBeenNthCalledWith(1, initial, {
      kind: 'set-value',
      row: 1,
      column: 1,
      value: 1,
    });

    const firstSnapshot = makeSnapshot({ can_undo: true });
    firstSnapshot.values[0]![0] = 1;
    await act(async () => {
      resolveFirst({ revision: 4, snapshot: firstSnapshot, result: {} });
      expect(await first).toBe(true);
    });
    await waitFor(() => expect(api.applyAction).toHaveBeenCalledTimes(2));
    expect(api.applyAction.mock.calls[1]?.[0]).toMatchObject({ revision: 4 });
    expect(result.current.pendingActions).toHaveLength(1);

    const secondSnapshot = makeSnapshot({ can_undo: true });
    secondSnapshot.values[0]![0] = 1;
    secondSnapshot.values[0]![3] = 2;
    await act(async () => {
      resolveSecond({ revision: 5, snapshot: secondSnapshot, result: {} });
      expect(await second).toBe(true);
    });
    expect(result.current.pendingActions).toHaveLength(0);
    expect(result.current.session?.revision).toBe(5);
  });
});

it('lists, continues, imports, discards, and exports saved sessions', async () => {
  const summary = {
    id: 'saved-session',
    revision: 4,
    status: 'in-progress' as const,
    updated_at: '2026-09-14T20:00:00Z',
    recovered: true,
  };
  api.listSessions.mockResolvedValue({ sessions: [summary] });
  api.getSession.mockResolvedValue(makeSession({ id: 'saved-session' }));
  api.importSession.mockResolvedValue(makeSession({ id: 'imported-session' }));
  api.deleteSession.mockResolvedValue(undefined);
  api.exportSession.mockResolvedValue(
    new Blob(['{}'], { type: 'application/vnd.sudoku.session+json' }),
  );
  const createObjectURL = vi.fn(() => 'blob:session');
  const revokeObjectURL = vi.fn();
  Object.defineProperty(URL, 'createObjectURL', {
    configurable: true,
    value: createObjectURL,
  });
  Object.defineProperty(URL, 'revokeObjectURL', {
    configurable: true,
    value: revokeObjectURL,
  });
  const click = vi
    .spyOn(HTMLAnchorElement.prototype, 'click')
    .mockImplementation(() => undefined);

  const { result } = await readyHook();
  expect(result.current.savedSessions).toEqual([summary]);

  await act(
    async () => void (await result.current.continueSession('saved-session')),
  );
  expect(result.current.session?.id).toBe('saved-session');
  expect(result.current.sessionDifficulty).toBeUndefined();

  await act(async () => void (await result.current.exportSession()));
  expect(api.exportSession).toHaveBeenCalledWith('saved-session');
  expect(createObjectURL).toHaveBeenCalled();
  expect(click).toHaveBeenCalled();
  expect(revokeObjectURL).toHaveBeenCalledWith('blob:session');

  const document = new File(['{}'], 'puzzle.json', {
    type: 'application/json',
  });
  await act(async () => void (await result.current.importSession(document)));
  expect(api.importSession).toHaveBeenCalledWith(document);
  expect(result.current.session?.id).toBe('imported-session');

  await act(
    async () => void (await result.current.discardSession('saved-session')),
  );
  expect(api.deleteSession).toHaveBeenCalledWith('saved-session');
  expect(result.current.savedSessions).toEqual([]);
});

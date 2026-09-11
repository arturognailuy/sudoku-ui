// @vitest-environment jsdom
import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ACTIVE_GAME_KEY } from '../presentation';
import { useGameTimer } from './useGameTimer';

beforeEach(() => {
  vi.useFakeTimers();
  localStorage.clear();
});
afterEach(() => vi.useRealTimers());

const base = {
  activeSessionId: 'session-1',
  difficulty: 'medium' as const,
  preparing: false,
  solved: false,
};

describe('useGameTimer', () => {
  it('starts a new session at zero, ticks, pauses, and persists presentation state', () => {
    const { result } = renderHook(() => useGameTimer(base));
    act(() => vi.advanceTimersByTime(2100));
    expect(result.current.elapsedSeconds).toBe(2);
    act(() => result.current.setPaused(true));
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current.elapsedSeconds).toBe(2);
    expect(
      JSON.parse(localStorage.getItem(ACTIVE_GAME_KEY) ?? '{}'),
    ).toMatchObject({
      sessionId: 'session-1',
      difficulty: 'medium',
      elapsedSeconds: 2,
      paused: true,
    });
    act(() => result.current.resetTimer());
    expect(result.current.elapsedSeconds).toBe(0);
    expect(result.current.paused).toBe(false);
  });

  it('restores elapsed time and a running resume point once per session', () => {
    vi.setSystemTime(new Date('2026-09-11T12:00:10Z'));
    const restoredGame = {
      sessionId: 'session-1',
      difficulty: 'hard' as const,
      elapsedSeconds: 20,
      resumedAt: new Date('2026-09-11T12:00:05Z').getTime(),
      paused: false,
    };
    const { result, rerender } = renderHook(
      ({ confirmationAction }: { confirmationAction?: 'home' }) =>
        useGameTimer({ ...base, restoredGame, confirmationAction }),
      {
        initialProps: {
          confirmationAction: undefined,
        } as { confirmationAction?: 'home' },
      },
    );
    expect(result.current.elapsedSeconds).toBe(25);
    rerender({ confirmationAction: 'home' });
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current.elapsedSeconds).toBe(25);
    rerender({ confirmationAction: undefined });
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.elapsedSeconds).toBe(26);
  });

  it('restores an explicitly paused game without adding wall time', () => {
    const { result } = renderHook(() =>
      useGameTimer({
        ...base,
        restoredGame: {
          sessionId: 'session-1',
          difficulty: 'easy',
          elapsedSeconds: 44,
          resumedAt: Date.now() - 100000,
          paused: true,
        },
      }),
    );
    expect(result.current.paused).toBe(true);
    expect(result.current.elapsedSeconds).toBe(44);
  });

  it('does not create a timer or storage record without an active session', () => {
    const { result } = renderHook(() =>
      useGameTimer({ ...base, activeSessionId: undefined }),
    );
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current.elapsedSeconds).toBe(0);
    expect(localStorage.getItem(ACTIVE_GAME_KEY)).toBeNull();
  });
});

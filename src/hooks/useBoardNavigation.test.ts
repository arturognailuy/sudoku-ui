// @vitest-environment jsdom
import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { makeSession, makeSnapshot } from '../test/fixtures';
import { useBoardNavigation } from './useBoardNavigation';

const setup = (snapshot = makeSnapshot()) => {
  const applyAction = vi.fn().mockResolvedValue(true);
  const setMessage = vi.fn();
  const session = makeSession({ snapshot });
  const hook = renderHook(() =>
    useBoardNavigation({
      session,
      paused: false,
      applyAction,
      setMessage,
    }),
  );
  return { ...hook, applyAction, setMessage, session };
};

afterEach(() => {
  vi.useRealTimers();
  document.body.replaceChildren();
  localStorage.clear();
});

describe('useBoardNavigation', () => {
  it('finds the first editable cell and derives complete non-invalid digits', () => {
    const snapshot = makeSnapshot();
    for (let column = 0; column < 9; column += 1)
      snapshot.values[0]![column] = 4;
    snapshot.invalid[0]![8] = true;
    snapshot.values[0]![1] = 5;
    for (let row = 1; row < 9; row += 1) snapshot.values[row]![0] = 5;
    snapshot.givens[0]![0] = 4;
    const { result } = setup(snapshot);
    expect(result.current.firstFocusableCell).toEqual([0, 1]);
    expect(result.current.completedDigits.has(4)).toBe(false);
    expect(result.current.completedDigits.has(5)).toBe(true);
  });

  it('builds selected, peer, matching, given, and invalid cell classes', () => {
    const snapshot = makeSnapshot();
    snapshot.values[0]![0] = 3;
    snapshot.values[0]![1] = 3;
    snapshot.givens[1]![0] = 8;
    snapshot.invalid[1]![1] = true;
    const { result } = setup(snapshot);
    act(() => result.current.setSelected([0, 0]));
    expect(result.current.cellClass(0, 0)).toContain('game-cell--selected');
    expect(result.current.cellClass(0, 1)).toContain('game-cell--matching');
    expect(result.current.cellClass(1, 0)).toContain('game-cell--given');
    expect(result.current.cellClass(1, 0)).toContain('game-cell--peer');
    expect(result.current.cellClass(1, 1)).toContain('game-cell--invalid');
  });

  it('requires selection, then debounces optimistic notes through one action', async () => {
    vi.useFakeTimers();
    const snapshot = makeSnapshot();
    snapshot.notes[0]![0] = [2];
    const { result, applyAction, setMessage } = setup(snapshot);
    act(() => result.current.enterDigit(7));
    expect(setMessage).toHaveBeenCalledWith(
      'Select an editable cell before entering a number.',
    );
    act(() => result.current.setSelected([0, 0]));
    act(() => result.current.enterDigit(7));
    expect(applyAction).toHaveBeenLastCalledWith({
      kind: 'set-value',
      row: 1,
      column: 1,
      value: 7,
    });
    act(() => result.current.setNotesMode(true));
    act(() => {
      result.current.enterDigit(3);
      result.current.enterDigit(9);
    });
    expect(result.current.displaySession?.snapshot.notes[0]![0]).toEqual([
      2, 3, 9,
    ]);
    expect(applyAction).toHaveBeenCalledTimes(1);
    await act(async () => vi.advanceTimersByTime(180));
    expect(applyAction).toHaveBeenLastCalledWith({
      kind: 'set-notes',
      row: 1,
      column: 1,
      values: [2, 3, 9],
    });
    expect(applyAction).toHaveBeenCalledTimes(2);
    act(() => result.current.clearSelected());
    expect(result.current.displaySession?.snapshot.notes[0]![0]).toEqual([]);
    await act(async () => vi.advanceTimersByTime(180));
    expect(applyAction).toHaveBeenLastCalledWith({
      kind: 'set-notes',
      row: 1,
      column: 1,
      values: [],
    });
  });

  it('keeps newer notes visible and serializes them after an in-flight save', async () => {
    vi.useFakeTimers();
    let resolveFirst: (accepted: boolean) => void = () => undefined;
    const firstSave = new Promise<boolean>((resolve) => {
      resolveFirst = resolve;
    });
    const applyAction = vi
      .fn()
      .mockImplementationOnce(() => firstSave)
      .mockResolvedValue(true);
    const session = makeSession();
    const { result } = renderHook(() =>
      useBoardNavigation({
        session,
        paused: false,
        applyAction,
        setMessage: vi.fn(),
      }),
    );

    act(() => {
      result.current.setSelected([0, 0]);
      result.current.setNotesMode(true);
    });
    act(() => {
      result.current.enterDigit(1);
      result.current.enterDigit(2);
      result.current.enterDigit(3);
    });
    await act(async () => vi.advanceTimersByTime(180));
    expect(applyAction).toHaveBeenCalledTimes(1);
    expect(applyAction).toHaveBeenLastCalledWith({
      kind: 'set-notes',
      row: 1,
      column: 1,
      values: [1, 2, 3],
    });

    act(() => result.current.enterDigit(4));
    expect(result.current.displaySession?.snapshot.notes[0]![0]).toEqual([
      1, 2, 3, 4,
    ]);
    await act(async () => vi.advanceTimersByTime(180));
    expect(applyAction).toHaveBeenCalledTimes(1);
    expect(result.current.displaySession?.snapshot.notes[0]![0]).toEqual([
      1, 2, 3, 4,
    ]);

    await act(async () => {
      resolveFirst(true);
      await firstSave;
    });
    await act(async () => vi.advanceTimersByTime(0));
    expect(applyAction).toHaveBeenCalledTimes(2);
    expect(applyAction).toHaveBeenLastCalledWith({
      kind: 'set-notes',
      row: 1,
      column: 1,
      values: [1, 2, 3, 4],
    });
  });

  it('blocks givens, duplicate values, paused entry, and note entry on values', () => {
    const snapshot = makeSnapshot();
    snapshot.givens[0]![0] = 1;
    snapshot.values[0]![0] = 1;
    snapshot.values[0]![1] = 6;
    const applyAction = vi.fn().mockResolvedValue(true);
    const setMessage = vi.fn();
    const session = makeSession({ snapshot });
    const { result, rerender } = renderHook(
      ({ paused }) =>
        useBoardNavigation({ session, paused, applyAction, setMessage }),
      { initialProps: { paused: false } },
    );
    act(() => result.current.setSelected([0, 0]));
    expect(result.current.selectedCellBlocksDigitInput).toBe(true);
    act(() => result.current.enterDigit(2));
    act(() => result.current.setSelected([0, 1]));
    act(() => result.current.enterDigit(6));
    act(() => result.current.setNotesMode(true));
    expect(result.current.selectedCellBlocksDigitInput).toBe(true);
    act(() => result.current.enterDigit(3));
    rerender({ paused: true });
    act(() => result.current.enterDigit(4));
    expect(applyAction).not.toHaveBeenCalled();
  });

  it('handles global keyboard navigation and clears selection outside controls', () => {
    const snapshot = makeSnapshot();
    snapshot.givens[0]![0] = 9;
    const { result, applyAction, session } = setup(snapshot);
    const button = document.createElement('button');
    button.dataset.cell = '0-1';
    document.body.append(button);
    act(() =>
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' })),
    );
    expect(result.current.selected).toEqual([0, 1]);
    expect(button).toHaveFocus();
    act(() => window.dispatchEvent(new KeyboardEvent('keydown', { key: '8' })));
    expect(applyAction).toHaveBeenCalledWith({
      kind: 'set-value',
      row: 1,
      column: 2,
      value: 8,
    });
    act(() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'n' })));
    expect(result.current.notesMode).toBe(true);
    act(() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' })));
    expect(result.current.automaticCandidates).toBe(true);
    expect(
      JSON.parse(
        localStorage.getItem('sudoku-ui.automatic-candidates.v2') ?? '{}',
      ),
    ).toEqual({ sessionId: session.id, enabled: true });
    act(() =>
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true })),
    );
    expect(result.current.selected).toBeUndefined();
  });

  it('restores candidates only for the same game and resets every mode for a new game', () => {
    const firstSession = makeSession({ id: 'session-one' });
    const secondSession = makeSession({ id: 'session-two' });
    const applyAction = vi.fn().mockResolvedValue(true);
    const setMessage = vi.fn();
    const { result, rerender } = renderHook(
      ({ session }) =>
        useBoardNavigation({
          session,
          paused: false,
          applyAction,
          setMessage,
        }),
      { initialProps: { session: firstSession } },
    );

    act(() => {
      result.current.setSelected([0, 0]);
      result.current.setNotesMode(true);
      result.current.setAutomaticCandidates(true);
    });
    expect(result.current.automaticCandidates).toBe(true);

    rerender({ session: secondSession });

    expect(result.current.selected).toBeUndefined();
    expect(result.current.notesMode).toBe(false);
    expect(result.current.automaticCandidates).toBe(false);
  });
});

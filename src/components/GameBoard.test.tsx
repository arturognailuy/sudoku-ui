// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { makeSession, makeSnapshot } from '../test/fixtures';
import { GameBoard } from './GameBoard';

describe('GameBoard', () => {
  it('renders 81 accessible cells and one toggled candidate grid', () => {
    const snapshot = makeSnapshot();
    snapshot.values[0]![0] = 5;
    snapshot.givens[0]![0] = 5;
    snapshot.values[0]![1] = 3;
    snapshot.invalid[0]![1] = true;
    snapshot.candidates[0]![2] = [1, 4, 8];
    snapshot.candidates[0]![3] = [1, 4, 8];
    snapshot.candidates[0]![4] = [1, 2, 6, 9];
    const setSelected = vi.fn();

    const { rerender } = render(
      <GameBoard
        session={makeSession({ snapshot })}
        paused={false}
        selected={[0, 1]}
        setSelected={setSelected}
        firstFocusableCell={[0, 2]}
        selectedValue={3}
        cellClass={(row, column) => `cell-${row}-${column}`}
        showCandidates
      />,
    );

    expect(screen.getAllByRole('gridcell')).toHaveLength(81);
    expect(screen.getByLabelText('Row 1, column 1, given 5')).toBeTruthy();
    const invalid = screen.getByLabelText('Row 1, column 2, 3, invalid');
    expect(invalid.getAttribute('aria-invalid')).toBe('true');
    expect(invalid.tabIndex).toBe(0);
    expect(
      screen.getByLabelText('Row 1, column 3, empty, candidates 1, 4, 8'),
    ).toBeTruthy();
    expect(
      screen.getByLabelText('Row 1, column 4, empty, candidates 1, 4, 8'),
    ).toHaveClass('cell-0-3');
    expect(
      screen.getByLabelText('Row 1, column 5, empty, candidates 1, 2, 6, 9'),
    ).toHaveTextContent('1269');

    rerender(
      <GameBoard
        session={makeSession({ snapshot })}
        paused={false}
        selected={[0, 1]}
        setSelected={setSelected}
        firstFocusableCell={[0, 2]}
        selectedValue={3}
        cellClass={(row, column) => `cell-${row}-${column}`}
        showCandidates={false}
      />,
    );
    expect(screen.getByLabelText('Row 1, column 3, empty')).toBeTruthy();
    expect(document.querySelector('.cell-note--matching')).toBeNull();
    fireEvent.click(screen.getByLabelText('Row 1, column 3, empty'));
    expect(setSelected).toHaveBeenCalledWith([0, 2]);
  });

  it('renders color-independent cell and candidate hint semantics', () => {
    const snapshot = makeSnapshot();
    snapshot.candidates[0]![0] = [1, 3];
    render(
      <GameBoard
        session={makeSession({ snapshot })}
        paused={false}
        setSelected={vi.fn()}
        firstFocusableCell={[0, 0]}
        selectedValue={0}
        cellClass={() => 'game-cell'}
        showCandidates
        hintMarks={[
          { target: { kind: 'row', index: 1 }, role: 'premise' },
          {
            target: { kind: 'candidate', row: 1, column: 1, value: 3 },
            role: 'eliminated',
          },
        ]}
      />,
    );
    const cell = screen.getByLabelText(
      'Row 1, column 1, empty, candidates 1, 3, hint evidence, candidate eliminated',
    );
    expect(cell).toHaveClass(
      'game-cell--hint-premise',
      'game-cell--hint-eliminated',
    );
    expect(
      document.querySelector('.cell-note--hint-eliminated'),
    ).toHaveTextContent('3');
  });

  it('renders typed links, group labels, and chain order without relying on color', () => {
    const snapshot = makeSnapshot();
    snapshot.candidates[0]![0] = [1, 3];
    snapshot.candidates[0]![1] = [3, 7];
    render(
      <GameBoard
        session={makeSession({ snapshot })}
        paused={false}
        setSelected={vi.fn()}
        firstFocusableCell={[0, 0]}
        selectedValue={0}
        cellClass={() => 'game-cell'}
        showCandidates
        hintMarks={[
          {
            target: { kind: 'candidate', row: 1, column: 1, value: 3 },
            role: 'premise',
          },
          {
            target: { kind: 'candidate', row: 1, column: 2, value: 3 },
            role: 'premise',
          },
        ]}
        hintNodes={[
          {
            id: 'r1c1-v3',
            target: { kind: 'candidate', row: 1, column: 1, value: 3 },
            group: 'A',
            order: 1,
          },
          {
            id: 'r1c2-v3',
            target: { kind: 'candidate', row: 1, column: 2, value: 3 },
            group: 'B',
            order: 2,
          },
        ]}
        hintLinks={[{ from: 'r1c1-v3', to: 'r1c2-v3', kind: 'implication' }]}
      />,
    );
    expect(document.querySelectorAll('.hint-node')).toHaveLength(2);
    expect(document.querySelector('.hint-link--implication')).toBeTruthy();
    expect(
      screen.getByLabelText(/Row 1, column 1.*group A.*chain position 1/),
    ).toBeTruthy();
  });

  it('commits desktop pointer selection before the click completes', () => {
    const setSelected = vi.fn();
    render(
      <GameBoard
        session={makeSession({ snapshot: makeSnapshot() })}
        paused={false}
        selected={[0, 0]}
        setSelected={setSelected}
        firstFocusableCell={[0, 0]}
        selectedValue={0}
        cellClass={() => 'game-cell'}
        showCandidates={false}
      />,
    );

    const nextCell = screen.getByLabelText('Row 1, column 2, empty');
    fireEvent.pointerDown(nextCell, { pointerType: 'mouse' });
    expect(setSelected).toHaveBeenCalledWith([0, 1]);

    setSelected.mockClear();
    fireEvent.pointerDown(nextCell, { pointerType: 'touch' });
    expect(setSelected).not.toHaveBeenCalled();
    fireEvent.click(nextCell);
    expect(setSelected).toHaveBeenCalledWith([0, 1]);
  });

  it('keeps a visible hint board read-only for pointer and keyboard focus', () => {
    const setSelected = vi.fn();
    render(
      <GameBoard
        session={makeSession({ snapshot: makeSnapshot() })}
        paused={false}
        readOnly
        setSelected={setSelected}
        firstFocusableCell={[0, 0]}
        selectedValue={0}
        cellClass={() => 'game-cell'}
        showCandidates={false}
      />,
    );

    const board = screen.getByRole('grid');
    const cell = screen.getByLabelText('Row 1, column 1, empty');
    expect(board).toHaveAttribute('aria-readonly', 'true');
    expect(cell).toHaveAttribute('aria-disabled', 'true');
    expect(cell.tabIndex).toBe(-1);
    fireEvent.pointerDown(cell, { pointerType: 'mouse' });
    fireEvent.focus(cell);
    fireEvent.click(cell);
    expect(setSelected).not.toHaveBeenCalled();
  });

  it('gives the first open cell the roving tab stop and conceals a paused board', () => {
    render(
      <GameBoard
        session={makeSession({ snapshot: makeSnapshot() })}
        paused
        setSelected={vi.fn()}
        firstFocusableCell={[2, 4]}
        selectedValue={0}
        cellClass={() => 'game-cell'}
        showCandidates={false}
      />,
    );
    expect(screen.getByLabelText('Row 3, column 5, empty').tabIndex).toBe(0);
    expect(screen.getByRole('status')).toHaveTextContent(
      'Puzzle pausedYour time is stopped.',
    );
    expect(document.querySelector('.board-stage--paused')).toBeTruthy();
  });
});

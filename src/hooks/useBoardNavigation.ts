import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Digit, GameAction, Session } from '../api/types';
import type { ConfirmationAction } from '../presentation';

interface UseBoardNavigationOptions {
  session?: Session;
  paused: boolean;
  confirmationAction?: ConfirmationAction;
  applyAction: (action: GameAction) => Promise<void>;
  setMessage: Dispatch<SetStateAction<string>>;
}

export const useBoardNavigation = ({
  session,
  paused,
  confirmationAction,
  applyAction,
  setMessage,
}: UseBoardNavigationOptions) => {
  const [selected, setSelected] = useState<[number, number]>();
  const [notesMode, setNotesMode] = useState(false);

  useEffect(() => {
    setSelected(undefined);
    setNotesMode(false);
  }, [session?.id]);

  const completedDigits = useMemo(() => {
    const counts = Array.from({ length: 10 }, () => 0);
    for (const [row, rowValues] of (session?.snapshot.values ?? []).entries()) {
      for (const [column, value] of rowValues.entries()) {
        if (
          value >= 1 &&
          value <= 9 &&
          session?.snapshot.invalid[row]?.[column] !== true
        ) {
          counts[value] += 1;
        }
      }
    }
    return new Set(
      Array.from({ length: 9 }, (_, index) => (index + 1) as Digit).filter(
        (digit) => counts[digit] >= 9,
      ),
    );
  }, [session]);

  const firstOpenCell = useCallback((nextSession: Session) => {
    for (let row = 0; row < 9; row += 1) {
      for (let column = 0; column < 9; column += 1) {
        if (nextSession.snapshot.givens[row]?.[column] === 0) {
          return [row, column] as [number, number];
        }
      }
    }
    return undefined;
  }, []);

  const firstFocusableCell = useMemo(
    () => (session ? firstOpenCell(session) : undefined),
    [firstOpenCell, session],
  );

  const selectedCellBlocksDigitInput =
    selected !== undefined &&
    session !== undefined &&
    (session.snapshot.givens[selected[0]]?.[selected[1]] !== 0 ||
      (notesMode && session.snapshot.values[selected[0]]?.[selected[1]] !== 0));

  const selectedCellCanErase =
    selected !== undefined &&
    session !== undefined &&
    session.snapshot.givens[selected[0]]?.[selected[1]] === 0 &&
    (notesMode
      ? session.snapshot.values[selected[0]]?.[selected[1]] === 0 &&
        (session.snapshot.notes[selected[0]]?.[selected[1]]?.length ?? 0) > 0
      : session.snapshot.values[selected[0]]?.[selected[1]] !== 0);

  const enterDigit = useCallback(
    (digit: Digit) => {
      if (
        !session ||
        paused ||
        completedDigits.has(digit) ||
        selectedCellBlocksDigitInput
      )
        return;
      if (!selected) {
        setMessage('Select an editable cell before entering a number.');
        return;
      }
      const [row, column] = selected;
      if (session.snapshot.givens[row]?.[column] !== 0) return;
      if (!notesMode && session.snapshot.values[row]?.[column] === digit)
        return;
      let action: GameAction;
      if (notesMode) {
        action = {
          kind: 'toggle-note',
          row: row + 1,
          column: column + 1,
          value: digit,
        };
      } else {
        action = {
          kind: 'set-value',
          row: row + 1,
          column: column + 1,
          value: digit,
        };
      }
      void applyAction(action);
    },
    [
      applyAction,
      completedDigits,
      notesMode,
      paused,
      selected,
      selectedCellBlocksDigitInput,
      session,
      setMessage,
    ],
  );

  const clearSelected = useCallback(() => {
    if (!selected || !session || paused || !selectedCellCanErase) return;
    const [row, column] = selected;
    void applyAction({
      kind: notesMode ? 'clear-notes' : 'clear-value',
      row: row + 1,
      column: column + 1,
    });
  }, [applyAction, notesMode, paused, selected, selectedCellCanErase, session]);

  const moveSelection = useCallback(
    (rowDelta: number, columnDelta: number) => {
      if (!session) return;
      if (!selected) {
        const first = firstOpenCell(session);
        if (!first) return;
        setSelected(first);
        document
          .querySelector<HTMLButtonElement>(
            `[data-cell="${first[0]}-${first[1]}"]`,
          )
          ?.focus();
        return;
      }
      const [row, column] = selected;
      const nextRow = (row + rowDelta + 9) % 9;
      const nextColumn = (column + columnDelta + 9) % 9;
      setSelected([nextRow, nextColumn]);
      document
        .querySelector<HTMLButtonElement>(
          `[data-cell="${nextRow}-${nextColumn}"]`,
        )
        ?.focus();
    },
    [firstOpenCell, selected, session],
  );

  const handleGameKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (paused || confirmationAction) return;
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.matches('input, textarea, select') || target.isContentEditable)
      )
        return;
      const digit = Number(event.key);
      if (digit >= 1 && digit <= 9) {
        event.preventDefault();
        enterDigit(digit as Digit);
        return;
      }
      const moves: Record<string, [number, number]> = {
        ArrowUp: [-1, 0],
        ArrowDown: [1, 0],
        ArrowLeft: [0, -1],
        ArrowRight: [0, 1],
      };
      if (moves[event.key]) {
        event.preventDefault();
        moveSelection(...moves[event.key]);
      } else if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        clearSelected();
      } else if (event.key.toLowerCase() === 'n') {
        event.preventDefault();
        setNotesMode((current) => !current);
      }
    },
    [clearSelected, confirmationAction, enterDigit, moveSelection, paused],
  );

  useEffect(() => {
    if (!session) return;
    window.addEventListener('keydown', handleGameKeyDown);
    return () => window.removeEventListener('keydown', handleGameKeyDown);
  }, [handleGameKeyDown, session]);

  useEffect(() => {
    if (!session) return;
    const clearSelectionOutsideBoard = (event: MouseEvent) => {
      const target = event.target;
      if (
        target instanceof Element &&
        !target.closest('.game-board, .game-controls')
      ) {
        setSelected(undefined);
      }
    };
    document.addEventListener('click', clearSelectionOutsideBoard);
    return () =>
      document.removeEventListener('click', clearSelectionOutsideBoard);
  }, [session]);

  const selectedValue =
    selected && session
      ? (session.snapshot.values[selected[0]]?.[selected[1]] ?? 0)
      : 0;

  const cellClass = useCallback(
    (row: number, column: number) => {
      if (!session) return '';
      const [selectedRow, selectedColumn] = selected ?? [-1, -1];
      const value = session.snapshot.values[row]?.[column];
      const isSelected = row === selectedRow && column === selectedColumn;
      const isPeer =
        selected !== undefined &&
        !isSelected &&
        (row === selectedRow ||
          column === selectedColumn ||
          (Math.floor(row / 3) === Math.floor(selectedRow / 3) &&
            Math.floor(column / 3) === Math.floor(selectedColumn / 3)));
      const isMatching =
        !isSelected && selectedValue !== 0 && value === selectedValue;

      return [
        'game-cell',
        session.snapshot.givens[row]?.[column] ? 'game-cell--given' : '',
        session.snapshot.invalid[row]?.[column] ? 'game-cell--invalid' : '',
        isSelected ? 'game-cell--selected' : '',
        isPeer ? 'game-cell--peer' : '',
        isMatching ? 'game-cell--matching' : '',
      ]
        .filter(Boolean)
        .join(' ');
    },
    [selected, selectedValue, session],
  );

  return {
    selected,
    setSelected,
    notesMode,
    setNotesMode,
    completedDigits,
    firstFocusableCell,
    selectedCellBlocksDigitInput,
    selectedCellCanErase,
    selectedValue,
    enterDigit,
    clearSelected,
    cellClass,
  };
};

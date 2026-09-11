import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Digit, GameAction, Session } from '../api/types';
import type { ConfirmationAction } from '../presentation';

interface UseBoardNavigationOptions {
  session?: Session;
  paused: boolean;
  confirmationAction?: ConfirmationAction;
  applyAction: (action: GameAction) => Promise<boolean>;
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
  const [optimisticNotes, setOptimisticNotes] = useState<
    Record<string, Digit[]>
  >({});
  const optimisticNotesRef = useRef(optimisticNotes);
  const noteTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const sentAtRevision = useRef<Record<string, number>>({});

  const updateOptimisticNotes = useCallback(
    (update: (current: Record<string, Digit[]>) => Record<string, Digit[]>) => {
      const next = update(optimisticNotesRef.current);
      optimisticNotesRef.current = next;
      setOptimisticNotes(next);
    },
    [],
  );

  useEffect(() => {
    setSelected(undefined);
    setNotesMode(false);
    for (const timer of Object.values(noteTimers.current)) clearTimeout(timer);
    noteTimers.current = {};
    sentAtRevision.current = {};
    optimisticNotesRef.current = {};
    setOptimisticNotes({});
  }, [session?.id]);

  useEffect(() => {
    if (!session) return;
    updateOptimisticNotes((current) => {
      const next = { ...current };
      let changed = false;
      for (const [key, revision] of Object.entries(sentAtRevision.current)) {
        if (session.revision <= revision) continue;
        delete sentAtRevision.current[key];
        delete next[key];
        changed = true;
      }
      return changed ? next : current;
    });
  }, [session, updateOptimisticNotes]);

  const displaySession = useMemo(() => {
    if (!session || Object.keys(optimisticNotes).length === 0) return session;
    const notes = session.snapshot.notes.map((row) =>
      row.map((values) => [...values]),
    );
    for (const [key, values] of Object.entries(optimisticNotes)) {
      const [row, column] = key.split('-').map(Number);
      if (notes[row]?.[column] !== undefined) notes[row]![column] = values;
    }
    return { ...session, snapshot: { ...session.snapshot, notes } };
  }, [optimisticNotes, session]);

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
        (displaySession?.snapshot.notes[selected[0]]?.[selected[1]]?.length ??
          0) > 0
      : session.snapshot.values[selected[0]]?.[selected[1]] !== 0);

  const setCellNotes = useCallback(
    (row: number, column: number, values: Digit[]) => {
      if (!session) return;
      const key = `${row}-${column}`;
      const normalized = [...values].sort((left, right) => left - right);
      updateOptimisticNotes((current) => ({ ...current, [key]: normalized }));
      clearTimeout(noteTimers.current[key]);
      noteTimers.current[key] = setTimeout(() => {
        delete noteTimers.current[key];
        const outgoing = optimisticNotesRef.current[key];
        if (!outgoing) return;
        const baseRevision = session.revision;
        sentAtRevision.current[key] = baseRevision;
        void applyAction({
          kind: 'set-notes',
          row: row + 1,
          column: column + 1,
          values: outgoing,
        }).then((accepted) => {
          if (accepted) return;
          delete sentAtRevision.current[key];
          updateOptimisticNotes((current) => {
            if (current[key] !== outgoing) return current;
            const next = { ...current };
            delete next[key];
            return next;
          });
        });
      }, 180);
    },
    [applyAction, session, updateOptimisticNotes],
  );

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
      if (notesMode) {
        const key = `${row}-${column}`;
        const current =
          optimisticNotesRef.current[key] ??
          session.snapshot.notes[row]?.[column] ??
          [];
        const next = current.includes(digit)
          ? current.filter((value) => value !== digit)
          : [...current, digit];
        setCellNotes(row, column, next);
        return;
      }
      void applyAction({
        kind: 'set-value',
        row: row + 1,
        column: column + 1,
        value: digit,
      });
    },
    [
      applyAction,
      completedDigits,
      notesMode,
      paused,
      selected,
      selectedCellBlocksDigitInput,
      session,
      setCellNotes,
      setMessage,
    ],
  );

  const clearSelected = useCallback(() => {
    if (!selected || !session || paused || !selectedCellCanErase) return;
    const [row, column] = selected;
    if (notesMode) {
      setCellNotes(row, column, []);
      return;
    }
    void applyAction({ kind: 'clear-value', row: row + 1, column: column + 1 });
  }, [
    applyAction,
    notesMode,
    paused,
    selected,
    selectedCellCanErase,
    session,
    setCellNotes,
  ]);

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
    displaySession,
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

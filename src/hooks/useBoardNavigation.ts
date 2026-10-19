import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Digit, GameAction, GameState } from '../api/types';
import type { PendingAction } from './useSessionLifecycle';
import {
  CANDIDATE_VISIBILITY_PREFERENCE_KEY,
  readCandidateVisibilityPreference,
  type CandidateVisibilityPreference,
  type ConfirmationAction,
} from '../presentation';
import { useLocalization } from '../i18n/localization';

const CANDIDATE_SAVE_DEBOUNCE_MS = 300;

interface UseBoardNavigationOptions {
  session?: GameState;
  paused: boolean;
  confirmationAction?: ConfirmationAction;
  applyAction: (action: GameAction) => Promise<boolean>;
  pendingActions?: PendingAction[];
  canUndo?: boolean;
  canRedo?: boolean;
  togglePaused: () => void;
  setMessage: Dispatch<SetStateAction<string>>;
}

export const useBoardNavigation = ({
  session,
  paused,
  confirmationAction,
  applyAction,
  pendingActions = [],
  canUndo: canUndoOverride,
  canRedo: canRedoOverride,
  togglePaused,
  setMessage,
}: UseBoardNavigationOptions) => {
  const { formatMessage } = useLocalization();
  const canUndo = canUndoOverride ?? session?.snapshot.can_undo ?? false;
  const canRedo = canRedoOverride ?? session?.snapshot.can_redo ?? false;
  const [selected, setSelectedState] = useState<[number, number]>();
  const selectedRef = useRef(selected);
  const setSelected = useCallback((cell?: [number, number]) => {
    selectedRef.current = cell;
    setSelectedState(cell);
  }, []);
  const [notesMode, setNotesModeState] = useState(false);
  const notesModeRef = useRef(notesMode);
  const setNotesMode = useCallback((value: SetStateAction<boolean>) => {
    const next =
      typeof value === 'function' ? value(notesModeRef.current) : value;
    notesModeRef.current = next;
    setNotesModeState(next);
  }, []);
  const [candidateVisibility, setCandidateVisibilityState] = useState<
    CandidateVisibilityPreference | undefined
  >(readCandidateVisibilityPreference);
  const candidateVisibilityRef = useRef(candidateVisibility);
  const [optimisticCandidates, setOptimisticCandidates] = useState<
    Record<string, Digit[]>
  >({});
  const optimisticCandidatesRef = useRef(optimisticCandidates);
  const candidateTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {},
  );
  const candidateRequestsInFlight = useRef<Record<string, boolean>>({});
  const sessionIdRef = useRef(session?.id);
  const flushCellCandidatesRef = useRef<(row: number, column: number) => void>(
    () => undefined,
  );
  sessionIdRef.current = session?.id;

  const persistCandidateVisibility = useCallback(
    (preference: CandidateVisibilityPreference) => {
      candidateVisibilityRef.current = preference;
      try {
        localStorage.setItem(
          CANDIDATE_VISIBILITY_PREFERENCE_KEY,
          JSON.stringify(preference),
        );
      } catch {
        // Keep the presentation state for this page when storage is blocked.
      }
      setCandidateVisibilityState(preference);
    },
    [],
  );

  const allCandidatesVisible =
    session !== undefined &&
    candidateVisibility?.sessionId === session.id &&
    candidateVisibility.allVisible;
  const visibleCandidateCells = useMemo(
    () =>
      new Set(
        session !== undefined && candidateVisibility?.sessionId === session.id
          ? candidateVisibility.visibleCells
          : [],
      ),
    [candidateVisibility, session],
  );

  const setAllCandidatesVisible = useCallback(
    (value: SetStateAction<boolean>) => {
      const sessionId = sessionIdRef.current;
      if (!sessionId) return;
      const current =
        candidateVisibilityRef.current?.sessionId === sessionId
          ? candidateVisibilityRef.current.allVisible
          : false;
      const next = typeof value === 'function' ? value(current) : value;
      persistCandidateVisibility({
        sessionId,
        allVisible: next,
        visibleCells: [],
      });
    },
    [persistCandidateVisibility],
  );

  const revealCandidateCell = useCallback(
    (row: number, column: number) => {
      const sessionId = sessionIdRef.current;
      if (!sessionId) return;
      const current = candidateVisibilityRef.current;
      if (current?.sessionId === sessionId && current.allVisible) return;
      const cell = `${row}-${column}`;
      const visibleCells = new Set(
        current?.sessionId === sessionId ? current.visibleCells : [],
      );
      if (visibleCells.has(cell)) return;
      visibleCells.add(cell);
      persistCandidateVisibility({
        sessionId,
        allVisible: false,
        visibleCells: [...visibleCells],
      });
    },
    [persistCandidateVisibility],
  );

  const resetForReplay = useCallback(() => {
    setSelected(undefined);
    setNotesMode(false);
    setAllCandidatesVisible(false);
    for (const timer of Object.values(candidateTimers.current))
      clearTimeout(timer);
    candidateTimers.current = {};
    candidateRequestsInFlight.current = {};
    optimisticCandidatesRef.current = {};
    setOptimisticCandidates({});
  }, [setAllCandidatesVisible, setNotesMode, setSelected]);

  const updateOptimisticCandidates = useCallback(
    (update: (current: Record<string, Digit[]>) => Record<string, Digit[]>) => {
      const next = update(optimisticCandidatesRef.current);
      optimisticCandidatesRef.current = next;
      setOptimisticCandidates(next);
    },
    [],
  );

  useEffect(() => {
    setSelected(undefined);
    notesModeRef.current = false;
    setNotesModeState(false);
    setCandidateVisibilityState((preference) => {
      if (!session?.id || preference?.sessionId === session.id)
        return preference;
      try {
        localStorage.removeItem(CANDIDATE_VISIBILITY_PREFERENCE_KEY);
      } catch {
        // A new game still starts with every candidate cell hidden.
      }
      const next = {
        sessionId: session.id,
        allVisible: false,
        visibleCells: [],
      };
      candidateVisibilityRef.current = next;
      return next;
    });
    for (const timer of Object.values(candidateTimers.current))
      clearTimeout(timer);
    candidateTimers.current = {};
    candidateRequestsInFlight.current = {};
    optimisticCandidatesRef.current = {};
    setOptimisticCandidates({});
  }, [session?.id, setSelected]);

  const displaySession = useMemo(() => {
    if (!session) return session;
    const hasOptimisticCandidates =
      Object.keys(optimisticCandidates).length > 0;
    const hasProjectedValues = pendingActions.some(
      ({ action }) =>
        action.kind === 'set-value' || action.kind === 'clear-value',
    );
    if (!hasOptimisticCandidates && !hasProjectedValues) return session;
    const values = session.snapshot.values.map((row) => [...row]);
    const invalid = session.snapshot.invalid.map((row) => [...row]);
    const candidates = session.snapshot.candidates.map((row) =>
      row.map((values) => [...values]),
    );
    for (const [key, candidateValues] of Object.entries(optimisticCandidates)) {
      const [row, column] = key.split('-').map(Number);
      if (candidates[row]?.[column] !== undefined)
        candidates[row]![column] = candidateValues;
    }
    for (const { action } of pendingActions) {
      if (action.kind !== 'set-value' && action.kind !== 'clear-value')
        continue;
      const row = action.row - 1;
      const column = action.column - 1;
      values[row]![column] = action.kind === 'set-value' ? action.value : 0;
      invalid[row]![column] = false;
    }
    return {
      ...session,
      snapshot: { ...session.snapshot, values, invalid, candidates },
    };
  }, [optimisticCandidates, pendingActions, session]);

  const pendingCells = useMemo(
    () =>
      new Set(
        pendingActions.flatMap(({ action }) =>
          action.kind === 'set-value' || action.kind === 'clear-value'
            ? [`${action.row - 1}-${action.column - 1}`]
            : [],
        ),
      ),
    [pendingActions],
  );

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

  const firstOpenCell = useCallback((nextSession: GameState) => {
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
      (notesMode &&
        displaySession?.snapshot.values[selected[0]]?.[selected[1]] !== 0));

  const selectedCellCanErase =
    selected !== undefined &&
    session !== undefined &&
    session.snapshot.givens[selected[0]]?.[selected[1]] === 0 &&
    (notesMode
      ? (allCandidatesVisible ||
          visibleCandidateCells.has(`${selected[0]}-${selected[1]}`)) &&
        displaySession?.snapshot.values[selected[0]]?.[selected[1]] === 0 &&
        (displaySession?.snapshot.candidates[selected[0]]?.[selected[1]]
          ?.length ?? 0) > 0
      : displaySession?.snapshot.values[selected[0]]?.[selected[1]] !== 0);

  const flushCellCandidates = useCallback(
    (row: number, column: number) => {
      if (!session) return;
      const key = `${row}-${column}`;
      if (candidateRequestsInFlight.current[key]) return;
      const outgoing = optimisticCandidatesRef.current[key];
      if (!outgoing) return;
      const sessionId = session.id;
      candidateRequestsInFlight.current[key] = true;
      void applyAction({
        kind: 'set-candidates',
        row: row + 1,
        column: column + 1,
        values: outgoing,
      }).then((accepted) => {
        delete candidateRequestsInFlight.current[key];
        if (sessionIdRef.current !== sessionId) return;
        if (!accepted) {
          updateOptimisticCandidates((current) => {
            if (!(key in current)) return current;
            const next = { ...current };
            delete next[key];
            return next;
          });
          return;
        }
        const latest = optimisticCandidatesRef.current[key];
        if (latest === outgoing) {
          updateOptimisticCandidates((current) => {
            if (current[key] !== outgoing) return current;
            const next = { ...current };
            delete next[key];
            return next;
          });
          return;
        }
        if (latest) {
          setTimeout(() => flushCellCandidatesRef.current(row, column), 0);
        }
      });
    },
    [applyAction, session, updateOptimisticCandidates],
  );

  useEffect(() => {
    flushCellCandidatesRef.current = flushCellCandidates;
  }, [flushCellCandidates]);

  const setCellCandidates = useCallback(
    (row: number, column: number, values: Digit[]) => {
      if (!session) return;
      const key = `${row}-${column}`;
      const normalized = [...values].sort((left, right) => left - right);
      updateOptimisticCandidates((current) => ({
        ...current,
        [key]: normalized,
      }));
      clearTimeout(candidateTimers.current[key]);
      candidateTimers.current[key] = setTimeout(() => {
        delete candidateTimers.current[key];
        flushCellCandidatesRef.current(row, column);
      }, CANDIDATE_SAVE_DEBOUNCE_MS);
    },
    [session, updateOptimisticCandidates],
  );

  const enterDigit = useCallback(
    (digit: Digit) => {
      if (!session || paused || completedDigits.has(digit)) return;
      const selectedNow = selectedRef.current;
      if (!selectedNow) {
        setMessage(formatMessage('status.selectEditableCell'));
        return;
      }
      const [row, column] = selectedNow;
      const notesModeNow = notesModeRef.current;
      const value = displaySession?.snapshot.values[row]?.[column] ?? 0;
      if (
        session.snapshot.givens[row]?.[column] !== 0 ||
        (notesModeNow && value !== 0)
      )
        return;
      if (!notesModeNow && value === digit) return;
      if (notesModeNow) {
        const key = `${row}-${column}`;
        const cellIsVisible =
          candidateVisibilityRef.current?.sessionId === session.id &&
          (candidateVisibilityRef.current.allVisible ||
            candidateVisibilityRef.current.visibleCells.includes(key));
        const current =
          optimisticCandidatesRef.current[key] ??
          (cellIsVisible
            ? (session.snapshot.candidates[row]?.[column] ?? [])
            : []);
        if (!cellIsVisible) revealCandidateCell(row, column);
        const next = current.includes(digit)
          ? current.filter((value) => value !== digit)
          : [...current, digit];
        setCellCandidates(row, column, next);
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
      formatMessage,
      paused,
      session,
      displaySession,
      revealCandidateCell,
      setCellCandidates,
      setMessage,
    ],
  );

  const clearSelected = useCallback(() => {
    if (!selected || !session || paused || !selectedCellCanErase) return;
    const [row, column] = selected;
    if (notesModeRef.current) {
      setCellCandidates(row, column, []);
      return;
    }
    void applyAction({ kind: 'clear-value', row: row + 1, column: column + 1 });
  }, [
    applyAction,
    paused,
    selected,
    selectedCellCanErase,
    session,
    setCellCandidates,
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
    [firstOpenCell, selected, session, setSelected],
  );

  const handleGameKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (confirmationAction) return;
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.matches('input, textarea, select') || target.isContentEditable)
      )
        return;
      const key = event.key.toLowerCase();
      if (key === 'p' && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        togglePaused();
        return;
      }
      if (paused) return;
      const primaryModifier = event.ctrlKey || event.metaKey;
      if (primaryModifier && key === 'z') {
        event.preventDefault();
        const action = event.shiftKey ? 'redo' : 'undo';
        if ((action === 'undo' && canUndo) || (action === 'redo' && canRedo)) {
          void applyAction({ kind: action });
        }
        return;
      }
      if (event.ctrlKey && key === 'y') {
        event.preventDefault();
        if (canRedo) void applyAction({ kind: 'redo' });
        return;
      }
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
      } else if (key === 'n') {
        event.preventDefault();
        setNotesMode((current) => !current);
      } else if (key === 'a') {
        event.preventDefault();
        setAllCandidatesVisible((current) => !current);
      }
    },
    [
      applyAction,
      canRedo,
      canUndo,
      clearSelected,
      confirmationAction,
      enterDigit,
      moveSelection,
      paused,
      setAllCandidatesVisible,
      setNotesMode,
      togglePaused,
    ],
  );

  const handleGameKeyDownRef = useRef(handleGameKeyDown);
  handleGameKeyDownRef.current = handleGameKeyDown;

  useLayoutEffect(() => {
    if (!session) return;
    const listener = (event: KeyboardEvent) =>
      handleGameKeyDownRef.current(event);
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [session]);

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
  }, [session, setSelected]);

  const selectedValue =
    selected && displaySession
      ? (displaySession.snapshot.values[selected[0]]?.[selected[1]] ?? 0)
      : 0;

  const cellClass = useCallback(
    (row: number, column: number) => {
      if (!session) return '';
      const [selectedRow, selectedColumn] = selected ?? [-1, -1];
      const value = displaySession?.snapshot.values[row]?.[column];
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
        displaySession?.snapshot.invalid[row]?.[column]
          ? 'game-cell--invalid'
          : '',
        pendingCells.has(`${row}-${column}`) ? 'game-cell--pending' : '',
        isSelected ? 'game-cell--selected' : '',
        isPeer ? 'game-cell--peer' : '',
        isMatching ? 'game-cell--matching' : '',
      ]
        .filter(Boolean)
        .join(' ');
    },
    [displaySession, pendingCells, selected, selectedValue, session],
  );

  return {
    displaySession,
    selected,
    setSelected,
    notesMode,
    setNotesMode,
    allCandidatesVisible,
    visibleCandidateCells,
    setAllCandidatesVisible,
    resetForReplay,
    completedDigits,
    firstFocusableCell,
    selectedCellBlocksDigitInput,
    selectedCellCanErase,
    selectedValue,
    pendingCells,
    enterDigit,
    clearSelected,
    cellClass,
  };
};

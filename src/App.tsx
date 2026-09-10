import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SudokuApiClient, SudokuApiError } from './api/client';
import type { Difficulty, Digit, GameAction, Session } from './api/types';
import './App.css';

const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard', 'expert', 'evil'];
const PREVIEW_PUZZLE =
  '.56.4.7...1.5....6.......19...9.....3.58..2...4...6...1.....93....4....22.3.1....';
const ACTIVE_GAME_KEY = 'sudoku-ui.active-game.v1';
const DIFFICULTY_PREFERENCE_KEY = 'sudoku-ui.difficulty.v1';
type ConfirmationAction = 'home' | 'new-puzzle';

interface ActiveGameRecord {
  sessionId: string;
  difficulty: Difficulty;
  elapsedSeconds: number;
  resumedAt?: number;
  paused: boolean;
}

const readActiveGame = (): ActiveGameRecord | undefined => {
  try {
    const value = localStorage.getItem(ACTIVE_GAME_KEY);
    return value ? (JSON.parse(value) as ActiveGameRecord) : undefined;
  } catch {
    localStorage.removeItem(ACTIVE_GAME_KEY);
    return undefined;
  }
};

const readDifficultyPreference = (): Difficulty => {
  try {
    const value = localStorage.getItem(DIFFICULTY_PREFERENCE_KEY);
    return DIFFICULTIES.includes(value as Difficulty)
      ? (value as Difficulty)
      : 'easy';
  } catch {
    return 'easy';
  }
};

const formatElapsed = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`
    : `${minutes}:${String(remainder).padStart(2, '0')}`;
};

const actionableError = (error: unknown, fallback: string) => {
  if (error instanceof SudokuApiError) {
    if (error.status === 0)
      return 'The game service could not be reached. Check your connection and try again.';
    if (error.status >= 500)
      return 'The game service is temporarily unavailable. Your board is safe; try again.';
    return error.message;
  }
  return error instanceof Error ? error.message : fallback;
};

const titleCase = (value: string) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

const App = () => {
  const client = useMemo(() => new SudokuApiClient(), []);
  const [initializing, setInitializing] = useState(true);
  const [connection, setConnection] = useState<
    'checking' | 'online' | 'offline'
  >('checking');
  const [difficulty, setDifficulty] = useState<Difficulty>(
    readDifficultyPreference,
  );
  const [session, setSession] = useState<Session>();
  const [selected, setSelected] = useState<[number, number]>();
  const [notesMode, setNotesMode] = useState(false);
  const [busy, setBusy] = useState(false);
  const [paused, setPaused] = useState(false);
  const [confirmationAction, setConfirmationAction] =
    useState<ConfirmationAction>();
  const [nextDifficulty, setNextDifficulty] = useState<Difficulty>(difficulty);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [retryLabel, setRetryLabel] = useState<string>();
  const retryAction = useRef<() => void>(() => undefined);
  const confirmationTrigger = useRef<HTMLElement>(null);
  const confirmationDialog = useRef<HTMLElement>(null);
  const cancelConfirmationButton = useRef<HTMLButtonElement>(null);
  const [message, setMessage] = useState('Choose a level and begin.');
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

  const showRetry = useCallback(
    (label: string, action: () => void, nextMessage: string) => {
      retryAction.current = action;
      setRetryLabel(label);
      setMessage(nextMessage);
    },
    [],
  );

  const restoreActiveGame = useCallback(async () => {
    const saved = readActiveGame();
    if (!saved) return;
    setBusy(true);
    setMessage('Restoring your puzzle…');
    try {
      const restored = await client.getSession(saved.sessionId);
      setSession(restored);
      setDifficulty(saved.difficulty);
      setPaused(saved.paused);
      setElapsedSeconds(
        saved.elapsedSeconds +
          (!saved.paused && saved.resumedAt
            ? Math.max(0, Math.floor((Date.now() - saved.resumedAt) / 1000))
            : 0),
      );
      setSelected(undefined);
      setRetryLabel(undefined);
      setMessage('Your active puzzle was restored.');
    } catch (error) {
      showRetry(
        'Try restoring again',
        () => void restoreActiveGame(),
        actionableError(error, 'Your active puzzle could not be restored.'),
      );
    } finally {
      setBusy(false);
    }
  }, [client, showRetry]);

  useEffect(() => {
    let active = true;
    void client
      .health()
      .then(async (healthy) => {
        if (!active) return;
        setConnection(healthy ? 'online' : 'offline');
        if (healthy) await restoreActiveGame();
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
  }, [client, restoreActiveGame, showRetry]);

  useEffect(() => {
    const handleVisibilityChange = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(DIFFICULTY_PREFERENCE_KEY, difficulty);
    } catch {
      // The app still works when browser storage is unavailable.
    }
  }, [difficulty]);

  const activeSessionId = session?.id;
  const timerSuspended =
    paused ||
    confirmationAction !== undefined ||
    !pageVisible ||
    session?.snapshot.status === 'solved';

  const dismissConfirmation = useCallback(() => {
    setConfirmationAction(undefined);
    window.requestAnimationFrame(() => confirmationTrigger.current?.focus());
  }, []);

  useEffect(() => {
    if (!confirmationAction) return;
    cancelConfirmationButton.current?.focus();
    const handleDialogKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismissConfirmation();
        return;
      }
      if (event.key !== 'Tab') return;
      const buttons = Array.from(
        confirmationDialog.current?.querySelectorAll<HTMLButtonElement>(
          'button',
        ) ?? [],
      );
      if (buttons.length === 0) return;
      const currentIndex = buttons.indexOf(
        document.activeElement as HTMLButtonElement,
      );
      const nextIndex = event.shiftKey
        ? (currentIndex - 1 + buttons.length) % buttons.length
        : (currentIndex + 1) % buttons.length;
      event.preventDefault();
      buttons[nextIndex]?.focus();
    };
    window.addEventListener('keydown', handleDialogKeyDown);
    return () => window.removeEventListener('keydown', handleDialogKeyDown);
  }, [confirmationAction, dismissConfirmation]);

  useEffect(() => {
    if (!activeSessionId || timerSuspended) return;
    const timer = window.setInterval(
      () => setElapsedSeconds((current) => current + 1),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [activeSessionId, timerSuspended]);

  useEffect(() => {
    if (!activeSessionId) return;
    const record: ActiveGameRecord = {
      sessionId: activeSessionId,
      difficulty,
      elapsedSeconds,
      paused,
      resumedAt: timerSuspended ? undefined : Date.now(),
    };
    localStorage.setItem(ACTIVE_GAME_KEY, JSON.stringify(record));
  }, [activeSessionId, difficulty, elapsedSeconds, paused, timerSuspended]);

  const startGame = async (requestedDifficulty: Difficulty = difficulty) => {
    setBusy(true);
    setMessage(`Preparing a ${requestedDifficulty} puzzle…`);
    try {
      const nextSession = await client.createSession(requestedDifficulty);
      setSession(nextSession);
      setDifficulty(requestedDifficulty);
      setSelected(undefined);
      setNotesMode(false);
      setPaused(false);
      setElapsedSeconds(0);
      setRetryLabel(undefined);
      setMessage(`${titleCase(requestedDifficulty)} puzzle ready.`);
    } catch (error) {
      showRetry(
        'Try again',
        () => void startGame(requestedDifficulty),
        actionableError(error, 'The game could not be started.'),
      );
    } finally {
      setBusy(false);
    }
  };

  const applyAction = useCallback(
    async (action: GameAction) => {
      if (!session || busy) return;
      setBusy(true);
      try {
        const response = await client.applyAction(session, action);
        setSession({
          ...session,
          revision: response.revision,
          snapshot: response.snapshot,
        });
        setRetryLabel(undefined);
        setMessage(
          response.snapshot.status === 'solved'
            ? 'Puzzle solved. Beautiful work!'
            : (response.warnings?.[0] ?? 'Move saved.'),
        );
      } catch (error) {
        if (
          error instanceof SudokuApiError &&
          error.code === 'revision-conflict'
        ) {
          try {
            const current = await client.getSession(session.id);
            setSession(current);
            setMessage(
              'The board changed elsewhere, so the latest game was loaded.',
            );
          } catch {
            showRetry(
              'Reload latest board',
              () => void applyAction(action),
              'The latest game state could not be loaded. Your last confirmed board is still shown.',
            );
          }
        } else {
          showRetry(
            'Retry move',
            () => void applyAction(action),
            actionableError(error, 'The move could not be saved.'),
          );
        }
      } finally {
        setBusy(false);
      }
    },
    [busy, client, session, showRetry],
  );

  const enterDigit = useCallback(
    (digit: Digit) => {
      if (!selected || !session || paused || completedDigits.has(digit)) return;
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
    [applyAction, completedDigits, notesMode, paused, selected, session],
  );

  const clearSelected = useCallback(() => {
    if (!selected || !session || paused) return;
    const [row, column] = selected;
    if (session.snapshot.givens[row]?.[column] !== 0) return;
    void applyAction({
      kind: notesMode ? 'clear-notes' : 'clear-value',
      row: row + 1,
      column: column + 1,
    });
  }, [applyAction, notesMode, paused, selected, session]);

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

  const cellClass = (row: number, column: number) => {
    if (!session) return '';
    const [selectedRow, selectedColumn] = selected ?? [-1, -1];
    const value = session.snapshot.values[row]?.[column];
    const selectedValue =
      session.snapshot.values[selectedRow]?.[selectedColumn] ?? 0;
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
  };

  const leaveGame = useCallback(() => {
    localStorage.removeItem(ACTIVE_GAME_KEY);
    setSession(undefined);
    setSelected(undefined);
    setNotesMode(false);
    setPaused(false);
    setElapsedSeconds(0);
    setRetryLabel(undefined);
    setConfirmationAction(undefined);
    setMessage('Choose a level and begin.');
  }, []);

  const requestHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!session) return;
    event.preventDefault();
    if (session.snapshot.status === 'solved') {
      leaveGame();
      return;
    }
    confirmationTrigger.current = event.currentTarget;
    setConfirmationAction('home');
  };

  const requestNewPuzzle = (event: React.MouseEvent<HTMLButtonElement>) => {
    confirmationTrigger.current = event.currentTarget;
    setNextDifficulty(difficulty);
    setConfirmationAction('new-puzzle');
  };

  return (
    <main className={`app-shell${session ? ' app-shell--game' : ''}`}>
      <header className="site-header">
        <a
          className="brand"
          href="/"
          aria-label="Sudoku home"
          onClick={requestHome}
        >
          <span className="brand-mark" aria-hidden="true">
            {Array.from({ length: 9 }, (_, index) => (
              <span key={index} />
            ))}
          </span>
          <span>Sudoku</span>
        </a>
        <span className={`connection connection--${connection}`} role="status">
          <span className="connection-dot" aria-hidden="true" />
          {connection === 'checking'
            ? 'Connecting'
            : connection === 'online'
              ? 'Game service ready'
              : 'Game service unavailable'}
        </span>
      </header>

      {initializing ? (
        <section className="app-loading" role="status" aria-live="polite">
          <span className="loading-mark" aria-hidden="true" />
          <p>Loading your puzzle…</p>
        </section>
      ) : !session ? (
        <section className="welcome" aria-labelledby="welcome-title">
          <div className="welcome-copy">
            <p className="eyebrow">Sudoku, distilled</p>
            <h1 id="welcome-title">A clear board. A quieter mind.</h1>
            <p className="lede">
              Choose your level and settle into a puzzle designed to stay out of
              your way.
            </p>

            <fieldset className="difficulty-picker">
              <legend>Choose your level</legend>
              <div className="difficulty-options">
                {DIFFICULTIES.map((level) => (
                  <button
                    key={level}
                    type="button"
                    className={difficulty === level ? 'is-selected' : ''}
                    aria-pressed={difficulty === level}
                    onClick={() => setDifficulty(level)}
                  >
                    {titleCase(level)}
                  </button>
                ))}
              </div>
            </fieldset>

            <button
              className="primary-action"
              type="button"
              onClick={() => void startGame()}
              disabled={connection !== 'online' || busy}
            >
              {busy ? 'Preparing puzzle…' : `Play ${titleCase(difficulty)}`}
              <span aria-hidden="true">→</span>
            </button>
            <p className="welcome-message" aria-live="polite">
              {message}
            </p>
          </div>

          <figure className="preview-card" aria-label="Sudoku puzzle preview">
            <div className="board-preview" aria-hidden="true">
              {Array.from(PREVIEW_PUZZLE, (value, index) => (
                <span key={index} className={value === '.' ? '' : 'filled'}>
                  {value === '.' ? '' : value}
                </span>
              ))}
            </div>
          </figure>
        </section>
      ) : (
        <section className="game" aria-labelledby="game-title">
          <div className="game-heading">
            <div>
              <p className="eyebrow">{titleCase(difficulty)} puzzle</p>
              <h1 id="game-title">Your puzzle</h1>
            </div>
            <div className="game-heading-actions">
              <span className="elapsed-time" aria-label="Elapsed time">
                {formatElapsed(elapsedSeconds)}
              </span>
              <button
                className="secondary-button"
                type="button"
                onClick={() => {
                  setPaused((current) => !current);
                  setMessage(paused ? 'Puzzle resumed.' : 'Puzzle paused.');
                }}
                disabled={busy || session.snapshot.status === 'solved'}
              >
                {paused ? 'Resume' : 'Pause'}
              </button>
              <button
                className="secondary-button"
                type="button"
                aria-haspopup="dialog"
                onClick={requestNewPuzzle}
                disabled={busy}
              >
                New puzzle
              </button>
            </div>
          </div>

          <div className="game-layout">
            <div
              className={`board-stage${paused ? ' board-stage--paused' : ''}`}
            >
              <div
                className="game-board"
                role="grid"
                aria-label="Sudoku game board"
              >
                {session.snapshot.values.flatMap((rowValues, row) =>
                  rowValues.map((value, column) => {
                    const notes = session.snapshot.notes[row]?.[column] ?? [];
                    const given = session.snapshot.givens[row]?.[column] !== 0;
                    const invalid =
                      session.snapshot.invalid[row]?.[column] === true;
                    return (
                      <button
                        key={`${row}-${column}`}
                        className={cellClass(row, column)}
                        data-cell={`${row}-${column}`}
                        type="button"
                        role="gridcell"
                        aria-invalid={invalid || undefined}
                        aria-selected={
                          selected?.[0] === row && selected?.[1] === column
                        }
                        aria-label={`Row ${row + 1}, column ${column + 1}, ${
                          value ? `${given ? 'given ' : ''}${value}` : 'empty'
                        }${invalid ? ', invalid' : ''}`}
                        onClick={() => setSelected([row, column])}
                      >
                        {value ? (
                          <span className="cell-value">{value}</span>
                        ) : (
                          <span className="cell-notes" aria-hidden="true">
                            {Array.from({ length: 9 }, (_, index) => (
                              <span key={index}>
                                {notes.includes((index + 1) as Digit)
                                  ? index + 1
                                  : ''}
                              </span>
                            ))}
                          </span>
                        )}
                      </button>
                    );
                  }),
                )}
              </div>
              {paused && (
                <div className="pause-cover" role="status">
                  <strong>Puzzle paused</strong>
                  <span>Your time is stopped.</span>
                </div>
              )}
            </div>

            <aside className="game-controls" aria-label="Game controls">
              <div className="game-status">
                <span aria-hidden="true" />
                <div>
                  <p className="game-message" aria-live="polite">
                    {message}
                  </p>
                  {retryLabel && (
                    <button
                      type="button"
                      className="inline-retry"
                      onClick={() => retryAction.current()}
                      disabled={busy}
                    >
                      {retryLabel}
                    </button>
                  )}
                </div>
              </div>

              {session.snapshot.status === 'solved' ? (
                <section
                  className="completion-panel"
                  aria-labelledby="completion-title"
                >
                  <p className="eyebrow">Puzzle complete</p>
                  <h2 id="completion-title">
                    Solved in {formatElapsed(elapsedSeconds)}
                  </h2>
                  <p>
                    Keep the rhythm with another {titleCase(difficulty)} board,
                    or choose a different level.
                  </p>
                  <div className="completion-actions">
                    <button
                      className="primary-action"
                      type="button"
                      onClick={() => void startGame(difficulty)}
                      disabled={busy}
                    >
                      Play another {titleCase(difficulty)}
                    </button>
                    <button
                      className="secondary-button"
                      type="button"
                      onClick={leaveGame}
                    >
                      Choose another level
                    </button>
                  </div>
                </section>
              ) : (
                <>
                  <div className="number-pad" aria-label="Number pad">
                    {Array.from({ length: 9 }, (_, index) => {
                      const digit = (index + 1) as Digit;
                      return (
                        <button
                          key={digit}
                          type="button"
                          onClick={() => enterDigit(digit)}
                          disabled={
                            !selected ||
                            paused ||
                            busy ||
                            completedDigits.has(digit)
                          }
                          aria-label={`Enter ${digit}`}
                        >
                          {digit}
                        </button>
                      );
                    })}
                  </div>

                  <div className="tool-grid">
                    <button
                      type="button"
                      className={notesMode ? 'tool-active' : ''}
                      aria-pressed={notesMode}
                      onClick={() => setNotesMode((current) => !current)}
                      disabled={paused || busy}
                    >
                      <span aria-hidden="true">✎</span>
                      Notes {notesMode ? 'on' : 'off'}
                    </button>
                    <button
                      type="button"
                      onClick={clearSelected}
                      disabled={paused || busy}
                    >
                      <span aria-hidden="true">⌫</span>
                      Erase
                    </button>
                    <button
                      type="button"
                      onClick={() => void applyAction({ kind: 'undo' })}
                      disabled={paused || !session.snapshot.can_undo || busy}
                    >
                      <span aria-hidden="true">↶</span>
                      Undo
                    </button>
                    <button
                      type="button"
                      onClick={() => void applyAction({ kind: 'redo' })}
                      disabled={paused || !session.snapshot.can_redo || busy}
                    >
                      <span aria-hidden="true">↷</span>
                      Redo
                    </button>
                    <button
                      className="hint-button"
                      type="button"
                      onClick={() => void applyAction({ kind: 'apply-hint' })}
                      disabled={paused || busy}
                    >
                      <span aria-hidden="true">◇</span>
                      Reveal a hint
                    </button>
                  </div>

                  <p className="keyboard-help">
                    Arrow keys move · 1–9 enter · N notes · Delete erases
                  </p>
                </>
              )}
            </aside>
          </div>

          {confirmationAction && (
            <div className="dialog-backdrop">
              <section
                ref={confirmationDialog}
                className="new-puzzle-dialog"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="confirmation-title"
                aria-describedby="confirmation-description"
              >
                <p className="eyebrow">
                  {confirmationAction === 'home'
                    ? 'Return home?'
                    : 'Leave this board?'}
                </p>
                <h2 id="confirmation-title">
                  {confirmationAction === 'home'
                    ? 'Leave this puzzle'
                    : 'Start a new puzzle'}
                </h2>
                <p id="confirmation-description">
                  Your current progress will no longer open automatically on
                  this device.
                </p>
                {confirmationAction === 'new-puzzle' && (
                  <fieldset className="difficulty-picker dialog-difficulty-picker">
                    <legend>Choose a level for the new puzzle</legend>
                    <div className="difficulty-options">
                      {DIFFICULTIES.map((level) => (
                        <button
                          key={level}
                          type="button"
                          className={
                            nextDifficulty === level ? 'is-selected' : ''
                          }
                          aria-pressed={nextDifficulty === level}
                          onClick={() => setNextDifficulty(level)}
                        >
                          {titleCase(level)}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}
                <div className="dialog-actions">
                  <button
                    ref={cancelConfirmationButton}
                    className="secondary-button"
                    type="button"
                    onClick={dismissConfirmation}
                  >
                    Keep playing
                  </button>
                  <button
                    className="primary-action"
                    type="button"
                    onClick={() => {
                      if (confirmationAction === 'home') {
                        leaveGame();
                      } else {
                        setConfirmationAction(undefined);
                        void startGame(nextDifficulty);
                      }
                    }}
                  >
                    {confirmationAction === 'home'
                      ? 'Return to front page'
                      : `Start new ${titleCase(nextDifficulty)} puzzle`}
                  </button>
                </div>
              </section>
            </div>
          )}
        </section>
      )}

      <footer>
        <span>Thoughtful play, without distractions.</span>
        <span>Keyboard and touch ready</span>
      </footer>
    </main>
  );
};

export default App;

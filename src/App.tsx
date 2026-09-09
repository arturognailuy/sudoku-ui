import { useCallback, useEffect, useMemo, useState } from 'react';
import { SudokuApiClient, SudokuApiError } from './api/client';
import type { Difficulty, Digit, GameAction, Session } from './api/types';
import './App.css';

const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard', 'expert', 'evil'];
const PREVIEW_PUZZLE =
  '.56.4.7...1.5....6.......19...9.....3.58..2...4...6...1.....93....4....22.3.1....';

const titleCase = (value: string) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

const App = () => {
  const client = useMemo(() => new SudokuApiClient(), []);
  const [connection, setConnection] = useState<
    'checking' | 'online' | 'offline'
  >('checking');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [session, setSession] = useState<Session>();
  const [selected, setSelected] = useState<[number, number]>();
  const [notesMode, setNotesMode] = useState(false);
  const [busy, setBusy] = useState(false);
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

  useEffect(() => {
    let active = true;
    client
      .health()
      .then(
        (healthy) => active && setConnection(healthy ? 'online' : 'offline'),
      )
      .catch(() => active && setConnection('offline'));
    return () => {
      active = false;
    };
  }, [client]);

  const selectFirstOpenCell = useCallback((nextSession: Session) => {
    for (let row = 0; row < 9; row += 1) {
      for (let column = 0; column < 9; column += 1) {
        if (nextSession.snapshot.givens[row]?.[column] === 0) {
          setSelected([row, column]);
          return;
        }
      }
    }
  }, []);

  const startGame = async () => {
    setBusy(true);
    setMessage(`Preparing a ${difficulty} puzzle…`);
    try {
      const nextSession = await client.createSession(difficulty);
      setSession(nextSession);
      selectFirstOpenCell(nextSession);
      setNotesMode(false);
      setMessage(`${titleCase(difficulty)} puzzle ready.`);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : 'The game could not be started.',
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
            setMessage('The latest game state could not be loaded.');
          }
        } else {
          setMessage(
            error instanceof Error
              ? error.message
              : 'The move could not be saved.',
          );
        }
      } finally {
        setBusy(false);
      }
    },
    [busy, client, session],
  );

  const enterDigit = useCallback(
    (digit: Digit) => {
      if (!selected || !session || completedDigits.has(digit)) return;
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
    [applyAction, completedDigits, notesMode, selected, session],
  );

  const clearSelected = useCallback(() => {
    if (!selected || !session) return;
    const [row, column] = selected;
    if (session.snapshot.givens[row]?.[column] !== 0) return;
    void applyAction({
      kind: notesMode ? 'clear-notes' : 'clear-value',
      row: row + 1,
      column: column + 1,
    });
  }, [applyAction, notesMode, selected, session]);

  const moveSelection = useCallback(
    (rowDelta: number, columnDelta: number) => {
      const [row, column] = selected ?? [0, 0];
      const nextRow = (row + rowDelta + 9) % 9;
      const nextColumn = (column + columnDelta + 9) % 9;
      setSelected([nextRow, nextColumn]);
      document
        .querySelector<HTMLButtonElement>(
          `[data-cell="${nextRow}-${nextColumn}"]`,
        )
        ?.focus();
    },
    [selected],
  );

  const handleBoardKeyDown = (event: React.KeyboardEvent) => {
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
  };

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

  return (
    <main className={`app-shell${session ? ' app-shell--game' : ''}`}>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Sudoku home">
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

      {!session ? (
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
            <button
              className="secondary-button"
              type="button"
              onClick={() => void startGame()}
              disabled={busy}
            >
              New puzzle
            </button>
          </div>

          <div className="game-layout">
            <div className="board-stage">
              <div
                className="game-board"
                role="grid"
                aria-label="Sudoku game board"
                onKeyDown={handleBoardKeyDown}
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
            </div>

            <aside className="game-controls" aria-label="Game controls">
              <div className="game-status">
                <span aria-hidden="true" />
                <p className="game-message" aria-live="polite">
                  {message}
                </p>
              </div>

              <div className="number-pad" aria-label="Number pad">
                {Array.from({ length: 9 }, (_, index) => {
                  const digit = (index + 1) as Digit;
                  return (
                    <button
                      key={digit}
                      type="button"
                      onClick={() => enterDigit(digit)}
                      disabled={!selected || busy || completedDigits.has(digit)}
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
                >
                  <span aria-hidden="true">✎</span>
                  Notes {notesMode ? 'on' : 'off'}
                </button>
                <button type="button" onClick={clearSelected} disabled={busy}>
                  <span aria-hidden="true">⌫</span>
                  Erase
                </button>
                <button
                  type="button"
                  onClick={() => void applyAction({ kind: 'undo' })}
                  disabled={!session.snapshot.can_undo || busy}
                >
                  <span aria-hidden="true">↶</span>
                  Undo
                </button>
                <button
                  type="button"
                  onClick={() => void applyAction({ kind: 'redo' })}
                  disabled={!session.snapshot.can_redo || busy}
                >
                  <span aria-hidden="true">↷</span>
                  Redo
                </button>
                <button
                  className="hint-button"
                  type="button"
                  onClick={() => void applyAction({ kind: 'apply-hint' })}
                  disabled={busy || session.snapshot.status === 'solved'}
                >
                  <span aria-hidden="true">◇</span>
                  Reveal a hint
                </button>
              </div>

              <p className="keyboard-help">
                Arrow keys move · 1–9 enter · N notes · Delete erases
              </p>
            </aside>
          </div>
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

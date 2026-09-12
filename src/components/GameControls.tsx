import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { Difficulty, Digit, GameAction, Session } from '../api/types';
import { formatElapsed, titleCase } from '../presentation';

type ToolIconName = 'notes' | 'candidates' | 'erase' | 'undo' | 'redo' | 'hint';

const ToolIcon = ({ name }: { name: ToolIconName }) => (
  <svg
    className="tool-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {name === 'notes' && (
      <>
        <path d="M4 20h4l10.5-10.5a2.8 2.8 0 0 0-4-4L4 16v4Z" />
        <path d="m13.5 6.5 4 4" />
      </>
    )}
    {name === 'candidates' && (
      <>
        <circle cx="6" cy="6" r="1" />
        <circle cx="12" cy="6" r="1" />
        <circle cx="18" cy="6" r="1" />
        <circle cx="6" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="18" cy="12" r="1" />
        <circle cx="6" cy="18" r="1" />
        <circle cx="12" cy="18" r="1" />
        <circle cx="18" cy="18" r="1" />
      </>
    )}
    {name === 'erase' && (
      <>
        <path d="m3.8 15.5 8.9-9a2.3 2.3 0 0 1 3.3 0l2 2a2.3 2.3 0 0 1 0 3.3L10.2 20H7.8l-4-4.5Z" />
        <path d="m10.5 9 6 6" />
        <path d="M13.5 20H21" />
      </>
    )}
    {name === 'undo' && (
      <>
        <path d="m9 7-5 5 5 5" />
        <path d="M20 17a7 7 0 0 0-7-7H4" />
      </>
    )}
    {name === 'redo' && (
      <>
        <path d="m15 7 5 5-5 5" />
        <path d="M4 17a7 7 0 0 1 7-7h9" />
      </>
    )}
    {name === 'hint' && (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.3 14.5A6 6 0 1 1 15.7 14.5c-.8.7-1.2 1.4-1.2 2.5h-5c0-1.1-.4-1.8-1.2-2.5Z" />
      </>
    )}
  </svg>
);
interface GameControlsProps {
  session: Session;
  difficulty: Difficulty;
  elapsedSeconds: number;
  message: string;
  retryLabel?: string;
  retryAction: RefObject<() => void>;
  busy: boolean;
  paused: boolean;
  notesMode: boolean;
  setNotesMode: Dispatch<SetStateAction<boolean>>;
  automaticCandidates: boolean;
  setAutomaticCandidates: Dispatch<SetStateAction<boolean>>;
  completedDigits: Set<Digit>;
  selectedCellBlocksDigitInput: boolean;
  selectedCellCanErase: boolean;
  enterDigit: (digit: Digit) => void;
  clearSelected: () => void;
  applyAction: (action: GameAction) => Promise<boolean>;
  startGame: (difficulty: Difficulty) => void;
  leaveGame: () => void;
  completionHeading: RefObject<HTMLHeadingElement | null>;
}

export const GameControls = ({
  session,
  difficulty,
  elapsedSeconds,
  message,
  retryLabel,
  retryAction,
  busy,
  paused,
  notesMode,
  setNotesMode,
  automaticCandidates,
  setAutomaticCandidates,
  completedDigits,
  selectedCellBlocksDigitInput,
  selectedCellCanErase,
  enterDigit,
  clearSelected,
  applyAction,
  startGame,
  leaveGame,
  completionHeading,
}: GameControlsProps) => (
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
      <section className="completion-panel" aria-labelledby="completion-title">
        <p className="eyebrow">Puzzle complete</p>
        <h2 ref={completionHeading} id="completion-title" tabIndex={-1}>
          Solved in {formatElapsed(elapsedSeconds)}
        </h2>
        <p>
          Keep the rhythm with another {titleCase(difficulty)} board, or choose
          a different level.
        </p>
        <div className="completion-actions">
          <button
            className="primary-action"
            type="button"
            onClick={() => startGame(difficulty)}
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
        <div
          className={`number-pad${notesMode ? ' number-pad--notes' : ''}`}
          aria-label={notesMode ? 'Number pad, notes mode' : 'Number pad'}
        >
          {Array.from({ length: 9 }, (_, index) => {
            const digit = (index + 1) as Digit;
            return (
              <button
                key={digit}
                type="button"
                onClick={() => enterDigit(digit)}
                disabled={
                  paused ||
                  busy ||
                  selectedCellBlocksDigitInput ||
                  completedDigits.has(digit)
                }
                aria-label={
                  notesMode ? `Add or remove note ${digit}` : `Enter ${digit}`
                }
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
            aria-label={`Notes ${notesMode ? 'on' : 'off'}`}
            aria-pressed={notesMode}
            onClick={() => setNotesMode((current) => !current)}
            disabled={paused || busy}
          >
            <ToolIcon name="notes" />
            <span className="tool-label">Notes {notesMode ? 'on' : 'off'}</span>
          </button>
          <button
            type="button"
            className={automaticCandidates ? 'tool-active' : ''}
            aria-label={`Automatic candidates ${automaticCandidates ? 'on' : 'off'}`}
            aria-pressed={automaticCandidates}
            onClick={() => setAutomaticCandidates((current) => !current)}
            disabled={paused || busy}
          >
            <ToolIcon name="candidates" />
            <span className="tool-label">
              Candidates {automaticCandidates ? 'on' : 'off'}
            </span>
          </button>
          <button
            type="button"
            aria-label="Erase"
            onClick={clearSelected}
            disabled={paused || busy || !selectedCellCanErase}
          >
            <ToolIcon name="erase" />
            <span className="tool-label">Erase</span>
          </button>
          <button
            type="button"
            aria-label="Undo"
            onClick={() => void applyAction({ kind: 'undo' })}
            disabled={paused || !session.snapshot.can_undo || busy}
          >
            <ToolIcon name="undo" />
            <span className="tool-label">Undo</span>
          </button>
          <button
            type="button"
            aria-label="Redo"
            onClick={() => void applyAction({ kind: 'redo' })}
            disabled={paused || !session.snapshot.can_redo || busy}
          >
            <ToolIcon name="redo" />
            <span className="tool-label">Redo</span>
          </button>
          <button
            className="hint-button"
            type="button"
            aria-label="Reveal a hint"
            onClick={() => void applyAction({ kind: 'apply-hint' })}
            disabled={paused || busy}
          >
            <ToolIcon name="hint" />
            <span className="tool-label">Hint</span>
          </button>
        </div>

        <details className="keyboard-shortcuts">
          <summary>Keyboard shortcuts</summary>
          <dl>
            <div>
              <dt>Move</dt>
              <dd>
                <kbd>Arrow keys</kbd>
              </dd>
            </div>
            <div>
              <dt>Enter a number</dt>
              <dd>
                <kbd>1–9</kbd>
              </dd>
            </div>
            <div>
              <dt>Notes / candidates</dt>
              <dd>
                <kbd>N</kbd> / <kbd>A</kbd>
              </dd>
            </div>
            <div>
              <dt>Erase</dt>
              <dd>
                <kbd>Delete</kbd> or <kbd>Backspace</kbd>
              </dd>
            </div>
            <div>
              <dt>Pause or resume</dt>
              <dd>
                <kbd>P</kbd>
              </dd>
            </div>
            <div>
              <dt>Undo</dt>
              <dd>
                <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>Z</kbd>
              </dd>
            </div>
            <div>
              <dt>Redo</dt>
              <dd>
                <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd>
              </dd>
            </div>
          </dl>
        </details>
      </>
    )}
  </aside>
);

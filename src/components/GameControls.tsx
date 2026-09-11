import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { Difficulty, Digit, GameAction, Session } from '../api/types';
import { formatElapsed, titleCase } from '../presentation';

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
            aria-pressed={notesMode}
            onClick={() => setNotesMode((current) => !current)}
            disabled={paused || busy}
          >
            <span aria-hidden="true">✎</span>
            Notes {notesMode ? 'on' : 'off'}
          </button>
          <button
            type="button"
            className={automaticCandidates ? 'tool-active' : ''}
            aria-label={`Automatic candidates ${automaticCandidates ? 'on' : 'off'}`}
            aria-pressed={automaticCandidates}
            onClick={() => setAutomaticCandidates((current) => !current)}
            disabled={paused || busy}
          >
            <span aria-hidden="true">···</span>
            <span className="candidates-label candidates-label--wide">
              Candidates {automaticCandidates ? 'on' : 'off'}
            </span>
            <span className="candidates-label candidates-label--narrow">
              Auto {automaticCandidates ? 'on' : 'off'}
            </span>
          </button>
          <button
            type="button"
            onClick={clearSelected}
            disabled={paused || busy || !selectedCellCanErase}
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
          Arrows · 1–9 · N notes · A candidates · Del erase
        </p>
      </>
    )}
  </aside>
);

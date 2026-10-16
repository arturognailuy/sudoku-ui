import { useEffect, useRef } from 'react';
import type { Difficulty } from '../api/types';
import {
  DIFFICULTIES,
  titleCase,
  type ConfirmationAction,
} from '../presentation';

interface ConfirmationDialogProps {
  action: ConfirmationAction;
  nextDifficulty: Difficulty;
  setNextDifficulty: (difficulty: Difficulty) => void;
  dismiss: () => void;
  confirm: () => void;
  replay: () => void;
}

export const ConfirmationDialog = ({
  action,
  nextDifficulty,
  setNextDifficulty,
  dismiss,
  confirm,
  replay,
}: ConfirmationDialogProps) => {
  const dialog = useRef<HTMLElement>(null);
  const cancelButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelButton.current?.focus();
    const handleDialogKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
        return;
      }
      if (event.key !== 'Tab') return;
      const buttons = Array.from(
        dialog.current?.querySelectorAll<HTMLButtonElement>('button') ?? [],
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
  }, [dismiss]);

  return (
    <div className="dialog-backdrop">
      <section
        ref={dialog}
        className="new-puzzle-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirmation-title"
        aria-describedby="confirmation-description"
      >
        <p className="eyebrow">
          {action === 'home' ? 'Return home?' : 'Start over?'}
        </p>
        <h2 id="confirmation-title">
          {action === 'home' ? 'Leave this puzzle' : 'Start over'}
        </h2>
        <p id="confirmation-description">
          {action === 'home'
            ? 'Your current progress will no longer open automatically on this device.'
            : 'Replay this puzzle from its original givens, or choose a different puzzle.'}
        </p>
        {action === 'new-puzzle' && (
          <div className="restart-choices">
            <section className="restart-choice" aria-labelledby="replay-title">
              <div>
                <h3 id="replay-title">Replay this puzzle</h3>
                <p>Keep these givens and reset this attempt.</p>
              </div>
              <button
                className="secondary-button"
                type="button"
                onClick={replay}
              >
                Replay this puzzle
              </button>
            </section>
            <section
              className="restart-choice"
              aria-labelledby="different-title"
            >
              <div>
                <h3 id="different-title">Play a different puzzle</h3>
                <p>Choose a level for a new board.</p>
              </div>
              <fieldset className="difficulty-picker dialog-difficulty-picker">
                <legend>Level for the different puzzle</legend>
                <div className="difficulty-options">
                  {DIFFICULTIES.map((level) => (
                    <button
                      key={level}
                      type="button"
                      className={nextDifficulty === level ? 'is-selected' : ''}
                      aria-pressed={nextDifficulty === level}
                      onClick={() => setNextDifficulty(level)}
                    >
                      {titleCase(level)}
                    </button>
                  ))}
                </div>
              </fieldset>
              <button
                className="secondary-button"
                type="button"
                onClick={confirm}
              >
                Play a different puzzle
              </button>
            </section>
          </div>
        )}
        <div
          className={`dialog-actions${action === 'new-puzzle' ? ' dialog-actions--cancel' : ''}`}
        >
          <button
            ref={cancelButton}
            className={action === 'home' ? 'secondary-button' : 'quiet-action'}
            type="button"
            onClick={dismiss}
          >
            {action === 'home' ? 'Keep playing' : 'Cancel'}
          </button>
          {action === 'home' && (
            <button className="primary-action" type="button" onClick={confirm}>
              Return to front page
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

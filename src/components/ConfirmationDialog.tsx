import { useEffect, useRef } from 'react';
import type { Difficulty } from '../api/types';
import { difficultyMessageIds, useLocalization } from '../i18n/localization';
import { DIFFICULTIES, type ConfirmationAction } from '../presentation';

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
  const { formatMessage } = useLocalization();
  const isHome = action === 'home';

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
          {formatMessage(
            isHome
              ? 'confirmation.home.eyebrow'
              : 'confirmation.restart.eyebrow',
          )}
        </p>
        <h2 id="confirmation-title">
          {formatMessage(
            isHome ? 'confirmation.home.title' : 'confirmation.restart.title',
          )}
        </h2>
        <p id="confirmation-description">
          {formatMessage(
            isHome
              ? 'confirmation.home.description'
              : 'confirmation.restart.description',
          )}
        </p>
        {!isHome && (
          <div className="restart-choices">
            <section className="restart-choice" aria-labelledby="replay-title">
              <div>
                <h3 id="replay-title">
                  {formatMessage('confirmation.restart.replay.title')}
                </h3>
                <p>
                  {formatMessage('confirmation.restart.replay.description')}
                </p>
              </div>
              <button
                className="secondary-button"
                type="button"
                onClick={replay}
              >
                {formatMessage('confirmation.restart.replay.title')}
              </button>
            </section>
            <section
              className="restart-choice"
              aria-labelledby="different-title"
            >
              <div>
                <h3 id="different-title">
                  {formatMessage('confirmation.restart.different.title')}
                </h3>
                <p>
                  {formatMessage('confirmation.restart.different.description')}
                </p>
              </div>
              <fieldset className="difficulty-picker dialog-difficulty-picker">
                <legend>
                  {formatMessage('confirmation.restart.different.level')}
                </legend>
                <div className="difficulty-options">
                  {DIFFICULTIES.map((level) => (
                    <button
                      key={level}
                      type="button"
                      className={nextDifficulty === level ? 'is-selected' : ''}
                      aria-pressed={nextDifficulty === level}
                      onClick={() => setNextDifficulty(level)}
                    >
                      {formatMessage(difficultyMessageIds[level])}
                    </button>
                  ))}
                </div>
              </fieldset>
              <button
                className="secondary-button"
                type="button"
                onClick={confirm}
              >
                {formatMessage('confirmation.restart.different.title')}
              </button>
            </section>
          </div>
        )}
        <div
          className={`dialog-actions${!isHome ? ' dialog-actions--cancel' : ''}`}
        >
          <button
            ref={cancelButton}
            className={isHome ? 'secondary-button' : 'quiet-action'}
            type="button"
            onClick={dismiss}
          >
            {formatMessage(
              isHome ? 'confirmation.home.cancel' : 'common.cancel',
            )}
          </button>
          {isHome && (
            <button className="primary-action" type="button" onClick={confirm}>
              {formatMessage('confirmation.home.confirm')}
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

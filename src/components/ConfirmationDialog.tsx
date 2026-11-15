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
  const dialog = useRef<HTMLDialogElement>(null);
  const cancelButton = useRef<HTMLButtonElement>(null);
  const { formatMessage } = useLocalization();
  const isHome = action === 'home';

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (typeof element.showModal === 'function') element.showModal();
    else element.setAttribute('open', '');
    cancelButton.current?.focus();
    return () => {
      if (element.open && typeof element.close === 'function') element.close();
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="new-puzzle-dialog"
      aria-labelledby="confirmation-title"
      aria-describedby={isHome ? 'confirmation-description' : undefined}
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
    >
      <h2 id="confirmation-title">
        {formatMessage(
          isHome ? 'confirmation.home.title' : 'confirmation.restart.title',
        )}
      </h2>
      {isHome && (
        <p id="confirmation-description">
          {formatMessage('confirmation.home.description')}
        </p>
      )}
      <div
        className={`dialog-actions${!isHome ? ' dialog-actions--cancel' : ''}`}
      >
        <button
          ref={cancelButton}
          className={isHome ? 'secondary-button' : 'quiet-action'}
          type="button"
          autoFocus
          onClick={dismiss}
        >
          {formatMessage(isHome ? 'confirmation.home.cancel' : 'common.cancel')}
        </button>
        {isHome && (
          <button className="primary-action" type="button" onClick={confirm}>
            {formatMessage('confirmation.home.confirm')}
          </button>
        )}
      </div>
      {!isHome && (
        <div className="restart-choices">
          <section className="restart-choice" aria-labelledby="replay-title">
            <div>
              <h3 id="replay-title">
                {formatMessage('confirmation.restart.replay.title')}
              </h3>
              <p>{formatMessage('confirmation.restart.replay.description')}</p>
            </div>
            <button className="secondary-button" type="button" onClick={replay}>
              {formatMessage('confirmation.restart.replay.title')}
            </button>
          </section>
          <section className="restart-choice" aria-labelledby="different-title">
            <div>
              <h3 id="different-title">
                {formatMessage('confirmation.restart.different.title')}
              </h3>
              <p>
                {formatMessage('confirmation.restart.different.description')}
              </p>
            </div>
            <fieldset className="difficulty-picker dialog-difficulty-picker">
              <legend className="visually-hidden">
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
    </dialog>
  );
};

import type { Difficulty } from '../api/types';
import { difficultyMessageIds, useLocalization } from '../i18n/localization';
import type { DisplayMessage } from '../i18n/messages';
import { DIFFICULTIES, PREVIEW_PUZZLE } from '../presentation';

interface WelcomeProps {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
  connection: 'checking' | 'online' | 'offline';
  busy: boolean;
  preparingDifficulty?: Difficulty;
  message?: DisplayMessage;
  startGame: () => void;
}

export const Welcome = ({
  difficulty,
  setDifficulty,
  connection,
  busy,
  preparingDifficulty,
  message,
  startGame,
}: WelcomeProps) => {
  const { formatMessage, formatReference } = useLocalization();
  const difficultyName = (value: Difficulty) =>
    formatMessage(difficultyMessageIds[value]);

  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <div className="welcome-copy">
        <p className="eyebrow">{formatMessage('welcome.eyebrow')}</p>
        <h1 id="welcome-title">{formatMessage('welcome.title')}</h1>
        <p className="lede">{formatMessage('welcome.lede')}</p>

        <fieldset className="difficulty-picker">
          <legend>{formatMessage('welcome.difficulty')}</legend>
          <div className="difficulty-options">
            {DIFFICULTIES.map((level) => (
              <button
                key={level}
                type="button"
                className={difficulty === level ? 'is-selected' : ''}
                aria-pressed={difficulty === level}
                onClick={() => setDifficulty(level)}
                disabled={busy}
              >
                {difficultyName(level)}
              </button>
            ))}
          </div>
        </fieldset>

        <button
          className="primary-action"
          type="button"
          onClick={startGame}
          disabled={connection !== 'online' || busy}
          aria-busy={preparingDifficulty !== undefined}
        >
          {formatMessage(
            preparingDifficulty ? 'welcome.starting' : 'welcome.start',
            {
              difficulty: difficultyName(preparingDifficulty ?? difficulty),
            },
          )}
          <span aria-hidden="true">→</span>
        </button>
        {message && (
          <p className="welcome-message" aria-live="polite">
            {formatReference(message)}
          </p>
        )}
      </div>

      <figure
        className="preview-card"
        aria-label={formatMessage('welcome.preview')}
      >
        <div className="board-preview" aria-hidden="true">
          {Array.from(PREVIEW_PUZZLE, (value, index) => (
            <span key={index} className={value === '.' ? '' : 'filled'}>
              {value === '.' ? '' : value}
            </span>
          ))}
        </div>
      </figure>
    </section>
  );
};

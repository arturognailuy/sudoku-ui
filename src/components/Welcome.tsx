import type { Difficulty } from '../api/types';
import { DIFFICULTIES, PREVIEW_PUZZLE, titleCase } from '../presentation';

interface WelcomeProps {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
  connection: 'checking' | 'online' | 'offline';
  busy: boolean;
  message: string;
  startGame: () => void;
}

export const Welcome = ({
  difficulty,
  setDifficulty,
  connection,
  busy,
  message,
  startGame,
}: WelcomeProps) => (
  <section className="welcome" aria-labelledby="welcome-title">
    <div className="welcome-copy">
      <p className="eyebrow">New puzzle</p>
      <h1 id="welcome-title">Choose your difficulty</h1>
      <p className="lede">Pick a level, then start when you're ready.</p>

      <fieldset className="difficulty-picker">
        <legend>Difficulty</legend>
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
        onClick={startGame}
        disabled={connection !== 'online' || busy}
      >
        {busy ? 'Preparing puzzle…' : `Start ${titleCase(difficulty)} puzzle`}
        <span aria-hidden="true">→</span>
      </button>
      {message && (
        <p className="welcome-message" aria-live="polite">
          {message}
        </p>
      )}
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
);

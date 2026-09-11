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
      <p className="eyebrow">Sudoku, distilled</p>
      <h1 id="welcome-title">A clear board. A quieter mind.</h1>
      <p className="lede">
        Choose your level and settle into a puzzle designed to stay out of your
        way.
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
        onClick={startGame}
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
);

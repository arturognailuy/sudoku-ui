import type { Difficulty } from '../api/types';
import { titleCase } from '../presentation';

interface LoadingStateProps {
  preparingDifficulty?: Difficulty;
  transition?: 'returning-home' | 'restarting-puzzle';
}

export const LoadingState = ({
  preparingDifficulty,
  transition,
}: LoadingStateProps) => {
  if (transition) {
    const returningHome = transition === 'returning-home';
    const title = returningHome
      ? 'Returning to the front page…'
      : 'Restarting this puzzle…';
    return (
      <section
        className="app-loading game-loading"
        role="status"
        aria-live="polite"
        aria-label={title}
      >
        <span className="loading-mark" aria-hidden="true" />
        <div>
          <p className="eyebrow">{returningHome ? 'Sudoku' : 'Same puzzle'}</p>
          <h1>{title}</h1>
          <p className="game-loading-detail">
            {returningHome
              ? 'Checking for the latest interface before showing level selection.'
              : 'Keeping the old board locked until the fresh attempt is ready.'}
          </p>
        </div>
      </section>
    );
  }

  if (!preparingDifficulty) {
    return (
      <section className="app-loading" role="status" aria-live="polite">
        <span className="loading-mark" aria-hidden="true" />
        <p>Loading your puzzle…</p>
      </section>
    );
  }

  return (
    <section
      className="app-loading game-loading"
      role="status"
      aria-live="polite"
      aria-labelledby="game-loading-title"
    >
      <span className="loading-mark" aria-hidden="true" />
      <div>
        <p className="eyebrow">New puzzle</p>
        <h1 id="game-loading-title">
          Preparing your {titleCase(preparingDifficulty)} board…
        </h1>
        <p className="game-loading-detail">
          Creating a fresh puzzle now. You’ll be playing in a moment.
        </p>
      </div>
    </section>
  );
};

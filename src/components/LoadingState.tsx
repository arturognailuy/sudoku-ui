import type { Difficulty } from '../api/types';
import { titleCase } from '../presentation';

interface LoadingStateProps {
  preparingDifficulty?: Difficulty;
}

export const LoadingState = ({ preparingDifficulty }: LoadingStateProps) => {
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

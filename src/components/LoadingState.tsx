import type { Difficulty } from '../api/types';
import { titleCase } from '../presentation';

interface LoadingStateProps {
  preparingDifficulty?: Difficulty;
  transition?: 'claiming-guest' | 'returning-home' | 'restarting-puzzle';
}

export const LoadingState = ({
  preparingDifficulty,
  transition,
}: LoadingStateProps) => {
  if (transition) {
    const content = {
      'claiming-guest': {
        eyebrow: 'Account',
        title: 'Saving your puzzle to your account…',
        detail:
          'Keeping the local copy safe until your account confirms the save.',
      },
      'returning-home': {
        eyebrow: 'Sudoku',
        title: 'Returning to the front page…',
        detail:
          'Checking for the latest interface before showing level selection.',
      },
      'restarting-puzzle': {
        eyebrow: 'Same puzzle',
        title: 'Restarting this puzzle…',
        detail:
          'Keeping the old board locked until the fresh attempt is ready.',
      },
    }[transition];
    return (
      <section
        className="app-loading game-loading"
        role="status"
        aria-live="polite"
        aria-label={content.title}
      >
        <span className="loading-mark" aria-hidden="true" />
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="game-loading-detail">{content.detail}</p>
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

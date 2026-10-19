import type { Difficulty } from '../api/types';
import type { MessageId } from '../i18n/catalogs';
import { difficultyMessageIds, useLocalization } from '../i18n/localization';

interface LoadingStateProps {
  preparingDifficulty?: Difficulty;
  transition?: 'claiming-guest' | 'returning-home' | 'restarting-puzzle';
}

const transitionMessageIds: Record<
  NonNullable<LoadingStateProps['transition']>,
  { eyebrow: MessageId; title: MessageId; detail: MessageId }
> = {
  'claiming-guest': {
    eyebrow: 'loading.account.eyebrow',
    title: 'loading.account.title',
    detail: 'loading.account.detail',
  },
  'returning-home': {
    eyebrow: 'loading.home.eyebrow',
    title: 'loading.home.title',
    detail: 'loading.home.detail',
  },
  'restarting-puzzle': {
    eyebrow: 'loading.restart.eyebrow',
    title: 'loading.restart.title',
    detail: 'loading.restart.detail',
  },
};

export const LoadingState = ({
  preparingDifficulty,
  transition,
}: LoadingStateProps) => {
  const { formatMessage } = useLocalization();

  if (transition) {
    const ids = transitionMessageIds[transition];
    const title = formatMessage(ids.title);
    return (
      <section
        className="app-loading game-loading"
        role="status"
        aria-live="polite"
        aria-label={title}
      >
        <span className="loading-mark" aria-hidden="true" />
        <div>
          <p className="eyebrow">{formatMessage(ids.eyebrow)}</p>
          <h1>{title}</h1>
          <p className="game-loading-detail">{formatMessage(ids.detail)}</p>
        </div>
      </section>
    );
  }

  if (!preparingDifficulty) {
    return (
      <section className="app-loading" role="status" aria-live="polite">
        <span className="loading-mark" aria-hidden="true" />
        <p>{formatMessage('loading.initial')}</p>
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
        <p className="eyebrow">{formatMessage('loading.new.eyebrow')}</p>
        <h1 id="game-loading-title">
          {formatMessage('loading.new.title', {
            difficulty: formatMessage(
              difficultyMessageIds[preparingDifficulty],
            ),
          })}
        </h1>
        <p className="game-loading-detail">
          {formatMessage('loading.new.detail')}
        </p>
      </div>
    </section>
  );
};

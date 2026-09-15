import { useRef, useState } from 'react';
import type { Difficulty, SessionSummary } from '../api/types';
import {
  DIFFICULTIES,
  PREVIEW_PUZZLE,
  formatSessionUpdatedAt,
  titleCase,
} from '../presentation';

interface WelcomeProps {
  difficulty: Difficulty;
  setDifficulty: (difficulty: Difficulty) => void;
  connection: 'checking' | 'online' | 'offline';
  busy: boolean;
  sessionsLoading: boolean;
  savedSessions: SessionSummary[];
  message: string;
  startGame: () => void;
  continueSession: (sessionId: string) => void;
  discardSession: (sessionId: string) => void;
  importSession: (document: File) => void;
}

export const Welcome = ({
  difficulty,
  setDifficulty,
  connection,
  busy,
  sessionsLoading,
  savedSessions,
  message,
  startGame,
  continueSession,
  discardSession,
  importSession,
}: WelcomeProps) => {
  const importInput = useRef<HTMLInputElement>(null);
  const [confirmingDiscard, setConfirmingDiscard] = useState<string>();

  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <div className="welcome-copy">
        <p className="eyebrow">Sudoku, distilled</p>
        <h1 id="welcome-title">A clear board. A quieter mind.</h1>
        <p className="lede">
          Choose your level and settle into a puzzle designed to stay out of
          your way.
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

        <div className="welcome-actions">
          <button
            className="primary-action"
            type="button"
            onClick={startGame}
            disabled={connection !== 'online' || busy}
          >
            {busy ? 'Preparing puzzle…' : `Play ${titleCase(difficulty)}`}
            <span aria-hidden="true">→</span>
          </button>
          <button
            className="secondary-button"
            type="button"
            disabled={connection !== 'online' || busy}
            onClick={() => importInput.current?.click()}
          >
            Open game file
          </button>
          <input
            ref={importInput}
            className="visually-hidden"
            type="file"
            accept="application/json,application/vnd.sudoku.session+json,.json"
            aria-label="Choose a saved Sudoku game file"
            onChange={(event) => {
              const file = event.currentTarget.files?.[0];
              if (file) importSession(file);
              event.currentTarget.value = '';
            }}
          />
        </div>

        <p className="welcome-message" aria-live="polite">
          {message}
        </p>

        {(sessionsLoading || savedSessions.length > 0) && (
          <section className="saved-games" aria-labelledby="saved-games-title">
            <div className="saved-games-heading">
              <div>
                <h2 id="saved-games-title">Your recent games</h2>
                <p>Pick up where you left off or revisit a finished board.</p>
              </div>
              {sessionsLoading && <span role="status">Refreshing…</span>}
            </div>
            <ul>
              {savedSessions.slice(0, 5).map((saved) => {
                const updatedAt = formatSessionUpdatedAt(saved.updated_at);
                const completed = saved.status === 'solved';
                return (
                  <li key={saved.id}>
                    <div className="saved-game-details">
                      <strong>{completed ? 'Completed' : 'In progress'}</strong>
                      <time dateTime={saved.updated_at}>
                        Last played {updatedAt}
                      </time>
                    </div>
                    <div className="saved-game-actions">
                      <button
                        className="secondary-button"
                        type="button"
                        disabled={busy}
                        aria-label={`${completed ? 'View' : 'Resume'} game last played ${updatedAt}`}
                        onClick={() => continueSession(saved.id)}
                      >
                        {completed ? 'View' : 'Resume'}
                      </button>
                      {confirmingDiscard === saved.id ? (
                        <div
                          className="saved-game-confirmation"
                          role="group"
                          aria-label={`Delete game last played ${updatedAt}?`}
                        >
                          <span>Delete this game?</span>
                          <button
                            className="text-button"
                            type="button"
                            onClick={() => setConfirmingDiscard(undefined)}
                          >
                            Keep
                          </button>
                          <button
                            className="danger-button"
                            type="button"
                            disabled={busy}
                            onClick={() => {
                              discardSession(saved.id);
                              setConfirmingDiscard(undefined);
                            }}
                          >
                            Delete game
                          </button>
                        </div>
                      ) : (
                        <button
                          className="text-button"
                          type="button"
                          disabled={busy}
                          aria-label={`Delete game last played ${updatedAt}`}
                          onClick={() => setConfirmingDiscard(saved.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
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
};

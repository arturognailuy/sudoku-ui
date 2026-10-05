import type { Account, AccountGameSummary } from '../api/types';
import { titleCase } from '../presentation';

interface AccountPanelProps {
  account?: Account;
  games: AccountGameSummary[];
  signInUrl: string;
  busy: boolean;
  resumeGame: (gameId: string) => void;
  deleteGame: (gameId: string) => void;
  logout: () => void;
  revokeSessions: () => void;
  deleteAccount: () => void;
}

const formatUpdatedAt = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Saved game';
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
};

export const AccountPanel = ({
  account,
  games,
  signInUrl,
  busy,
  resumeGame,
  deleteGame,
  logout,
  revokeSessions,
  deleteAccount,
}: AccountPanelProps) => {
  if (!account) {
    return (
      <aside className="account-prompt" aria-label="Account">
        <div>
          <strong>Continue on other devices</strong>
          <span>Sign in to save this browser’s active game automatically.</span>
        </div>
        <a className="secondary-button" href={signInUrl}>
          Sign in with Google
        </a>
      </aside>
    );
  }

  return (
    <aside className="account-panel" aria-labelledby="account-title">
      <div className="account-heading">
        <div>
          <p className="eyebrow">Account</p>
          <h2 id="account-title">{account.display_name}</h2>
          <p>{account.email}</p>
        </div>
        <button
          type="button"
          className="secondary-button"
          onClick={logout}
          disabled={busy}
        >
          Sign out
        </button>
      </div>

      <section aria-labelledby="my-games-title">
        <h3 id="my-games-title">My games</h3>
        {games.length === 0 ? (
          <p className="account-empty">No saved games yet.</p>
        ) : (
          <ul className="account-games">
            {games.map((game) => (
              <li key={game.id}>
                <div>
                  <strong>{titleCase(game.actual_difficulty)} puzzle</strong>
                  <span>{formatUpdatedAt(game.updated_at)}</span>
                </div>
                <div>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => resumeGame(game.id)}
                    disabled={busy}
                  >
                    Open
                  </button>
                  <button
                    type="button"
                    className="text-button text-button--danger"
                    onClick={() => {
                      if (window.confirm('Delete this saved game?'))
                        deleteGame(game.id);
                    }}
                    disabled={busy}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <details className="account-settings">
        <summary>Account settings</summary>
        <div>
          <button
            type="button"
            className="text-button"
            onClick={() => {
              if (window.confirm('Sign out on every device?')) revokeSessions();
            }}
            disabled={busy}
          >
            Revoke all sessions
          </button>
          <button
            type="button"
            className="text-button text-button--danger"
            onClick={() => {
              if (
                window.confirm(
                  'Delete your account and every saved game? This cannot be undone.',
                )
              )
                deleteAccount();
            }}
            disabled={busy}
          >
            Delete account
          </button>
        </div>
      </details>
    </aside>
  );
};

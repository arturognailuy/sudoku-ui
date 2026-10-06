import { useRef, useState } from 'react';
import type { Account, AccountGameSummary } from '../api/types';
import { titleCase } from '../presentation';
import {
  AccountConfirmationDialog,
  type AccountConfirmationAction,
} from './AccountConfirmationDialog';

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
  close?: () => void;
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
  close,
}: AccountPanelProps) => {
  const [confirmation, setConfirmation] = useState<AccountConfirmationAction>();
  const confirmationTrigger = useRef<HTMLButtonElement>(null);

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

  const requestConfirmation = (
    action: AccountConfirmationAction,
    trigger: HTMLButtonElement,
  ) => {
    confirmationTrigger.current = trigger;
    setConfirmation(action);
  };

  const dismissConfirmation = () => {
    setConfirmation(undefined);
    window.requestAnimationFrame(() => confirmationTrigger.current?.focus());
  };

  const confirmAction = () => {
    if (!confirmation) return;
    setConfirmation(undefined);
    if (confirmation.kind === 'delete-game') {
      deleteGame(confirmation.gameId);
    } else if (confirmation.kind === 'revoke-sessions') {
      revokeSessions();
    } else {
      deleteAccount();
    }
  };

  return (
    <aside className="account-panel" aria-labelledby="account-title">
      <div className="account-heading">
        <div>
          <p className="eyebrow">Account</p>
          <h2 id="account-title">{account.display_name}</h2>
          <p>{account.email}</p>
        </div>
        {close && (
          <button
            type="button"
            className="account-close"
            aria-label="Close account panel"
            onClick={close}
          >
            ×
          </button>
        )}
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
                    onClick={(event) =>
                      requestConfirmation(
                        { kind: 'delete-game', gameId: game.id },
                        event.currentTarget,
                      )
                    }
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

      <button
        type="button"
        className="secondary-button account-sign-out"
        onClick={logout}
        disabled={busy}
      >
        Sign out
      </button>

      <details className="account-settings">
        <summary>Account settings</summary>
        <div>
          <button
            type="button"
            className="text-button"
            onClick={(event) =>
              requestConfirmation(
                { kind: 'revoke-sessions' },
                event.currentTarget,
              )
            }
            disabled={busy}
          >
            Revoke all sessions
          </button>
          <button
            type="button"
            className="text-button text-button--danger"
            onClick={(event) =>
              requestConfirmation(
                { kind: 'delete-account' },
                event.currentTarget,
              )
            }
            disabled={busy}
          >
            Delete account
          </button>
        </div>
      </details>

      {confirmation && (
        <AccountConfirmationDialog
          action={confirmation}
          accountEmail={account.email}
          busy={busy}
          dismiss={dismissConfirmation}
          confirm={confirmAction}
        />
      )}
    </aside>
  );
};

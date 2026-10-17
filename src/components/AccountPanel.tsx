import { useRef, useState } from 'react';
import type { Account, AccountGameSummary } from '../api/types';
import {
  formatElapsed,
  titleCase,
  type AccountOperation,
} from '../presentation';
import {
  AccountConfirmationDialog,
  type AccountConfirmationAction,
} from './AccountConfirmationDialog';

interface AccountPanelProps {
  account?: Account;
  games: AccountGameSummary[];
  signInUrl: string;
  busy: boolean;
  operation?: AccountOperation;
  resumeGame: (gameId: string) => Promise<boolean>;
  deleteGame: (gameId: string) => Promise<boolean>;
  deleteAllGames: () => Promise<boolean>;
  logout: () => Promise<boolean>;
  revokeSessions: () => Promise<boolean>;
  deleteAccount: () => Promise<boolean>;
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
  operation,
  resumeGame,
  deleteGame,
  deleteAllGames,
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

  const confirmationPending =
    (confirmation?.kind === 'delete-game' &&
      operation?.kind === 'deleting-game' &&
      operation.gameId === confirmation.gameId) ||
    (confirmation?.kind === 'delete-all-games' &&
      operation?.kind === 'deleting-all-games') ||
    (confirmation?.kind === 'revoke-sessions' &&
      operation?.kind === 'revoking-sessions') ||
    (confirmation?.kind === 'delete-account' &&
      operation?.kind === 'deleting-account');

  const confirmAction = async () => {
    if (!confirmation || confirmationPending) return;
    const accepted =
      confirmation.kind === 'delete-game'
        ? await deleteGame(confirmation.gameId)
        : confirmation.kind === 'delete-all-games'
          ? await deleteAllGames()
          : confirmation.kind === 'revoke-sessions'
            ? await revokeSessions()
            : await deleteAccount();
    if (accepted) setConfirmation(undefined);
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
            disabled={busy}
          >
            ×
          </button>
        )}
      </div>

      <section aria-labelledby="my-games-title">
        <div className="account-games-heading">
          <h3 id="my-games-title">My games</h3>
          {games.length > 0 && (
            <button
              type="button"
              className="text-button text-button--danger"
              onClick={(event) =>
                requestConfirmation(
                  { kind: 'delete-all-games' },
                  event.currentTarget,
                )
              }
              disabled={busy}
            >
              {operation?.kind === 'deleting-all-games'
                ? 'Deleting all…'
                : 'Delete all'}
            </button>
          )}
        </div>
        {games.length === 0 ? (
          <p className="account-empty">No saved games yet.</p>
        ) : (
          <ul className="account-games">
            {games.map((game) => (
              <li key={game.id}>
                <div>
                  <strong>{titleCase(game.actual_difficulty)} puzzle</strong>
                  <span>
                    {game.status === 'solved' ? 'Finished' : 'In progress'} ·{' '}
                    {formatElapsed(game.elapsed_seconds)}
                  </span>
                  <span>{formatUpdatedAt(game.updated_at)}</span>
                </div>
                <div>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => void resumeGame(game.id)}
                    disabled={busy}
                  >
                    {operation?.kind === 'opening-game' &&
                    operation.gameId === game.id
                      ? 'Opening…'
                      : 'Open'}
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
                    {operation?.kind === 'deleting-game' &&
                    operation.gameId === game.id
                      ? 'Deleting…'
                      : 'Delete'}
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
        onClick={() => void logout()}
        disabled={busy}
      >
        {operation?.kind === 'signing-out' ? 'Signing out…' : 'Sign out'}
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
          busy={Boolean(confirmationPending)}
          dismiss={dismissConfirmation}
          confirm={() => void confirmAction()}
        />
      )}
    </aside>
  );
};

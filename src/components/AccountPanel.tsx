import { useRef, useState } from 'react';
import type { Account, AccountGameSummary } from '../api/types';
import { difficultyMessageIds, useLocalization } from '../i18n/localization';
import { formatElapsed, type AccountOperation } from '../presentation';
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
  const { formatMessage, locale } = useLocalization();
  const formatUpdatedAt = (value: string) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      return formatMessage('account.games.saved');
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  };

  if (!account) {
    return (
      <aside
        className="account-prompt"
        aria-label={formatMessage('account.label')}
      >
        <div>
          <strong>{formatMessage('account.continue.title')}</strong>
          <span>{formatMessage('account.continue.detail')}</span>
        </div>
        <a className="secondary-button" href={signInUrl}>
          {formatMessage('account.signIn')}
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
          <p className="eyebrow">{formatMessage('account.label')}</p>
          <h2 id="account-title">{account.display_name}</h2>
          <p>{account.email}</p>
        </div>
        {close && (
          <button
            type="button"
            className="account-close"
            aria-label={formatMessage('account.close')}
            onClick={close}
            disabled={busy}
          >
            ×
          </button>
        )}
      </div>

      <section aria-labelledby="my-games-title">
        <div className="account-games-heading">
          <h3 id="my-games-title">{formatMessage('account.games.title')}</h3>
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
              {formatMessage(
                operation?.kind === 'deleting-all-games'
                  ? 'account.games.deletingAll'
                  : 'account.games.deleteAll',
              )}
            </button>
          )}
        </div>
        {games.length === 0 ? (
          <p className="account-empty">
            {formatMessage('account.games.empty')}
          </p>
        ) : (
          <ul className="account-games">
            {games.map((game) => (
              <li key={game.id}>
                <div>
                  <strong>
                    {formatMessage('account.games.puzzle', {
                      difficulty: formatMessage(
                        difficultyMessageIds[game.actual_difficulty],
                      ),
                    })}
                  </strong>
                  <span>
                    {formatMessage(
                      game.status === 'solved'
                        ? 'account.games.finished'
                        : 'account.games.inProgress',
                    )}{' '}
                    · {formatElapsed(game.elapsed_seconds)}
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
                    {formatMessage(
                      operation?.kind === 'opening-game' &&
                        operation.gameId === game.id
                        ? 'account.games.opening'
                        : 'account.games.open',
                    )}
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
                    {formatMessage(
                      operation?.kind === 'deleting-game' &&
                        operation.gameId === game.id
                        ? 'account.games.deleting'
                        : 'account.games.delete',
                    )}
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
        {formatMessage(
          operation?.kind === 'signing-out'
            ? 'account.signingOut'
            : 'account.signOut',
        )}
      </button>

      <details className="account-settings">
        <summary>{formatMessage('account.settings')}</summary>
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
            {formatMessage('account.revoke')}
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
            {formatMessage('account.delete')}
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

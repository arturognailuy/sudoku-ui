import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { MessageId } from '../i18n/catalogs';
import { useLocalization } from '../i18n/localization';

export type AccountConfirmationAction =
  | { kind: 'delete-game'; gameId: string }
  | { kind: 'delete-all-games' }
  | { kind: 'revoke-sessions' }
  | { kind: 'delete-account' };

interface AccountConfirmationDialogProps {
  action: AccountConfirmationAction;
  accountEmail: string;
  busy: boolean;
  dismiss: () => void;
  confirm: () => void;
}

const content: Record<
  AccountConfirmationAction['kind'],
  {
    title: MessageId;
    description: MessageId;
    confirmLabel: MessageId;
    pendingLabel: MessageId;
  }
> = {
  'delete-game': {
    title: 'account.confirm.deleteGame.title',
    description: 'account.confirm.deleteGame.description',
    confirmLabel: 'account.confirm.deleteGame.action',
    pendingLabel: 'account.confirm.deleteGame.pending',
  },
  'delete-all-games': {
    title: 'account.confirm.deleteAll.title',
    description: 'account.confirm.deleteAll.description',
    confirmLabel: 'account.confirm.deleteAll.action',
    pendingLabel: 'account.confirm.deleteAll.pending',
  },
  'revoke-sessions': {
    title: 'account.confirm.revoke.title',
    description: 'account.confirm.revoke.description',
    confirmLabel: 'account.confirm.revoke.action',
    pendingLabel: 'account.confirm.revoke.pending',
  },
  'delete-account': {
    title: 'account.confirm.deleteAccount.title',
    description: 'account.confirm.deleteAccount.description',
    confirmLabel: 'account.confirm.deleteAccount.action',
    pendingLabel: 'account.confirm.deleteAccount.pending',
  },
};

export const AccountConfirmationDialog = ({
  action,
  accountEmail,
  busy,
  dismiss,
  confirm,
}: AccountConfirmationDialogProps) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const cancelButton = useRef<HTMLButtonElement>(null);
  const [typedEmail, setTypedEmail] = useState('');
  const { formatMessage } = useLocalization();
  const details = content[action.kind];
  const requiresEmail = action.kind === 'delete-account';
  const canConfirm = !busy && (!requiresEmail || typedEmail === accountEmail);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (typeof element.showModal === 'function') element.showModal();
    else element.setAttribute('open', '');
    cancelButton.current?.focus();
    return () => {
      if (element.open && typeof element.close === 'function') element.close();
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialog}
      className="new-puzzle-dialog account-confirmation-dialog"
      aria-labelledby="account-confirmation-title"
      aria-describedby="account-confirmation-description"
      aria-busy={busy}
      onCancel={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!busy) dismiss();
      }}
    >
      <h2 id="account-confirmation-title">{formatMessage(details.title)}</h2>
      <p id="account-confirmation-description">
        {formatMessage(details.description)}
      </p>
      {requiresEmail && (
        <label className="account-confirmation-input">
          <span>
            {formatMessage('account.confirm.typeEmail', {
              email: accountEmail,
            })}
          </span>
          <input
            type="email"
            autoComplete="off"
            spellCheck={false}
            value={typedEmail}
            disabled={busy}
            onChange={(event) => setTypedEmail(event.currentTarget.value)}
          />
        </label>
      )}
      <div className="dialog-actions">
        <button
          ref={cancelButton}
          className="secondary-button"
          autoFocus
          type="button"
          onClick={dismiss}
          disabled={busy}
        >
          {formatMessage('common.cancel')}
        </button>
        <button
          className="danger-action"
          type="button"
          onClick={confirm}
          disabled={!canConfirm}
        >
          {formatMessage(busy ? details.pendingLabel : details.confirmLabel)}
        </button>
      </div>
    </dialog>,
    document.body,
  );
};

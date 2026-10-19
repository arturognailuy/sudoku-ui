import { useEffect, useRef, useState } from 'react';
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
    eyebrow: MessageId;
    title: MessageId;
    description: MessageId;
    confirmLabel: MessageId;
    pendingLabel: MessageId;
  }
> = {
  'delete-game': {
    eyebrow: 'account.confirm.deleteGame.eyebrow',
    title: 'account.confirm.deleteGame.title',
    description: 'account.confirm.deleteGame.description',
    confirmLabel: 'account.confirm.deleteGame.action',
    pendingLabel: 'account.confirm.deleteGame.pending',
  },
  'delete-all-games': {
    eyebrow: 'account.confirm.deleteAll.eyebrow',
    title: 'account.confirm.deleteAll.title',
    description: 'account.confirm.deleteAll.description',
    confirmLabel: 'account.confirm.deleteAll.action',
    pendingLabel: 'account.confirm.deleteAll.pending',
  },
  'revoke-sessions': {
    eyebrow: 'account.confirm.revoke.eyebrow',
    title: 'account.confirm.revoke.title',
    description: 'account.confirm.revoke.description',
    confirmLabel: 'account.confirm.revoke.action',
    pendingLabel: 'account.confirm.revoke.pending',
  },
  'delete-account': {
    eyebrow: 'account.confirm.deleteAccount.eyebrow',
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
  const dialog = useRef<HTMLElement>(null);
  const cancelButton = useRef<HTMLButtonElement>(null);
  const [typedEmail, setTypedEmail] = useState('');
  const { formatMessage } = useLocalization();
  const details = content[action.kind];
  const requiresEmail = action.kind === 'delete-account';
  const canConfirm = !busy && (!requiresEmail || typedEmail === accountEmail);

  useEffect(() => {
    cancelButton.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        if (!busy) dismiss();
        return;
      }
      if (event.key !== 'Tab') return;
      const controls = Array.from(
        dialog.current?.querySelectorAll<HTMLElement>('button, input') ?? [],
      ).filter((control) => !control.hasAttribute('disabled'));
      if (controls.length === 0) return;
      const currentIndex = controls.indexOf(
        document.activeElement as HTMLElement,
      );
      const nextIndex = event.shiftKey
        ? (currentIndex - 1 + controls.length) % controls.length
        : (currentIndex + 1) % controls.length;
      event.preventDefault();
      controls[nextIndex]?.focus();
    };
    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, [busy, dismiss]);

  return (
    <div className="dialog-backdrop account-confirmation-backdrop">
      <section
        ref={dialog}
        className="new-puzzle-dialog account-confirmation-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="account-confirmation-title"
        aria-describedby="account-confirmation-description"
        aria-busy={busy}
      >
        <p className="eyebrow">{formatMessage(details.eyebrow)}</p>
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
      </section>
    </div>
  );
};

import { useEffect, useRef, useState } from 'react';

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

const content = {
  'delete-game': {
    eyebrow: 'Delete saved game?',
    title: 'Delete this game',
    description:
      'This puzzle and its progress will be permanently removed from My games. This cannot be undone.',
    confirmLabel: 'Delete game',
  },
  'delete-all-games': {
    eyebrow: 'Delete every saved game?',
    title: 'Delete all games',
    description:
      'Every puzzle and all progress in My games will be permanently removed. This cannot be undone.',
    confirmLabel: 'Delete all games',
  },
  'revoke-sessions': {
    eyebrow: 'Account security',
    title: 'Sign out every device',
    description:
      'Every signed-in session, including this one, will end. Your account and saved games will remain.',
    confirmLabel: 'Revoke all sessions',
  },
  'delete-account': {
    eyebrow: 'Permanent action',
    title: 'Delete your account',
    description:
      'Your identity, every signed-in session, and all saved games will be permanently removed. The shared puzzle catalog is unaffected.',
    confirmLabel: 'Delete account',
  },
} as const;

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
  const details = content[action.kind];
  const requiresEmail = action.kind === 'delete-account';
  const canConfirm = !busy && (!requiresEmail || typedEmail === accountEmail);

  useEffect(() => {
    cancelButton.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        dismiss();
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
  }, [dismiss]);

  return (
    <div className="dialog-backdrop account-confirmation-backdrop">
      <section
        ref={dialog}
        className="new-puzzle-dialog account-confirmation-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="account-confirmation-title"
        aria-describedby="account-confirmation-description"
      >
        <p className="eyebrow">{details.eyebrow}</p>
        <h2 id="account-confirmation-title">{details.title}</h2>
        <p id="account-confirmation-description">{details.description}</p>
        {requiresEmail && (
          <label className="account-confirmation-input">
            <span>
              Type <strong>{accountEmail}</strong> to confirm
            </span>
            <input
              type="email"
              autoComplete="off"
              spellCheck={false}
              value={typedEmail}
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
          >
            Cancel
          </button>
          <button
            className="danger-action"
            type="button"
            onClick={confirm}
            disabled={!canConfirm}
          >
            {details.confirmLabel}
          </button>
        </div>
      </section>
    </div>
  );
};

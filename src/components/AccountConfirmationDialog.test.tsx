// @vitest-environment jsdom
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { sourceMessages } from '../i18n/catalogs';
import { AccountConfirmationDialog } from './AccountConfirmationDialog';

describe('AccountConfirmationDialog', () => {
  it('starts on the safe action and dismisses through the native cancel event', async () => {
    const dismiss = vi.fn();
    render(
      <AccountConfirmationDialog
        action={{ kind: 'revoke-sessions' }}
        accountEmail="player@example.test"
        busy={false}
        dismiss={dismiss}
        confirm={vi.fn()}
      />,
    );

    expect(screen.queryByText('Account security')).not.toBeInTheDocument();
    const cancel = screen.getByRole('button', { name: 'Cancel' });
    const confirm = screen.getByRole('button', {
      name: sourceMessages['account.confirm.revoke.action'],
    });
    await waitFor(() => expect(cancel).toHaveFocus());
    expect(confirm).toBeEnabled();
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('open');
    fireEvent(dialog, new Event('cancel', { cancelable: true }));
    expect(dismiss).toHaveBeenCalledOnce();
  });

  it('describes account deletion and blocks confirmation while busy', () => {
    render(
      <AccountConfirmationDialog
        action={{ kind: 'delete-account' }}
        accountEmail="player@example.test"
        busy
        dismiss={vi.fn()}
        confirm={vi.fn()}
      />,
    );
    expect(screen.getByRole('dialog')).toHaveAccessibleDescription(
      /identity.*saved games.*shared puzzle catalog is unaffected/i,
    );
    expect(screen.queryByText('Permanent action')).not.toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'player@example.test' },
    });
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-busy', 'true');
    expect(
      screen.getByRole('button', { name: 'Deleting account…' }),
    ).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeDisabled();
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

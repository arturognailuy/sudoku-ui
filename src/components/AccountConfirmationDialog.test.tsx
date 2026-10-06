// @vitest-environment jsdom
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AccountConfirmationDialog } from './AccountConfirmationDialog';

describe('AccountConfirmationDialog', () => {
  it('starts on the safe action, traps focus, and dismisses with Escape', async () => {
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

    const cancel = screen.getByRole('button', { name: 'Cancel' });
    const confirm = screen.getByRole('button', {
      name: 'Revoke all sessions',
    });
    await waitFor(() => expect(cancel).toHaveFocus());
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(confirm).toHaveFocus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(cancel).toHaveFocus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(confirm).toHaveFocus();
    fireEvent.keyDown(document, { key: 'Escape' });
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
    expect(screen.getByRole('alertdialog')).toHaveAccessibleDescription(
      /identity.*saved games.*shared puzzle catalog is unaffected/i,
    );
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'player@example.test' },
    });
    expect(
      screen.getByRole('button', { name: 'Delete account' }),
    ).toBeDisabled();
  });
});

// @vitest-environment jsdom
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AccountPanel } from './AccountPanel';

const actions = () => ({
  resumeGame: vi.fn(),
  deleteGame: vi.fn(),
  deleteAllGames: vi.fn(),
  logout: vi.fn(),
  revokeSessions: vi.fn(),
  deleteAccount: vi.fn(),
});

const account = {
  email: 'player@example.test',
  display_name: 'Puzzle Player',
  csrf_token: 'secret-proof',
};

const game = {
  id: 'game-1',
  revision: 3,
  actual_difficulty: 'hard' as const,
  status: 'solved' as const,
  elapsed_seconds: 125,
  updated_at: '2026-10-05T00:00:00Z',
};

describe('AccountPanel', () => {
  it('offers secondary Google sign-in without an account', () => {
    render(
      <AccountPanel
        games={[]}
        signInUrl="/api/v1/auth/google/start"
        busy={false}
        {...actions()}
      />,
    );
    expect(
      screen.getByRole('link', { name: 'Sign in with Google' }),
    ).toHaveAttribute('href', '/api/v1/auth/google/start');
    expect(screen.getByText(/save this browser’s active game/i)).toBeVisible();
  });

  it('lists account games and confirms deletion through an accessible dialog', async () => {
    const callbacks = actions();
    const close = vi.fn();
    render(
      <AccountPanel
        account={account}
        games={[game]}
        signInUrl="/login"
        busy={false}
        close={close}
        {...callbacks}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Puzzle Player' }),
    ).toBeVisible();
    fireEvent.click(
      screen.getByRole('button', { name: 'Close account panel' }),
    );
    expect(close).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: 'Open' }));
    expect(callbacks.resumeGame).toHaveBeenCalledWith('game-1');

    const deleteTrigger = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteTrigger);
    expect(screen.getByRole('alertdialog')).toHaveAccessibleName(
      'Delete this game',
    );
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus(),
    );
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(callbacks.deleteGame).not.toHaveBeenCalled();
    await waitFor(() => expect(deleteTrigger).toHaveFocus());

    fireEvent.click(deleteTrigger);
    fireEvent.click(screen.getByRole('button', { name: 'Delete game' }));
    expect(callbacks.deleteGame).toHaveBeenCalledWith('game-1');
    expect(screen.getByText('Finished · 2:05')).toBeVisible();
    const deleteAllTrigger = screen.getByRole('button', { name: 'Delete all' });
    fireEvent.click(deleteAllTrigger);
    expect(screen.getByRole('alertdialog')).toHaveAccessibleName(
      'Delete all games',
    );
    fireEvent.click(screen.getByRole('button', { name: 'Delete all games' }));
    expect(callbacks.deleteAllGames).toHaveBeenCalledOnce();

    fireEvent.click(screen.getByRole('button', { name: 'Sign out' }));
    expect(callbacks.logout).toHaveBeenCalledOnce();
  });

  it('confirms session revocation and requires the exact email for account deletion', () => {
    const callbacks = actions();
    render(
      <AccountPanel
        account={account}
        games={[]}
        signInUrl="/login"
        busy={false}
        {...callbacks}
      />,
    );
    expect(screen.getByText('No saved games yet.')).toBeVisible();
    fireEvent.click(screen.getByText('Account settings'));

    fireEvent.click(
      screen.getByRole('button', { name: 'Revoke all sessions' }),
    );
    fireEvent.click(
      within(screen.getByRole('alertdialog')).getByRole('button', {
        name: 'Revoke all sessions',
      }),
    );
    expect(callbacks.revokeSessions).toHaveBeenCalledOnce();

    fireEvent.click(screen.getByRole('button', { name: 'Delete account' }));
    const dialog = within(screen.getByRole('alertdialog'));
    const confirm = dialog.getByRole('button', { name: 'Delete account' });
    const input = dialog.getByRole('textbox', {
      name: /type player@example\.test to confirm/i,
    });
    expect(confirm).toBeDisabled();
    fireEvent.change(input, { target: { value: 'wrong@example.test' } });
    expect(confirm).toBeDisabled();
    fireEvent.change(input, { target: { value: 'player@example.test' } });
    expect(confirm).toBeEnabled();
    fireEvent.click(confirm);
    expect(callbacks.deleteAccount).toHaveBeenCalledOnce();
  });

  it('formats an unknown saved-game timestamp safely', () => {
    render(
      <AccountPanel
        account={account}
        games={[{ ...game, updated_at: 'not-a-date' }]}
        signInUrl="/login"
        busy={false}
        {...actions()}
      />,
    );
    expect(screen.getByText('Saved game')).toBeVisible();
  });
});

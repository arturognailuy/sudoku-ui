// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AccountPanel } from './AccountPanel';

const actions = () => ({
  resumeGame: vi.fn(),
  deleteGame: vi.fn(),
  logout: vi.fn(),
  revokeSessions: vi.fn(),
  deleteAccount: vi.fn(),
});

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

  it('lists account games and exposes account controls', () => {
    const callbacks = actions();
    const close = vi.fn();
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    render(
      <AccountPanel
        account={{
          email: 'player@example.test',
          display_name: 'Puzzle Player',
          csrf_token: 'secret-proof',
        }}
        games={[
          {
            id: 'game-1',
            revision: 3,
            actual_difficulty: 'hard',
            updated_at: '2026-10-05T00:00:00Z',
          },
        ]}
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
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
    expect(callbacks.deleteGame).toHaveBeenCalledWith('game-1');
    fireEvent.click(screen.getByRole('button', { name: 'Sign out' }));
    expect(callbacks.logout).toHaveBeenCalledOnce();

    fireEvent.click(screen.getByText('Account settings'));
    fireEvent.click(
      screen.getByRole('button', { name: 'Revoke all sessions' }),
    );
    fireEvent.click(screen.getByRole('button', { name: 'Delete account' }));
    expect(callbacks.revokeSessions).toHaveBeenCalledOnce();
    expect(callbacks.deleteAccount).toHaveBeenCalledOnce();
  });

  it('handles an empty list, unknown timestamps, and cancelled destructive actions', () => {
    const callbacks = actions();
    vi.spyOn(window, 'confirm').mockReturnValue(false);
    const { rerender } = render(
      <AccountPanel
        account={{
          email: 'player@example.test',
          display_name: 'Puzzle Player',
          csrf_token: 'secret-proof',
        }}
        games={[]}
        signInUrl="/login"
        busy={false}
        {...callbacks}
      />,
    );
    expect(screen.getByText('No saved games yet.')).toBeVisible();

    rerender(
      <AccountPanel
        account={{
          email: 'player@example.test',
          display_name: 'Puzzle Player',
          csrf_token: 'secret-proof',
        }}
        games={[
          {
            id: 'game-2',
            revision: 0,
            actual_difficulty: 'easy',
            updated_at: 'not-a-date',
          },
        ]}
        signInUrl="/login"
        busy={false}
        {...callbacks}
      />,
    );
    expect(screen.getByText('Saved game')).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
    fireEvent.click(screen.getByText('Account settings'));
    fireEvent.click(
      screen.getByRole('button', { name: 'Revoke all sessions' }),
    );
    fireEvent.click(screen.getByRole('button', { name: 'Delete account' }));
    expect(callbacks.deleteGame).not.toHaveBeenCalled();
    expect(callbacks.revokeSessions).not.toHaveBeenCalled();
    expect(callbacks.deleteAccount).not.toHaveBeenCalled();
  });
});

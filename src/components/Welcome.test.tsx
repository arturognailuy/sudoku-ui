// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PREVIEW_PUZZLE } from '../presentation';
import { Welcome } from './Welcome';

const baseProps = {
  difficulty: 'easy' as const,
  setDifficulty: vi.fn(),
  connection: 'online' as const,
  busy: false,
  sessionsLoading: false,
  savedSessions: [],
  message: '',
  startGame: vi.fn(),
  continueSession: vi.fn(),
  discardSession: vi.fn(),
  importSession: vi.fn(),
};

describe('Welcome', () => {
  it('renders every level and the complete preview', () => {
    const setDifficulty = vi.fn();
    render(
      <Welcome
        {...baseProps}
        difficulty="hard"
        setDifficulty={setDifficulty}
        message="Ready"
      />,
    );

    const selected = screen.getByRole('button', { name: 'Hard' });
    expect(selected.getAttribute('aria-pressed')).toBe('true');
    fireEvent.click(screen.getByRole('button', { name: 'Evil' }));
    expect(setDifficulty).toHaveBeenCalledWith('evil');
    expect(document.querySelector('.board-preview')?.children).toHaveLength(
      PREVIEW_PUZZLE.length,
    );
    expect(screen.getByText('Ready')).toBeTruthy();
  });

  it.each([
    ['checking', false, 'Play Easy', true],
    ['offline', false, 'Play Easy', true],
    ['online', true, 'Preparing puzzle…', true],
    ['online', false, 'Play Easy', false],
  ] as const)(
    'controls starting for connection=%s busy=%s',
    (connection, busy, label, disabled) => {
      const startGame = vi.fn();
      render(
        <Welcome
          {...baseProps}
          connection={connection}
          busy={busy}
          startGame={startGame}
        />,
      );
      const button = screen.getByRole('button', { name: new RegExp(label) });
      expect((button as HTMLButtonElement).disabled).toBe(disabled);
      fireEvent.click(button);
      expect(startGame).toHaveBeenCalledTimes(disabled ? 0 : 1);
    },
  );

  it('resumes and explicitly deletes saved games without technical metadata', () => {
    const continueSession = vi.fn();
    const discardSession = vi.fn();
    render(
      <Welcome
        {...baseProps}
        continueSession={continueSession}
        discardSession={discardSession}
        savedSessions={[
          {
            id: 'saved-1',
            revision: 7,
            status: 'in-progress',
            updated_at: '2026-09-14T20:00:00Z',
            recovered: true,
          },
        ]}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Your recent games' }),
    ).toBeTruthy();
    expect(screen.getByText('In progress')).toBeTruthy();
    expect(screen.getByText(/Last played/)).toBeTruthy();
    expect(screen.queryByText(/Revision/)).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: /Resume game/ }));
    expect(continueSession).toHaveBeenCalledWith('saved-1');
    fireEvent.click(screen.getByRole('button', { name: /Delete game last/ }));
    expect(discardSession).not.toHaveBeenCalled();
    expect(screen.getByText('Delete this game?')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Delete game' }));
    expect(discardSession).toHaveBeenCalledWith('saved-1');
  });

  it('offers a view action for completed games', () => {
    render(
      <Welcome
        {...baseProps}
        savedSessions={[
          {
            id: 'solved-1',
            revision: 12,
            status: 'solved',
            updated_at: '2026-09-14T20:00:00Z',
            recovered: true,
          },
        ]}
      />,
    );

    expect(screen.getByText('Completed')).toBeTruthy();
    expect(screen.getByRole('button', { name: /View game/ })).toBeTruthy();
  });

  it('passes an imported JSON file to the session handler', () => {
    const importSession = vi.fn();
    render(<Welcome {...baseProps} importSession={importSession} />);
    const document = new File(['{}'], 'puzzle.json', {
      type: 'application/json',
    });
    fireEvent.change(screen.getByLabelText('Choose a saved Sudoku game file'), {
      target: { files: [document] },
    });
    expect(importSession).toHaveBeenCalledWith(document);
  });
});

// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PREVIEW_PUZZLE } from '../presentation';
import { Welcome } from './Welcome';

describe('Welcome', () => {
  it('renders every level and the complete preview', () => {
    const setDifficulty = vi.fn();
    render(
      <Welcome
        difficulty="hard"
        setDifficulty={setDifficulty}
        connection="online"
        busy={false}
        message="Ready"
        startGame={vi.fn()}
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
          difficulty="easy"
          setDifficulty={vi.fn()}
          connection={connection}
          busy={busy}
          message=""
          startGame={startGame}
        />,
      );
      const button = screen.getByRole('button', { name: new RegExp(label) });
      expect((button as HTMLButtonElement).disabled).toBe(disabled);
      fireEvent.click(button);
      expect(startGame).toHaveBeenCalledTimes(disabled ? 0 : 1);
    },
  );
});

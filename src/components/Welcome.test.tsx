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
        preparingDifficulty={undefined}
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
    expect(screen.getByText('New puzzle')).toBeTruthy();
    expect(
      screen.getByRole('heading', { name: 'Choose your difficulty' }),
    ).toBeTruthy();
    expect(
      screen.getByText(/Pick a level, then start when you're ready\./),
    ).toBeTruthy();
    expect(screen.getByRole('group', { name: 'Difficulty' })).toBeTruthy();
    expect(screen.getByText('Ready')).toBeTruthy();
  });

  it('omits the idle message surface when there is no actionable status', () => {
    render(
      <Welcome
        difficulty="easy"
        setDifficulty={vi.fn()}
        connection="online"
        busy={false}
        preparingDifficulty={undefined}
        message=""
        startGame={vi.fn()}
      />,
    );

    expect(document.querySelector('.welcome-message')).toBeNull();
  });

  it.each([
    ['checking', false, undefined, 'Start Easy puzzle', true],
    ['offline', false, undefined, 'Start Easy puzzle', true],
    ['online', true, undefined, 'Start Easy puzzle', true],
    ['online', true, 'easy', 'Starting Easy puzzle…', true],
    ['online', false, undefined, 'Start Easy puzzle', false],
  ] as const)(
    'controls starting for connection=%s busy=%s preparation=%s',
    (connection, busy, preparingDifficulty, label, disabled) => {
      const startGame = vi.fn();
      render(
        <Welcome
          difficulty="easy"
          setDifficulty={vi.fn()}
          connection={connection}
          busy={busy}
          preparingDifficulty={preparingDifficulty}
          message=""
          startGame={startGame}
        />,
      );
      const button = screen.getByRole('button', { name: new RegExp(label) });
      expect((button as HTMLButtonElement).disabled).toBe(disabled);
      fireEvent.click(button);
      expect(startGame).toHaveBeenCalledTimes(disabled ? 0 : 1);
      if (preparingDifficulty) {
        expect(button.getAttribute('aria-busy')).toBe('true');
        expect(
          (screen.getByRole('button', { name: 'Hard' }) as HTMLButtonElement)
            .disabled,
        ).toBe(true);
      }
    },
  );
});

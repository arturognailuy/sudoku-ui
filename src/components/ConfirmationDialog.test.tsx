// @vitest-environment jsdom
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ConfirmationDialog } from './ConfirmationDialog';

describe('ConfirmationDialog', () => {
  it('renders and confirms returning home', async () => {
    const dismiss = vi.fn();
    const confirm = vi.fn();
    render(
      <ConfirmationDialog
        action="home"
        nextDifficulty="easy"
        setNextDifficulty={vi.fn()}
        dismiss={dismiss}
        confirm={confirm}
      />,
    );

    expect(screen.getByRole('alertdialog')).toHaveAccessibleName(
      'Leave this puzzle',
    );
    expect(screen.queryByRole('group')).not.toBeInTheDocument();
    const cancel = screen.getByRole('button', { name: 'Keep playing' });
    await waitFor(() => expect(cancel).toHaveFocus());
    fireEvent.click(
      screen.getByRole('button', { name: 'Return to front page' }),
    );
    expect(confirm).toHaveBeenCalledOnce();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(dismiss).toHaveBeenCalledOnce();
  });

  it('chooses a new level and traps focus through every action', async () => {
    const setNextDifficulty = vi.fn();
    const dismiss = vi.fn();
    render(
      <ConfirmationDialog
        action="new-puzzle"
        nextDifficulty="medium"
        setNextDifficulty={setNextDifficulty}
        dismiss={dismiss}
        confirm={vi.fn()}
      />,
    );

    expect(
      screen.getByRole('group', { name: 'Choose a level for the new puzzle' }),
    ).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Expert' }));
    expect(setNextDifficulty).toHaveBeenCalledWith('expert');
    const cancel = screen.getByRole('button', { name: 'Keep playing' });
    await waitFor(() => expect(cancel).toHaveFocus());
    fireEvent.keyDown(window, { key: 'Tab' });
    expect(
      screen.getByRole('button', { name: 'Start new Medium puzzle' }),
    ).toHaveFocus();
    fireEvent.keyDown(window, { key: 'Tab' });
    expect(screen.getByRole('button', { name: 'Easy' })).toHaveFocus();
    fireEvent.keyDown(window, { key: 'Tab', shiftKey: true });
    expect(
      screen.getByRole('button', { name: 'Start new Medium puzzle' }),
    ).toHaveFocus();
  });
});

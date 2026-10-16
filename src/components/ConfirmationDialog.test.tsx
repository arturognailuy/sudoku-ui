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
        replay={vi.fn()}
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
    const replay = vi.fn();
    render(
      <ConfirmationDialog
        action="new-puzzle"
        nextDifficulty="medium"
        setNextDifficulty={setNextDifficulty}
        dismiss={dismiss}
        confirm={vi.fn()}
        replay={replay}
      />,
    );

    expect(
      screen.getByRole('group', { name: 'Level for the different puzzle' }),
    ).toBeTruthy();
    const choices = screen.getAllByRole('region');
    expect(choices).toHaveLength(2);
    expect(choices[0]).toHaveAccessibleName('Replay this puzzle');
    expect(choices[1]).toHaveAccessibleName('Play a different puzzle');
    fireEvent.click(screen.getByRole('button', { name: 'Expert' }));
    expect(setNextDifficulty).toHaveBeenCalledWith('expert');
    const cancel = screen.getByRole('button', { name: 'Cancel' });
    await waitFor(() => expect(cancel).toHaveFocus());
    fireEvent.keyDown(window, { key: 'Tab' });
    expect(
      screen.getByRole('button', { name: 'Replay this puzzle' }),
    ).toHaveFocus();
    fireEvent.click(screen.getByRole('button', { name: 'Replay this puzzle' }));
    expect(replay).toHaveBeenCalledOnce();
    fireEvent.keyDown(window, { key: 'Tab' });
    expect(screen.getByRole('button', { name: 'Easy' })).toHaveFocus();
    fireEvent.keyDown(window, { key: 'Tab', shiftKey: true });
    expect(
      screen.getByRole('button', { name: 'Replay this puzzle' }),
    ).toHaveFocus();
  });
});

// @vitest-environment jsdom
import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { Digit } from '../api/types';
import { makeSession, makeSnapshot } from '../test/fixtures';
import { GameControls } from './GameControls';

const baseProps = () => ({
  session: makeSession(),
  difficulty: 'hard' as const,
  elapsedSeconds: 125,
  message: 'Move saved.',
  retryAction: { current: vi.fn() },
  busy: false,
  paused: false,
  canUndo: false,
  canRedo: false,
  notesMode: false,
  setNotesMode: vi.fn(),
  automaticCandidates: false,
  setAutomaticCandidates: vi.fn(),
  completedDigits: new Set<Digit>(),
  selectedCellBlocksDigitInput: false,
  selectedCellCanErase: true,
  enterDigit: vi.fn(),
  clearSelected: vi.fn(),
  applyAction: vi.fn().mockResolvedValue(undefined),
  startGame: vi.fn(),
  leaveGame: vi.fn(),
  completionHeading: createRef<HTMLHeadingElement>(),
});

describe('GameControls', () => {
  it('routes number, notes, erase, history, hint, and retry controls', () => {
    const props = baseProps();
    render(<GameControls {...props} retryLabel="Retry move" />);

    expect(screen.getByText('Move saved.')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'Enter 4' }));
    expect(props.enterDigit).toHaveBeenCalledWith(4);
    fireEvent.click(screen.getByRole('button', { name: /Notes off/ }));
    expect(props.setNotesMode).toHaveBeenCalledOnce();
    fireEvent.click(
      screen.getByRole('button', { name: /Automatic candidates off/ }),
    );
    expect(props.setAutomaticCandidates).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: /Erase/ }));
    expect(props.clearSelected).toHaveBeenCalledOnce();
    fireEvent.click(screen.getByRole('button', { name: /Reveal a hint/ }));
    expect(props.applyAction).toHaveBeenCalledWith({ kind: 'apply-hint' });
    fireEvent.click(screen.getByRole('button', { name: 'Retry move' }));
    expect(props.retryAction.current).toHaveBeenCalledOnce();
    expect(screen.getByRole('button', { name: /Undo/ })).toBeDisabled();
    expect(screen.getByRole('button', { name: /Redo/ })).toBeDisabled();
    fireEvent.click(screen.getByText('Keyboard shortcuts'));
    expect(screen.getByText('Pause or resume')).toBeVisible();
    expect(screen.getByText('Undo', { selector: 'dt' })).toBeVisible();
    expect(screen.getByText('Redo', { selector: 'dt' })).toBeVisible();
  });

  it('accepts rapid touch releases once and suppresses delayed compatibility clicks', () => {
    vi.useFakeTimers();
    const props = baseProps();
    render(<GameControls {...props} notesMode />);
    const noteFour = screen.getByRole('button', {
      name: 'Add or remove note 4',
    });
    const noteFive = screen.getByRole('button', {
      name: 'Add or remove note 5',
    });

    fireEvent.pointerDown(noteFour, { pointerType: 'touch' });
    expect(props.enterDigit).not.toHaveBeenCalled();
    fireEvent.pointerUp(noteFour, { pointerType: 'touch' });
    fireEvent.pointerDown(noteFive, { pointerType: 'touch' });
    fireEvent.pointerUp(noteFive, { pointerType: 'touch' });
    expect(props.enterDigit).toHaveBeenNthCalledWith(1, 4);
    expect(props.enterDigit).toHaveBeenNthCalledWith(2, 5);

    vi.advanceTimersByTime(300);
    fireEvent.click(noteFour, { detail: 0, clientX: 0, clientY: 0 });
    fireEvent.click(noteFive, { detail: 0, clientX: 0, clientY: 0 });

    expect(props.enterDigit).toHaveBeenNthCalledWith(1, 4);
    expect(props.enterDigit).toHaveBeenNthCalledWith(2, 5);
    expect(props.enterDigit).toHaveBeenCalledTimes(2);

    fireEvent.click(noteFour, { detail: 0 });
    expect(props.enterDigit).toHaveBeenNthCalledWith(3, 4);

    fireEvent.pointerUp(noteFive, { pointerType: 'touch' });
    fireEvent.pointerCancel(noteFive, { pointerType: 'touch' });
    fireEvent.click(noteFive, { detail: 1 });
    expect(props.enterDigit).toHaveBeenNthCalledWith(4, 5);
    expect(props.enterDigit).toHaveBeenNthCalledWith(5, 5);

    fireEvent.pointerUp(noteFour, { pointerType: 'pen' });
    vi.advanceTimersByTime(1_000);
    fireEvent.click(noteFour, { detail: 1 });
    expect(props.enterDigit).toHaveBeenNthCalledWith(6, 4);
    expect(props.enterDigit).toHaveBeenNthCalledWith(7, 4);
  });

  it('labels notes mode and disables locally blocked digits', () => {
    const props = baseProps();
    render(
      <GameControls
        {...props}
        notesMode
        completedDigits={new Set<Digit>([2])}
        selectedCellBlocksDigitInput
        selectedCellCanErase={false}
      />,
    );

    expect(screen.getByLabelText('Number pad, notes mode')).toHaveClass(
      'number-pad--notes',
    );
    expect(
      screen.getByRole('button', { name: 'Add or remove note 1' }),
    ).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'Add or remove note 2' }),
    ).toBeDisabled();
    expect(screen.getByRole('button', { name: /Erase/ })).toBeDisabled();
  });

  it('renders solved actions with the final elapsed time', () => {
    const props = baseProps();
    const snapshot = makeSnapshot({ status: 'solved' });
    render(
      <GameControls
        {...props}
        session={makeSession({ snapshot })}
        elapsedSeconds={3661}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Solved in 1:01:01' }),
    ).toBeTruthy();
    expect(screen.queryByLabelText('Number pad')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Play another Hard' }));
    expect(props.startGame).toHaveBeenCalledWith('hard');
    fireEvent.click(
      screen.getByRole('button', { name: 'Choose another level' }),
    );
    expect(props.leaveGame).toHaveBeenCalledOnce();
  });

  it('enables snapshot-backed undo and redo when available', () => {
    const props = baseProps();
    const snapshot = makeSnapshot({ can_undo: true, can_redo: true });
    render(
      <GameControls
        {...props}
        session={makeSession({ snapshot })}
        canUndo
        canRedo
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: /Undo/ }));
    fireEvent.click(screen.getByRole('button', { name: /Redo/ }));
    expect(props.applyAction).toHaveBeenNthCalledWith(1, { kind: 'undo' });
    expect(props.applyAction).toHaveBeenNthCalledWith(2, { kind: 'redo' });
  });
});

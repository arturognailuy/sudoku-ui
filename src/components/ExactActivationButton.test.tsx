// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ExactActivationButton } from './ExactActivationButton';

describe('ExactActivationButton', () => {
  it('uses the canonical click for keyboard and mouse activation', () => {
    const onActivate = vi.fn();
    render(
      <ExactActivationButton onActivate={onActivate}>
        Enter 4
      </ExactActivationButton>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Enter 4' }));
    fireEvent.click(screen.getByRole('button', { name: 'Enter 4' }));

    expect(onActivate).toHaveBeenCalledTimes(2);
  });

  it('commits touch and pen releases once and suppresses compatibility clicks', () => {
    vi.useFakeTimers();
    const onActivate = vi.fn();
    render(
      <ExactActivationButton onActivate={onActivate}>
        Enter 4
      </ExactActivationButton>,
    );
    const button = screen.getByRole('button', { name: 'Enter 4' });

    fireEvent.pointerDown(button, { pointerType: 'touch' });
    expect(onActivate).not.toHaveBeenCalled();
    fireEvent.pointerUp(button, { pointerType: 'touch' });
    fireEvent.click(button, { detail: 0, clientX: 0, clientY: 0 });
    expect(onActivate).toHaveBeenCalledTimes(1);

    fireEvent.pointerUp(button, { pointerType: 'pen' });
    vi.advanceTimersByTime(1_000);
    fireEvent.click(button, { detail: 1 });
    expect(onActivate).toHaveBeenCalledTimes(3);
  });

  it('falls back to touch release when pointer metadata is unavailable', () => {
    const onActivate = vi.fn();
    render(
      <ExactActivationButton onActivate={onActivate}>
        Enter 4
      </ExactActivationButton>,
    );
    const button = screen.getByRole('button', { name: 'Enter 4' });

    fireEvent.pointerUp(button, { pointerType: '' });
    fireEvent.touchEnd(button);
    fireEvent.click(button);

    expect(onActivate).toHaveBeenCalledTimes(1);
  });

  it('does not duplicate a recognized touch across pointer, touch, and click events', () => {
    const onActivate = vi.fn();
    render(
      <ExactActivationButton onActivate={onActivate}>
        Enter 4
      </ExactActivationButton>,
    );
    const button = screen.getByRole('button', { name: 'Enter 4' });

    fireEvent.pointerUp(button, { pointerType: 'touch' });
    fireEvent.touchEnd(button);
    fireEvent.click(button);

    expect(onActivate).toHaveBeenCalledTimes(1);
  });

  it('cancels suppression when the pointer sequence is cancelled', () => {
    const onActivate = vi.fn();
    render(
      <ExactActivationButton onActivate={onActivate}>
        Enter 4
      </ExactActivationButton>,
    );
    const button = screen.getByRole('button', { name: 'Enter 4' });

    fireEvent.pointerUp(button, { pointerType: 'touch' });
    fireEvent.pointerCancel(button, { pointerType: 'touch' });
    fireEvent.click(button);

    expect(onActivate).toHaveBeenCalledTimes(2);
  });
});

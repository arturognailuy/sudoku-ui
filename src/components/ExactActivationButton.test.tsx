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

    fireEvent.touchStart(button);
    expect(onActivate).not.toHaveBeenCalled();
    fireEvent.touchEnd(button);
    fireEvent.click(button, { detail: 0, clientX: 0, clientY: 0 });
    expect(onActivate).toHaveBeenCalledTimes(1);

    fireEvent.pointerUp(button, { pointerType: 'pen' });
    vi.advanceTimersByTime(1_000);
    fireEvent.click(button, { detail: 1 });
    expect(onActivate).toHaveBeenCalledTimes(3);
  });

  it('does not depend on pointer metadata for rapid adjacent touch releases', () => {
    const onActivate = vi.fn();
    render(
      <>
        {[1, 2, 3].map((digit) => (
          <ExactActivationButton
            key={digit}
            onActivate={() => onActivate(digit)}
          >
            Enter {digit}
          </ExactActivationButton>
        ))}
      </>,
    );

    for (const digit of [1, 2, 3]) {
      const button = screen.getByRole('button', { name: `Enter ${digit}` });
      fireEvent.touchEnd(button);
    }

    expect(onActivate.mock.calls).toEqual([[1], [2], [3]]);
  });

  it('cancels suppression when the touch sequence is cancelled', () => {
    const onActivate = vi.fn();
    render(
      <ExactActivationButton onActivate={onActivate}>
        Enter 4
      </ExactActivationButton>,
    );
    const button = screen.getByRole('button', { name: 'Enter 4' });

    fireEvent.touchEnd(button);
    fireEvent.touchCancel(button);
    fireEvent.click(button);

    expect(onActivate).toHaveBeenCalledTimes(2);
  });
});

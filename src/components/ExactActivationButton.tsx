import { useRef } from 'react';
import type { ComponentPropsWithoutRef, PointerEvent, TouchEvent } from 'react';

const COMPATIBILITY_CLICK_WINDOW_MS = 1_000;

type ExactActivationButtonProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'onClick' | 'onPointerUp' | 'onPointerCancel' | 'onTouchEnd' | 'onTouchCancel'
> & {
  onActivate: () => void;
};

/**
 * Normalizes keyboard, mouse, touch, and pen input into one semantic action.
 * Touch and pen commit on pointer release; their first delayed compatibility
 * click is consumed so one physical activation cannot dispatch twice.
 */
export const ExactActivationButton = ({
  onActivate,
  ...buttonProps
}: ExactActivationButtonProps) => {
  const suppressCompatibilityClick = useRef(false);
  const suppressionTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const clearSuppression = () => {
    suppressCompatibilityClick.current = false;
    clearTimeout(suppressionTimer.current);
  };

  const armCompatibilityClickSuppression = () => {
    suppressCompatibilityClick.current = true;
    clearTimeout(suppressionTimer.current);
    suppressionTimer.current = setTimeout(
      clearSuppression,
      COMPATIBILITY_CLICK_WINDOW_MS,
    );
  };

  const activatePointer = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
    event.preventDefault();
    armCompatibilityClickSuppression();
    onActivate();
  };

  const activateTouchFallback = (event: TouchEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (suppressCompatibilityClick.current) return;
    armCompatibilityClickSuppression();
    onActivate();
  };

  return (
    <button
      {...buttonProps}
      type="button"
      onPointerUp={activatePointer}
      onPointerCancel={clearSuppression}
      onTouchEnd={activateTouchFallback}
      onTouchCancel={clearSuppression}
      onClick={() => {
        if (suppressCompatibilityClick.current) {
          clearSuppression();
          return;
        }
        onActivate();
      }}
    />
  );
};

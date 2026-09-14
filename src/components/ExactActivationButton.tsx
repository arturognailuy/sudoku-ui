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
 * Touch commits on touch release and pen on pointer release; their first
 * delayed compatibility click is consumed so one physical activation cannot
 * dispatch twice.
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

  const activateDirectly = (
    event: PointerEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    suppressCompatibilityClick.current = true;
    clearTimeout(suppressionTimer.current);
    suppressionTimer.current = setTimeout(
      clearSuppression,
      COMPATIBILITY_CLICK_WINDOW_MS,
    );
    onActivate();
  };

  const activatePointer = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== 'pen') return;
    activateDirectly(event);
  };

  return (
    <button
      {...buttonProps}
      type="button"
      onTouchEnd={activateDirectly}
      onTouchCancel={clearSuppression}
      onPointerUp={activatePointer}
      onPointerCancel={clearSuppression}
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

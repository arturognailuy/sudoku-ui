// @vitest-environment jsdom
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { HintPreview } from '../api/types';
import { HintPanel } from './HintPanel';

const preview: HintPreview = {
  revision: 3,
  hint: {
    protocol_version: 1,
    plan_id: 'a'.repeat(64),
    strategy: { id: 'single', display_name: 'Hidden single', grade: 'Easy' },
    summary: 'Only one value fits.',
    steps: [
      {
        id: 'observe',
        kind: 'observe',
        message: 'Look at the row.',
        marks: [],
      },
      {
        id: 'conclude',
        kind: 'conclude',
        message: 'Place the value.',
        marks: [],
      },
    ],
    conclusion: { eliminations: [] },
  },
};

describe('HintPanel', () => {
  it('navigates locally and only offers apply on the final step', () => {
    const setStepIndex = vi.fn();
    const apply = vi.fn();
    const { rerender } = render(
      <HintPanel
        preview={preview}
        stepIndex={0}
        setStepIndex={setStepIndex}
        apply={apply}
        close={vi.fn()}
        busy={false}
      />,
    );
    expect(screen.getByText('Easy strategy')).toBeVisible();
    expect(screen.getByText('Step 1 of 2')).toBeVisible();
    expect(
      screen.queryByRole('button', { name: 'Apply hint' }),
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(setStepIndex).toHaveBeenCalledWith(1);

    rerender(
      <HintPanel
        preview={preview}
        stepIndex={1}
        setStepIndex={setStepIndex}
        apply={apply}
        close={vi.fn()}
        busy={false}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Back' }));
    expect(setStepIndex).toHaveBeenCalledWith(0);
    fireEvent.click(screen.getByRole('button', { name: 'Apply hint' }));
    expect(apply).toHaveBeenCalledOnce();
    const close = vi.fn();
    rerender(
      <HintPanel
        preview={preview}
        stepIndex={1}
        setStepIndex={setStepIndex}
        apply={apply}
        close={close}
        busy={false}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(close).toHaveBeenCalledOnce();
  });
});

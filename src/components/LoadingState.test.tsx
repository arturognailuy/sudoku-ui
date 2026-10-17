// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LoadingState } from './LoadingState';

describe('LoadingState', () => {
  it('renders neutral restoration copy', () => {
    render(<LoadingState />);
    expect(screen.getByRole('status')).toHaveTextContent(
      'Loading your puzzle…',
    );
  });

  it.each([
    ['returning-home' as const, 'Returning to the front page…'],
    ['restarting-puzzle' as const, 'Restarting this puzzle…'],
  ])('names the %s transition', (transition, label) => {
    render(<LoadingState transition={transition} />);
    expect(screen.getByRole('status', { name: label })).toBeVisible();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(label);
  });

  it('names a replacement puzzle without exposing the stale board', () => {
    render(<LoadingState preparingDifficulty="expert" />);
    expect(screen.getByRole('status')).toHaveTextContent(
      'Preparing your Expert board…',
    );
    expect(screen.getByRole('heading', { level: 1 }).id).toBe(
      'game-loading-title',
    );
  });
});

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

// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest';
import { SudokuApiError } from './api/client';
import {
  ACTIVE_GAME_KEY,
  AUTOMATIC_CANDIDATES_PREFERENCE_KEY,
  DIFFICULTY_PREFERENCE_KEY,
  actionableError,
  formatElapsed,
  readActiveGame,
  readAutomaticCandidatesPreference,
  readDifficultyPreference,
  titleCase,
} from './presentation';

afterEach(() => localStorage.clear());

describe('presentation helpers', () => {
  it.each([
    [5, '0:05'],
    [125, '2:05'],
    [3661, '1:01:01'],
  ])('formats %i elapsed seconds', (seconds, expected) => {
    expect(formatElapsed(seconds)).toBe(expected);
  });

  it('reads validated presentation-only records', () => {
    localStorage.setItem(DIFFICULTY_PREFERENCE_KEY, 'evil');
    localStorage.setItem(
      AUTOMATIC_CANDIDATES_PREFERENCE_KEY,
      JSON.stringify({ sessionId: 's1', enabled: true }),
    );
    localStorage.setItem(
      ACTIVE_GAME_KEY,
      JSON.stringify({
        sessionId: 's1',
        difficulty: 'hard',
        elapsedSeconds: 10,
        paused: false,
      }),
    );
    expect(readDifficultyPreference()).toBe('evil');
    expect(readAutomaticCandidatesPreference()).toEqual({
      sessionId: 's1',
      enabled: true,
    });
    expect(readActiveGame()).toMatchObject({
      sessionId: 's1',
      difficulty: 'hard',
    });
  });

  it('falls back for invalid preferences and corrupt active games', () => {
    localStorage.setItem(DIFFICULTY_PREFERENCE_KEY, 'impossible');
    localStorage.setItem(ACTIVE_GAME_KEY, '{');
    expect(readDifficultyPreference()).toBe('easy');
    expect(readAutomaticCandidatesPreference()).toBeUndefined();
    expect(readActiveGame()).toBeUndefined();
    expect(localStorage.getItem(ACTIVE_GAME_KEY)).toBeNull();
  });

  it('turns errors into actionable player copy', () => {
    expect(
      actionableError(new SudokuApiError('offline', 0, 'network'), 'fallback'),
    ).toContain('could not be reached');
    expect(
      actionableError(new SudokuApiError('down', 503, 'server'), 'fallback'),
    ).toContain('temporarily unavailable');
    expect(
      actionableError(new SudokuApiError('bad move', 400, 'bad'), 'fallback'),
    ).toBe('bad move');
    expect(actionableError(new Error('plain'), 'fallback')).toBe('plain');
    expect(actionableError('unknown', 'fallback')).toBe('fallback');
    expect(titleCase('expert')).toBe('Expert');
  });
});

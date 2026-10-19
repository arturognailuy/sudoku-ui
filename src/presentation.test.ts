// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest';
import { SudokuApiError } from './api/client';
import {
  ACTIVE_GAME_KEY,
  CANDIDATE_VISIBILITY_PREFERENCE_KEY,
  DIFFICULTY_PREFERENCE_KEY,
  actionableError,
  formatElapsed,
  readActiveGame,
  readCandidateVisibilityPreference,
  readDifficultyPreference,
} from './presentation';
import { message } from './i18n/messages';

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
      ACTIVE_GAME_KEY,
      JSON.stringify({
        sessionId: 's1',
        difficulty: 'hard',
        elapsedSeconds: 10,
        paused: false,
      }),
    );
    expect(readDifficultyPreference()).toBe('evil');
    expect(readActiveGame()).toMatchObject({
      sessionId: 's1',
      difficulty: 'hard',
    });
  });

  it('reads only bounded per-game candidate visibility', () => {
    localStorage.setItem(
      CANDIDATE_VISIBILITY_PREFERENCE_KEY,
      JSON.stringify({
        sessionId: 's1',
        allVisible: false,
        visibleCells: ['0-0', '8-8', '0-0'],
      }),
    );
    expect(readCandidateVisibilityPreference()).toEqual({
      sessionId: 's1',
      allVisible: false,
      visibleCells: ['0-0', '8-8'],
    });

    localStorage.setItem(
      CANDIDATE_VISIBILITY_PREFERENCE_KEY,
      JSON.stringify({
        sessionId: 's1',
        allVisible: false,
        visibleCells: ['9-0'],
      }),
    );
    expect(readCandidateVisibilityPreference()).toBeUndefined();
  });

  it('falls back for invalid preferences and corrupt active games', () => {
    localStorage.setItem(DIFFICULTY_PREFERENCE_KEY, 'impossible');
    localStorage.setItem(ACTIVE_GAME_KEY, '{');
    expect(readDifficultyPreference()).toBe('easy');
    expect(readActiveGame()).toBeUndefined();
    expect(localStorage.getItem(ACTIVE_GAME_KEY)).toBeNull();
  });

  it('turns errors into typed actionable messages', () => {
    const fallback = message('error.move');
    expect(
      actionableError(new SudokuApiError('offline', 0, 'network'), fallback),
    ).toEqual(message('error.connection'));
    expect(
      actionableError(new SudokuApiError('down', 503, 'server'), fallback),
    ).toEqual(message('error.unavailable'));
    expect(
      actionableError(
        new SudokuApiError('stale revision', 409, 'revision-conflict', {
          id: 'error.revision-conflict',
          arguments: [],
          text: 'stale revision',
        }),
        fallback,
      ),
    ).toEqual(message('error.revision-conflict'));
    expect(actionableError(message('error.hintChanged'), fallback)).toEqual(
      message('error.hintChanged'),
    );
    expect(actionableError(new Error('plain'), fallback)).toEqual(fallback);
    expect(actionableError('unknown', fallback)).toEqual(fallback);
  });
});

import { SudokuApiError } from './api/client';
import type { Difficulty } from './api/types';

export const DIFFICULTIES: Difficulty[] = [
  'easy',
  'medium',
  'hard',
  'expert',
  'evil',
];

export const PREVIEW_PUZZLE =
  '.56.4.7...1.5....6.......19...9.....3.58..2...4...6...1.....93....4....22.3.1....';

export const ACTIVE_GAME_KEY = 'sudoku-ui.active-game.v1';
export const DIFFICULTY_PREFERENCE_KEY = 'sudoku-ui.difficulty.v1';

export type ConfirmationAction = 'home' | 'new-puzzle';

export interface ActiveGameRecord {
  sessionId: string;
  difficulty: Difficulty;
  elapsedSeconds: number;
  resumedAt?: number;
  paused: boolean;
}

export const readActiveGame = (): ActiveGameRecord | undefined => {
  try {
    const value = localStorage.getItem(ACTIVE_GAME_KEY);
    return value ? (JSON.parse(value) as ActiveGameRecord) : undefined;
  } catch {
    localStorage.removeItem(ACTIVE_GAME_KEY);
    return undefined;
  }
};

export const readDifficultyPreference = (): Difficulty => {
  try {
    const value = localStorage.getItem(DIFFICULTY_PREFERENCE_KEY);
    return DIFFICULTIES.includes(value as Difficulty)
      ? (value as Difficulty)
      : 'easy';
  } catch {
    return 'easy';
  }
};

export const formatElapsed = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`
    : `${minutes}:${String(remainder).padStart(2, '0')}`;
};

export const actionableError = (error: unknown, fallback: string) => {
  if (error instanceof SudokuApiError) {
    if (error.status === 0)
      return 'The game service could not be reached. Check your connection and try again.';
    if (error.status >= 500)
      return 'The game service is temporarily unavailable. Your board is safe; try again.';
    return error.message;
  }
  return error instanceof Error ? error.message : fallback;
};

export const titleCase = (value: string) =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

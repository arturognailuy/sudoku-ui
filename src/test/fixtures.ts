import type { Digit, Session, Snapshot } from '../api/types';

const valueGrid = () => Array.from({ length: 9 }, () => Array(9).fill(0));
const booleanGrid = () => Array.from({ length: 9 }, () => Array(9).fill(false));
const digitGrid = () =>
  Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => [] as Digit[]),
  );

export const makeSnapshot = (overrides: Partial<Snapshot> = {}): Snapshot => ({
  givens: valueGrid(),
  values: valueGrid(),
  invalid: booleanGrid(),
  notes: digitGrid(),
  candidates: digitGrid(),
  status: 'in-progress',
  can_undo: false,
  can_redo: false,
  ...overrides,
});

export const makeSession = (overrides: Partial<Session> = {}): Session => ({
  id: 'session-1',
  revision: 3,
  snapshot: makeSnapshot(),
  ...overrides,
});

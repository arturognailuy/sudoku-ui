export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert' | 'evil';
export type GameStatus = 'in-progress' | 'invalid' | 'solved';
export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type ValueGrid = number[][];
export type BooleanGrid = boolean[][];
export type DigitSetGrid = Digit[][][];

export interface Snapshot {
  givens: ValueGrid;
  values: ValueGrid;
  invalid: BooleanGrid;
  notes: DigitSetGrid;
  candidates: DigitSetGrid;
  status: GameStatus;
  can_undo: boolean;
  can_redo: boolean;
}

export interface Session {
  id: string;
  revision: number;
  snapshot: Snapshot;
}

export interface SessionSummary {
  id: string;
  revision: number;
  status: GameStatus;
  updated_at: string;
  recovered: boolean;
}

export interface SessionList {
  sessions: SessionSummary[];
}

export interface ApiErrorDetail {
  code: string;
  message: string;
  field?: string;
  cell?: { row: number; column: number };
}

export interface ApiErrorBody {
  error: ApiErrorDetail;
}

export type GameAction =
  | { kind: 'set-value'; row: number; column: number; value: Digit }
  | { kind: 'clear-value'; row: number; column: number }
  | { kind: 'set-notes'; row: number; column: number; values: Digit[] }
  | { kind: 'reset' | 'undo' | 'redo' | 'apply-hint' | 'repair' | 'solve' };

export interface ActionResponse {
  revision: number;
  snapshot: Snapshot;
  result: {
    action: GameAction['kind'];
    changes: unknown[];
    status: GameStatus;
    can_undo: boolean;
    can_redo: boolean;
  };
  warnings?: string[];
}

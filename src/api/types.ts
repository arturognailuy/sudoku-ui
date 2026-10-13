export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert' | 'evil';
export type GameStatus = 'in-progress' | 'invalid' | 'solved';
export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type ValueGrid = number[][];
export type BooleanGrid = boolean[][];
export type DigitSetGrid = Digit[][][];

export type HintStepKind = 'observe' | 'compare' | 'eliminate' | 'conclude';
export type HintRole = 'focus' | 'premise' | 'eliminated' | 'conclusion';
export type HintTargetKind = 'cell' | 'candidate' | 'row' | 'column' | 'box';
export type HintLinkKind = 'strong' | 'weak' | 'implication';

export interface HintTarget {
  kind: HintTargetKind;
  row?: number;
  column?: number;
  value?: Digit;
  index?: number;
}

export interface HintMark {
  target: HintTarget;
  role: HintRole;
}

export interface HintNode {
  id: string;
  target: HintTarget;
  group?: 'A' | 'B';
  order?: number;
}

export interface HintLink {
  from: string;
  to: string;
  kind: HintLinkKind;
}

export interface HintEffect {
  placement?: { row: number; column: number; value: Digit };
  eliminations: Array<{ row: number; column: number; value: Digit }>;
}

export interface HintStep {
  id: string;
  kind: HintStepKind;
  message: string;
  marks: HintMark[];
  nodes: HintNode[];
  links: HintLink[];
  effect?: HintEffect;
}

export interface HintPlan {
  plan_id: string;
  strategy: { id: string; display_name: string; grade: string };
  summary: string;
  steps: HintStep[];
  conclusion: HintEffect;
}

export interface HintPreview {
  revision: number;
  hint: HintPlan;
}

export interface Snapshot {
  givens: ValueGrid;
  values: ValueGrid;
  invalid: BooleanGrid;
  notes: DigitSetGrid;
  candidates: DigitSetGrid;
  mistakes: number;
  status: GameStatus;
  can_undo: boolean;
  can_redo: boolean;
}

export interface GameState {
  id: string;
  revision: number;
  requested_difficulty?: Difficulty;
  actual_difficulty: Difficulty;
  snapshot: Snapshot;
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
  | {
      kind: 'adopt-candidates-as-notes';
      row: number;
      column: number;
      value: Digit;
    }
  | { kind: 'apply-hint'; plan_id: string }
  | { kind: 'reset' | 'undo' | 'redo' | 'repair' | 'solve' };

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

export interface GuestGame {
  document: string;
  revision: number;
  actual_difficulty: Difficulty;
  snapshot: Snapshot;
}

export interface GuestActionResponse extends GuestGame {
  result: ActionResponse['result'];
}

export interface Account {
  email: string;
  display_name: string;
  csrf_token: string;
}

export interface AccountGame {
  id: string;
  revision: number;
  actual_difficulty: Difficulty;
  elapsed_seconds: number;
  snapshot: Snapshot;
}

export interface AccountGameSummary {
  id: string;
  revision: number;
  actual_difficulty: Difficulty;
  status: GameStatus;
  elapsed_seconds: number;
  updated_at: string;
}

export interface AccountGameList {
  games: AccountGameSummary[];
}

export interface AccountActionResponse {
  game: AccountGame;
  result: ActionResponse['result'];
}

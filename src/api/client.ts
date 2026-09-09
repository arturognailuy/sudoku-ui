import type {
  ActionResponse,
  ApiErrorBody,
  Difficulty,
  GameAction,
  Session,
  SessionList,
} from './types';

export class SudokuApiError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(message: string, status: number, code: string) {
    super(message);
    this.name = 'SudokuApiError';
    this.status = status;
    this.code = code;
  }
}

export interface SudokuApiClientOptions {
  baseUrl?: string;
  fetch?: typeof fetch;
}

export class SudokuApiClient {
  private readonly baseUrl: string;
  private readonly fetcher: typeof fetch;

  constructor(options: SudokuApiClientOptions = {}) {
    this.baseUrl = (options.baseUrl ?? '').replace(/\/$/, '');
    this.fetcher = options.fetch ?? globalThis.fetch.bind(globalThis);
  }

  async health(): Promise<boolean> {
    const response = await this.fetcher(`${this.baseUrl}/healthz`);
    return response.ok;
  }

  async listSessions(): Promise<SessionList> {
    return this.request<SessionList>('/api/v1/sessions');
  }

  async createSession(difficulty: Difficulty): Promise<Session> {
    return this.request<Session>('/api/v1/sessions', {
      method: 'POST',
      body: JSON.stringify({ source: { kind: 'difficulty', difficulty } }),
    });
  }

  async getSession(sessionId: string): Promise<Session> {
    return this.request<Session>(
      `/api/v1/sessions/${encodeURIComponent(sessionId)}`,
    );
  }

  async applyAction(
    session: Session,
    action: GameAction,
  ): Promise<ActionResponse> {
    return this.request<ActionResponse>(
      `/api/v1/sessions/${encodeURIComponent(session.id)}/actions`,
      {
        method: 'POST',
        body: JSON.stringify({
          expected_revision: session.revision,
          ...action,
        }),
      },
    );
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const headers = new Headers(init.headers);
    if (init.body !== undefined)
      headers.set('Content-Type', 'application/json');

    const response = await this.fetcher(`${this.baseUrl}${path}`, {
      ...init,
      headers,
    });
    if (!response.ok) {
      let error: ApiErrorBody | undefined;
      try {
        error = (await response.json()) as ApiErrorBody;
      } catch {
        throw new SudokuApiError(
          `Sudoku API returned HTTP ${response.status}`,
          response.status,
          'http-error',
        );
      }
      throw new SudokuApiError(
        error.error.message,
        response.status,
        error.error.code,
      );
    }
    return (await response.json()) as T;
  }
}

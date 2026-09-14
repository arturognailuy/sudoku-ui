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

  async deleteSession(sessionId: string): Promise<void> {
    await this.request<void>(
      `/api/v1/sessions/${encodeURIComponent(sessionId)}`,
      { method: 'DELETE' },
    );
  }

  async importSession(document: Blob): Promise<Session> {
    return this.request<Session>('/api/v1/sessions/import', {
      method: 'POST',
      headers: { 'Content-Type': 'application/vnd.sudoku.session+json' },
      body: document,
    });
  }

  async exportSession(sessionId: string): Promise<Blob> {
    return this.request<Blob>(
      `/api/v1/sessions/${encodeURIComponent(sessionId)}/export`,
      {},
      'blob',
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

  private async request<T>(
    path: string,
    init: RequestInit = {},
    responseType: 'json' | 'blob' = 'json',
  ): Promise<T> {
    const headers = new Headers(init.headers);
    if (init.body !== undefined && !headers.has('Content-Type'))
      headers.set('Content-Type', 'application/json');

    let response: Response;
    try {
      response = await this.fetcher(`${this.baseUrl}${path}`, {
        ...init,
        headers,
      });
    } catch {
      throw new SudokuApiError(
        'The game service could not be reached.',
        0,
        'network-error',
      );
    }
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
    if (response.status === 204) return undefined as T;
    return (
      responseType === 'blob' ? await response.blob() : await response.json()
    ) as T;
  }
}

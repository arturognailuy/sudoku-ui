import type {
  Account,
  AccountActionResponse,
  AccountGame,
  AccountGameList,
  ActionResponse,
  ApiErrorBody,
  Difficulty,
  GameAction,
  GuestActionResponse,
  GuestGame,
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
    this.baseUrl = (options.baseUrl ?? import.meta.env.BASE_URL).replace(
      /\/$/,
      '',
    );
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

  async createGuestGame(difficulty: Difficulty): Promise<GuestGame> {
    return this.request<GuestGame>('/api/v1/guest/games', {
      method: 'POST',
      body: JSON.stringify({ source: { kind: 'difficulty', difficulty } }),
    });
  }

  async applyGuestAction(
    game: GuestGame,
    action: GameAction,
  ): Promise<GuestActionResponse> {
    return this.request<GuestActionResponse>('/api/v1/guest/games/actions', {
      method: 'POST',
      body: JSON.stringify({
        document: game.document,
        action: { expected_revision: game.revision, ...action },
      }),
    });
  }

  googleLoginUrl(returnTo: string): string {
    const query = new URLSearchParams({ return_to: returnTo });
    return `${this.baseUrl}/api/v1/auth/google/start?${query.toString()}`;
  }

  async getCurrentAccount(): Promise<Account> {
    return this.request<Account>('/api/v1/account');
  }

  async logout(csrfToken: string): Promise<void> {
    await this.requestVoid('/api/v1/auth/logout', this.csrfMutation(csrfToken));
  }

  async revokeAccountSessions(csrfToken: string): Promise<void> {
    await this.requestVoid(
      '/api/v1/account/sessions/revoke',
      this.csrfMutation(csrfToken),
    );
  }

  async deleteCurrentAccount(csrfToken: string): Promise<void> {
    await this.requestVoid('/api/v1/account', {
      ...this.csrfMutation(csrfToken),
      method: 'DELETE',
    });
  }

  async listAccountGames(): Promise<AccountGameList> {
    return this.request<AccountGameList>('/api/v1/account/games');
  }

  async createAccountGame(
    difficulty: Difficulty,
    csrfToken: string,
  ): Promise<AccountGame> {
    return this.request<AccountGame>('/api/v1/account/games', {
      ...this.csrfMutation(csrfToken),
      body: JSON.stringify({ source: { kind: 'difficulty', difficulty } }),
    });
  }

  async claimGuestGame(
    document: string,
    csrfToken: string,
  ): Promise<AccountGame> {
    return this.request<AccountGame>('/api/v1/account/games/claim', {
      ...this.csrfMutation(csrfToken),
      body: JSON.stringify({ document }),
    });
  }

  async getAccountGame(accountGameId: string): Promise<AccountGame> {
    return this.request<AccountGame>(
      `/api/v1/account/games/${encodeURIComponent(accountGameId)}`,
    );
  }

  async applyAccountGameAction(
    game: AccountGame,
    action: GameAction,
    csrfToken: string,
  ): Promise<AccountActionResponse> {
    return this.request<AccountActionResponse>(
      `/api/v1/account/games/${encodeURIComponent(game.id)}/actions`,
      {
        ...this.csrfMutation(csrfToken),
        body: JSON.stringify({ expected_revision: game.revision, ...action }),
      },
    );
  }

  async deleteAccountGame(
    accountGameId: string,
    csrfToken: string,
  ): Promise<void> {
    await this.requestVoid(
      `/api/v1/account/games/${encodeURIComponent(accountGameId)}`,
      { ...this.csrfMutation(csrfToken), method: 'DELETE' },
    );
  }

  private csrfMutation(csrfToken: string): RequestInit {
    return {
      method: 'POST',
      headers: { 'X-Sudoku-CSRF': csrfToken },
    };
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const response = await this.fetchResponse(path, init);
    return (await response.json()) as T;
  }

  private async requestVoid(path: string, init: RequestInit): Promise<void> {
    await this.fetchResponse(path, init);
  }

  private async fetchResponse(
    path: string,
    init: RequestInit = {},
  ): Promise<Response> {
    const headers = new Headers(init.headers);
    if (init.body !== undefined)
      headers.set('Content-Type', 'application/json');

    let response: Response;
    try {
      response = await this.fetcher(`${this.baseUrl}${path}`, {
        ...init,
        credentials: init.credentials ?? 'same-origin',
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
    return response;
  }
}

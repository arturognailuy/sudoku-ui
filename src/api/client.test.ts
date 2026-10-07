import { describe, expect, it, vi } from 'vitest';
import { SudokuApiClient, SudokuApiError } from './client';

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

describe('SudokuApiClient', () => {
  it('creates a difficulty session with the canonical request shape', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse({ id: 'session-id', revision: 0, snapshot: {} }),
      );
    const client = new SudokuApiClient({
      baseUrl: 'https://example.test/',
      fetch: fetcher,
    });
    await client.createSession('hard');
    expect(fetcher).toHaveBeenCalledWith(
      'https://example.test/api/v1/sessions',
      expect.objectContaining({ method: 'POST' }),
    );
    const request = fetcher.mock.calls[0]?.[1];
    expect(JSON.parse(String(request?.body))).toEqual({
      source: { kind: 'difficulty', difficulty: 'hard' },
    });
  });

  it('keeps API requests inside an explicit path-prefix mount', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse({ id: 'session-id', revision: 0, snapshot: {} }),
      );
    const client = new SudokuApiClient({
      baseUrl: '/sudoku/',
      fetch: fetcher,
    });
    await client.createSession('easy');
    expect(fetcher.mock.calls[0]?.[0]).toBe('/sudoku/api/v1/sessions');
  });

  it('adds the current revision to an action', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse({ revision: 8, snapshot: {}, result: {} }),
      );
    const client = new SudokuApiClient({ fetch: fetcher });
    await client.applyAction(
      {
        id: 'session/id',
        revision: 7,
        actual_difficulty: 'easy',
        snapshot: {} as never,
      },
      { kind: 'undo' },
    );
    expect(fetcher.mock.calls[0]?.[0]).toBe(
      '/api/v1/sessions/session%2Fid/actions',
    );
    expect(JSON.parse(String(fetcher.mock.calls[0]?.[1]?.body))).toEqual({
      expected_revision: 7,
      kind: 'undo',
    });
  });

  it('surfaces structured API errors', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse(
          { error: { code: 'revision-conflict', message: 'stale revision' } },
          409,
        ),
      );
    const client = new SudokuApiClient({ fetch: fetcher });
    await expect(client.listSessions()).rejects.toEqual(
      new SudokuApiError('stale revision', 409, 'revision-conflict'),
    );
  });

  it('normalizes transport failures into retryable API errors', async () => {
    const client = new SudokuApiClient({
      fetch: vi.fn<typeof fetch>().mockRejectedValue(new TypeError('offline')),
    });
    await expect(client.listSessions()).rejects.toEqual(
      new SudokuApiError(
        'The game service could not be reached.',
        0,
        'network-error',
      ),
    );
  });

  it('uses the sealed document and nested revisioned action for guest play', async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(
      jsonResponse({
        document: 'replacement',
        revision: 5,
        actual_difficulty: 'hard',
        snapshot: {},
        result: {},
      }),
    );
    const client = new SudokuApiClient({ fetch: fetcher });

    await client.applyGuestAction(
      {
        document: 'sealed',
        revision: 4,
        actual_difficulty: 'hard',
        snapshot: {} as never,
      },
      { kind: 'undo' },
    );

    expect(fetcher.mock.calls[0]?.[0]).toBe('/api/v1/guest/games/actions');
    expect(JSON.parse(String(fetcher.mock.calls[0]?.[1]?.body))).toEqual({
      document: 'sealed',
      action: { expected_revision: 4, kind: 'undo' },
    });
  });

  it('builds a mount-aware Google login URL with one relative return path', () => {
    const client = new SudokuApiClient({ baseUrl: '/sudoku/' });
    expect(client.googleLoginUrl('/sudoku/game?resume=1')).toBe(
      '/sudoku/api/v1/auth/google/start?return_to=%2Fsudoku%2Fgame%3Fresume%3D1',
    );
  });

  it('sends authenticated mutations with same-origin cookies and CSRF proof', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response(null, { status: 204 }));
    const client = new SudokuApiClient({ fetch: fetcher });

    await client.logout('proof-token');

    const request = fetcher.mock.calls[0]?.[1];
    expect(fetcher.mock.calls[0]?.[0]).toBe('/api/v1/auth/logout');
    expect(request?.method).toBe('POST');
    expect(request?.credentials).toBe('same-origin');
    expect(new Headers(request?.headers).get('X-Sudoku-CSRF')).toBe(
      'proof-token',
    );
  });

  it('synchronizes account time and bulk deletion with request proof', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(jsonResponse({ id: 'game-1' }))
      .mockResolvedValueOnce(new Response(null, { status: 204 }));
    const client = new SudokuApiClient({ fetch: fetcher });

    await client.updateAccountGamePresentation('game/1', 125, 'proof-token');
    await client.deleteAllAccountGames('proof-token');

    expect(fetcher.mock.calls[0]?.[0]).toBe(
      '/api/v1/account/games/game%2F1/presentation',
    );
    expect(fetcher.mock.calls[0]?.[1]?.method).toBe('PUT');
    expect(JSON.parse(String(fetcher.mock.calls[0]?.[1]?.body))).toEqual({
      elapsed_seconds: 125,
    });
    expect(fetcher.mock.calls[1]?.[0]).toBe('/api/v1/account/games');
    expect(fetcher.mock.calls[1]?.[1]?.method).toBe('DELETE');
    expect(
      new Headers(fetcher.mock.calls[1]?.[1]?.headers).get('X-Sudoku-CSRF'),
    ).toBe('proof-token');
  });

  it('keeps account game identifiers encoded and uses authoritative revisions', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(jsonResponse({ game: {}, result: {} }));
    const client = new SudokuApiClient({ fetch: fetcher });

    await client.applyAccountGameAction(
      {
        id: 'ag/id',
        revision: 9,
        actual_difficulty: 'evil',
        elapsed_seconds: 42,
        snapshot: {} as never,
      },
      { kind: 'redo' },
      'proof-token',
    );

    expect(fetcher.mock.calls[0]?.[0]).toBe(
      '/api/v1/account/games/ag%2Fid/actions',
    );
    expect(JSON.parse(String(fetcher.mock.calls[0]?.[1]?.body))).toEqual({
      expected_revision: 9,
      kind: 'redo',
    });
  });
});

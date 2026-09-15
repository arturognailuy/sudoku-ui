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

  it('adds the current revision to an action', async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        jsonResponse({ revision: 8, snapshot: {}, result: {} }),
      );
    const client = new SudokuApiClient({ fetch: fetcher });
    await client.applyAction(
      { id: 'session/id', revision: 7, snapshot: {} as never },
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
});

import { IDBFactory } from 'fake-indexeddb';
import { describe, expect, it } from 'vitest';
import type { GuestGame } from '../api/types';
import {
  GuestGameRepository,
  type GuestGameRecord,
  UnsupportedGuestRecordError,
} from './guestGameRepository';

const guestGame = (document: string, revision: number): GuestGame => ({
  document,
  revision,
  actual_difficulty: 'hard',
  snapshot: {
    givens: [],
    values: [],
    invalid: [],
    notes: [],
    candidates: [],
    mistakes: 0,
    status: 'in-progress',
    can_undo: false,
    can_redo: false,
  },
});

const record = (document: string, revision: number): GuestGameRecord => ({
  schema_version: 1,
  game: guestGame(document, revision),
  presentation: { elapsed_seconds: 42, paused: false },
});

describe('GuestGameRepository', () => {
  it('starts empty and round-trips one guest record', async () => {
    const repository = new GuestGameRepository(new IDBFactory());

    await expect(repository.get()).resolves.toBeUndefined();
    await repository.replace(record('sealed-one', 3));

    await expect(repository.get()).resolves.toEqual(record('sealed-one', 3));
  });

  it('atomically replaces the fixed current guest instead of accumulating games', async () => {
    const repository = new GuestGameRepository(new IDBFactory());

    await repository.replace(record('sealed-one', 3));
    await repository.replace(record('sealed-two', 4));

    await expect(repository.get()).resolves.toEqual(record('sealed-two', 4));
  });

  it('clears only the current guest record', async () => {
    const repository = new GuestGameRepository(new IDBFactory());
    await repository.replace(record('sealed-one', 3));

    await repository.clear();

    await expect(repository.get()).resolves.toBeUndefined();
  });

  it('rejects unsupported records instead of inventing guest state', async () => {
    const indexedDB = new IDBFactory();
    const repository = new GuestGameRepository(indexedDB);
    await repository.replace(record('sealed-one', 3));

    const database = await openDatabase(indexedDB);
    const transaction = database.transaction('guest-game', 'readwrite');
    transaction.objectStore('guest-game').put({
      key: 'current',
      schema_version: 2,
      game: guestGame('sealed-two', 4),
      presentation: { elapsed_seconds: 1, paused: false },
    });
    await transactionDone(transaction);
    database.close();

    await expect(repository.get()).rejects.toEqual(
      new UnsupportedGuestRecordError(),
    );
  });
});

function openDatabase(indexedDB: IDBFactory): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('sudoku-ui', 1);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function transactionDone(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}

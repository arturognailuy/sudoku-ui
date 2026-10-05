import type { GuestGame } from '../api/types';

const DATABASE_NAME = 'sudoku-ui';
const DATABASE_VERSION = 1;
const STORE_NAME = 'guest-game';
const CURRENT_GUEST_KEY = 'current';

export interface GuestPresentationState {
  elapsed_seconds: number;
  paused: boolean;
  resumed_at?: number;
}

export interface GuestGameRecord {
  schema_version: 1;
  local_id: string;
  game: GuestGame;
  presentation: GuestPresentationState;
}

interface StoredGuestGameRecord extends GuestGameRecord {
  key: typeof CURRENT_GUEST_KEY;
}

export class UnsupportedGuestRecordError extends Error {
  constructor() {
    super('The saved guest game uses an unsupported format.');
    this.name = 'UnsupportedGuestRecordError';
  }
}

export class GuestGameRepository {
  private readonly indexedDB: IDBFactory;

  constructor(indexedDB: IDBFactory = globalThis.indexedDB) {
    this.indexedDB = indexedDB;
  }

  async get(): Promise<GuestGameRecord | undefined> {
    const database = await this.open();
    try {
      const stored = await requestResult(
        database
          .transaction(STORE_NAME, 'readonly')
          .objectStore(STORE_NAME)
          .get(CURRENT_GUEST_KEY),
      );
      if (stored === undefined) return undefined;
      if (!isStoredGuestGameRecord(stored))
        throw new UnsupportedGuestRecordError();
      const { key: _key, ...record } = stored;
      return record;
    } finally {
      database.close();
    }
  }

  async replace(record: GuestGameRecord): Promise<void> {
    if (!isGuestGameRecord(record)) throw new UnsupportedGuestRecordError();
    const database = await this.open();
    try {
      const transaction = database.transaction(STORE_NAME, 'readwrite');
      transaction.objectStore(STORE_NAME).put({
        ...record,
        key: CURRENT_GUEST_KEY,
      } satisfies StoredGuestGameRecord);
      await transactionDone(transaction);
    } finally {
      database.close();
    }
  }

  async clear(): Promise<void> {
    const database = await this.open();
    try {
      const transaction = database.transaction(STORE_NAME, 'readwrite');
      transaction.objectStore(STORE_NAME).delete(CURRENT_GUEST_KEY);
      await transactionDone(transaction);
    } finally {
      database.close();
    }
  }

  private open(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(STORE_NAME))
          database.createObjectStore(STORE_NAME, { keyPath: 'key' });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () =>
        reject(new Error('Guest game storage upgrade is blocked.'));
    });
  }
}

function requestResult<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
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

function isGuestGameRecord(value: unknown): value is GuestGameRecord {
  if (!isObject(value)) return false;
  if (value.schema_version !== 1) return false;
  if (!isObject(value.game) || !isObject(value.presentation)) return false;
  return (
    typeof value.local_id === 'string' &&
    value.local_id.length > 0 &&
    typeof value.game.document === 'string' &&
    typeof value.game.revision === 'number' &&
    typeof value.game.actual_difficulty === 'string' &&
    isObject(value.game.snapshot) &&
    typeof value.presentation.elapsed_seconds === 'number' &&
    Number.isFinite(value.presentation.elapsed_seconds) &&
    value.presentation.elapsed_seconds >= 0 &&
    typeof value.presentation.paused === 'boolean' &&
    (value.presentation.resumed_at === undefined ||
      (typeof value.presentation.resumed_at === 'number' &&
        Number.isFinite(value.presentation.resumed_at)))
  );
}

function isStoredGuestGameRecord(
  value: unknown,
): value is StoredGuestGameRecord {
  return (
    isObject(value) &&
    value.key === CURRENT_GUEST_KEY &&
    isGuestGameRecord(value)
  );
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

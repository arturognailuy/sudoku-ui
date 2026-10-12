import { resolve } from 'node:path';
import { defineConfig } from '@playwright/test';

const backend = resolve(process.env.SUDOKU_BACKEND_REPO ?? '../sudoku');

export default defineConfig({
  testDir: './tests/fullstack',
  timeout: 10 * 60 * 1000,
  workers: 1,
  use: { baseURL: 'http://127.0.0.1:4173' },
  webServer: [
    {
      command:
        'go run ./tools/e2e-web-server --listen 127.0.0.1:18080 --origin http://127.0.0.1:4173',
      cwd: backend,
      url: 'http://127.0.0.1:18080/healthz',
      reuseExistingServer: false,
      timeout: 120_000,
    },
    {
      command:
        'SUDOKU_API_PROXY=http://127.0.0.1:18080 npm run dev -- --host 127.0.0.1 --port 4173',
      url: 'http://127.0.0.1:4173',
      reuseExistingServer: false,
      timeout: 120_000,
    },
  ],
});

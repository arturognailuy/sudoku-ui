import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      include: [
        'src/components/**/*.{ts,tsx}',
        'src/hooks/**/*.{ts,tsx}',
        'src/presentation.ts',
      ],
      reporter: ['text', 'json-summary'],
      thresholds: {
        perFile: true,
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80,
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:8080',
      '/healthz': 'http://127.0.0.1:8080',
    },
  },
});

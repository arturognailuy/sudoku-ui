# Sudoku UI

A responsive React + TypeScript client for the authoritative [Sudoku HTTP API](https://github.com/gnailuy/sudoku). The browser owns presentation; the backend owns puzzles, sessions, revisions, validation, hints, notes, history, and recovery.

## Development

Requires Node.js 24 or a compatible current LTS release.

```sh
npm ci
npm run dev
```

Vite sends same-origin API calls to `/api/*` and health checks to `/healthz`.

## Portable deployment

Build for an origin root or an operator-selected path prefix:

```sh
npm run build
SUDOKU_MOUNT_PATH=/game npm run build
```

The generic [deployment workflow](.aidoc/workflows/test-deployment.md) and [`deploy/Caddyfile.example`](deploy/Caddyfile.example) describe same-origin static, API, health, and refresh routing. Hostnames, backend listeners, release directories, credentials, branch selection, and access policy remain operator inputs and must not be embedded in the browser bundle.

A branch preview may be replaced manually with selected development artifacts. Automatic deployment, when desired, should consume only successful trusted default-branch artifacts and should verify the staged frontend/backend pair before selection.

## Quality gates

```sh
npm run format:check
npm run lint
npm test
npm run build
npm run test:e2e
```

Start with [`AGENT.md`](AGENT.md) for project rules and [`.aidoc/INDEX.md`](.aidoc/INDEX.md) for task-specific reading chains.

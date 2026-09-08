# Sudoku UI

A responsive React + TypeScript client for the authoritative [Sudoku HTTP API](https://github.com/gnailuy/sudoku). The browser owns presentation; the backend owns puzzles, sessions, revisions, validation, hints, notes, history, and recovery.

## Development

Requires Node.js 24 or a compatible current LTS release.

```sh
npm ci
npm run dev
```

Vite sends same-origin API calls to `/api/*` and health checks to `/healthz`. Production routing is described in [the test deployment workflow](.aidoc/workflows/test-deployment.md).

## Quality gates

```sh
npm run format:check
npm run lint
npm test
npm run build
npm run test:e2e
```

Start with [`AGENT.md`](AGENT.md) for project rules and [`.aidoc/INDEX.md`](.aidoc/INDEX.md) for task-specific reading chains.

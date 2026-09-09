---
domain: Architecture
status: Active
entry_points:
  - src/App.tsx
  - src/api/client.ts
dependencies:
  - .aidoc/designs/game-experience.md
  - .aidoc/workflows/test-deployment.md
---

# Web Client Architecture

The React client presents Sudoku sessions owned by the Go HTTP API. A strict ownership boundary prevents stale browser logic from disagreeing with authoritative revisions, validation, or recovery.

## Related Docs

| Document                                           | Relationship                               |
| -------------------------------------------------- | ------------------------------------------ |
| [Game experience](../designs/game-experience.md)   | Presentation intent built on this boundary |
| [Test deployment](../workflows/test-deployment.md) | Same-origin production topology            |
| [E2E scenarios](../designs/e2e-scenarios.md)       | Boundary acceptance coverage               |

## Why the Boundary Exists

The Go engine already defines valid actions, optimistic revisions, hints, history, candidates, and durable recovery. Reimplementing those rules in React would create two game engines and make refresh, concurrency, and backend upgrades unsafe.

The browser owns only presentation concerns such as selection, keyboard focus, pause visibility, elapsed-time display, theme, and preferences. Presentation state may reference an API session but must never become a competing source of puzzle truth.

## What the Client Contains

`SudokuApiClient` is the narrow transport boundary. Its request and response types mirror the canonical OpenAPI 3.1.1 contract in `gnailuy/sudoku/api/openapi.yaml`; transport failures become `SudokuApiError` values rather than leaking fetch details through the component tree.

`App` owns the playable presentation controller: difficulty choice, active API session, selected cell, notes mode, keyboard navigation, and user-facing operation status. Every accepted action replaces the displayed revision and snapshot with the API response; revision conflicts trigger an authoritative session reload instead of replaying a stale mutation.

## Invariants

- The HTTP API MUST remain authoritative for every puzzle and gameplay mutation.
- Every action MUST include the latest observed session revision.
- A revision conflict MUST reload authoritative session data before another mutation.
- The browser MUST NOT persist an independent puzzle solution or gameplay history.
- Same-origin `/api/*` routing MUST hide backend topology from browser code.

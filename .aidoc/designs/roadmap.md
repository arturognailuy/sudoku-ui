---
domain: Designs
status: Active
entry_points:
  - vite.config.ts
  - deploy/Caddyfile.example
  - tests/app-shell.spec.ts
dependencies:
  - .aidoc/designs/deployment-hardening.md
  - .aidoc/workflows/test-deployment.md
  - .aidoc/designs/e2e-scenarios.md
  - .aidoc/designs/future-directions.md
---

# Roadmap

The active milestone adds optional Google accounts while preserving immediate guest play. The browser keeps at most one sealed guest game and automatically claims it after successful sign-in; account games gain cross-device continuity and a My games surface.

## Related Docs

| Document                                                                                        | Relationship                                           |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [User accounts](user-accounts.md)                                                               | Approved guest, sign-in, claim, and account experience |
| [Architecture](../architecture/web-client.md)                                                   | Browser/backend ownership boundary                     |
| [Game experience](game-experience.md)                                                           | Existing responsive and accessible gameplay            |
| [E2E scenarios](e2e-scenarios.md)                                                               | Maintained browser acceptance catalog                  |
| [Sudoku backend roadmap](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/roadmap.md) | Coordinated backend sequence and gates                 |

## Why Accounts Come Next

Sudoku remains immediate for new players, while optional identity adds continuity across devices. A single guest record avoids a hidden anonymous game library and makes automatic transfer after deliberate sign-in both predictable and bounded.

The browser never becomes an identity or game authority. IndexedDB stores one opaque backend-sealed guest record, the HttpOnly web session stays outside JavaScript storage, and only the backend claim response allows the browser to delete local guest state.

## Approved Delivery Sequence

1. Keep the cross-repository account designs aligned on ownership, browser storage, login return, automatic idempotent claim, deletion, retention, and failure policy.
2. Land the backend OpenAPI and identity/game-ownership implementation before the frontend adopts the new contract.
3. Route guest creation, ordered actions, recovery, timer presentation, replacement, and local deletion through the single-record IndexedDB boundary without exposing a pre-game list.
4. Add same-origin Google sign-in; after a successful return, automatically claim the one active guest game while retaining it locally until success, then confirm the save and expose My games, logout, revocation, and deletion surfaces.
5. Prove desktop and phone black-box journeys with keyboard, mouse, and touchscreen input, then stage the coordinated backend/frontend pair.
6. Remove the legacy anonymous server-session client path after acceptance; development sessions may be discarded rather than migrated.

## Maintained Delivery Gates

- Formatting, lint, unit coverage, production build, mount checks, and the complete Playwright suite remain green.
- Storage inspection proves that no provider or application token enters localStorage, sessionStorage, or IndexedDB.
- Browser acceptance proves one guest record, safe replacement, refresh recovery, automatic exactly-once claim with retained failure recovery, My games, cross-browser continuation, and deletion.
- Existing board geometry, accessibility, responsive behavior, and independent keyboard, mouse, and touchscreen journeys remain unchanged.
- Browser artifacts contain no hostname, credential, backend listener, user path, active branch, or environment topology.

Additional identity providers, shared games, collaboration, social features, scheduled browser monitoring, backup drills, and production availability objectives remain outside this development milestone.

---
domain: Designs
status: Active
entry_points:
  - tests/app-shell.spec.ts
dependencies:
  - .aidoc/architecture/web-client.md
  - .aidoc/designs/game-experience.md
---

# Browser E2E Scenarios

Black-box Playwright scenarios exercise the built browser boundary as a user would. Component and API-client tests complement these scenarios but do not replace them.

## Related Docs

| Document                                      | Relationship                |
| --------------------------------------------- | --------------------------- |
| [Architecture](../architecture/web-client.md) | Boundaries under test       |
| [Game experience](game-experience.md)         | Product behavior under test |

## Foundation Shell

**Action:** Open the app with a healthy same-origin `/healthz` response at desktop and mobile widths.

**Expected:** The product heading, service-ready status, responsive board preview using the canonical valid example from the backend repository, and intentionally disabled future gameplay entry point remain visible without overflow. The preview contains exactly 81 cells and preserves every given and blank from that puzzle.

**Automation:** `tests/app-shell.spec.ts`.

## Deferred Gameplay Coverage

The playable slice will add scenarios for new game by difficulty, value and note input, keyboard navigation, undo/redo, hint application, pause/resume, refresh recovery, stale revisions, backend errors, and solved completion. Each behavior enters this catalog in the same change that implements it.

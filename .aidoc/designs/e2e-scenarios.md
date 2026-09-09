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

## Start a Game

**Action:** Open the app with a healthy same-origin service, choose Hard, and start a game at desktop and mobile widths.

**Expected:** The request creates a difficulty-backed API session. The responsive board renders exactly 81 accessible cells, the first editable cell is selected, and the status identifies the chosen difficulty without horizontal overflow.

**Automation:** `tests/app-shell.spec.ts`.

## Enter Values and Notes

**Action:** Select an editable cell and enter a digit through the touch number pad. Select another editable cell, enable Notes, and enter a candidate.

**Expected:** Each interaction sends one typed action with the current authoritative revision. The returned value appears as player input, the note mode exposes its pressed state, and the API response enables undo without modifying givens.

**Automation:** `tests/app-shell.spec.ts`.

## Interaction Paths

Keyboard navigation, digit entry, note-mode toggle, and erase share the same action controller as pointer controls. Undo, redo, and hint availability come directly from the returned snapshot rather than browser-derived history.

## Deferred Hardening Coverage

The next hardening slice will add black-box scenarios for pause/resume, elapsed time, refresh recovery, stale revisions, backend errors, and solved completion. Each behavior enters this catalog in the same change that implements it.

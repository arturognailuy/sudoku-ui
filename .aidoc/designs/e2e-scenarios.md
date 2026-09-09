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

**Action:** Open the app with a healthy same-origin service, choose the Hard level button, and start the single primary Play Hard action at desktop and mobile widths.

**Expected:** Before play, the welcome surface renders all 81 positions from the canonical valid preview puzzle without redundant puzzle metadata and exposes the selected difficulty with pressed state. The request then creates a difficulty-backed API session. The responsive board renders exactly 81 accessible cells, the first editable cell is selected, and the status identifies the chosen difficulty without horizontal overflow. At the tested desktop and phone viewports, the complete game shell fits the available height without an unnecessary vertical scrollbar.

**Automation:** `tests/app-shell.spec.ts`.

## Enter Values and Notes

**Action:** Select an editable cell and enter a digit through the touch number pad. Enter the same value again, select another editable cell, enable Notes, and enter a candidate. Fill the ninth instance of a digit, then try that digit through both the number pad and keyboard.

**Expected:** Each state-changing interaction sends one typed action with the current authoritative revision. Re-entering the selected cell's existing value sends no request and leaves the controls stable. The returned value appears as player input, the note mode exposes its pressed state, and the API response enables undo without modifying givens. A digit shown nine times in the authoritative snapshot disables its number-pad button, and keyboard entry cannot bypass that guard.

**Automation:** `tests/app-shell.spec.ts`.

## Stable Board Geometry and State Precedence

**Action:** Measure the board and all 81 cells, enter invalid digits 1 through 5 from the keyboard, add a note, erase the value, and select a given digit at desktop and mobile widths.

**Expected:** Every board and cell bounding box remains fixed while content changes. Keyboard entry retains focus with a clean solid focus cue rather than a dotted or dashed artifact. Every tested invalid digit uses red ink plus the same complete, fixed-position marker below the glyph and exposes `aria-invalid`; the cue does not depend on text-decoration metrics, become a spellcheck wave, or add a decorative corner marker. The square gameplay board keeps corner-cell selection aligned with the grid. The selected cell is never also styled as a peer or match, peer highlighting remains observable, matching values use a quiet circular digit halo rather than a competing fill, and an empty selected cell produces no matches.

**Automation:** `tests/app-shell.spec.ts`.

## Interaction Paths

Keyboard navigation, digit entry, note-mode toggle, and erase share the same action controller as pointer controls. Undo, redo, and hint availability come directly from the returned snapshot rather than browser-derived history. The geometry and visual-state scenario runs at desktop and narrow mobile widths and asserts the rendered keyboard-focus style; reduced-motion behavior remains a CSS-level invariant.

## Deferred Hardening Coverage

The next hardening slice will add black-box scenarios for pause/resume, elapsed time, refresh recovery, stale revisions, backend errors, and solved completion. Each behavior enters this catalog in the same change that implements it.

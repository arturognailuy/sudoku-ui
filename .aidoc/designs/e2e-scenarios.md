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

**Expected:** Before play, the welcome surface renders all 81 positions from the canonical valid preview puzzle without redundant puzzle metadata, exposes the selected difficulty with pressed state, and fits a sufficiently large desktop viewport without an unnecessary vertical scrollbar. The request then creates a difficulty-backed API session. The responsive board renders exactly 81 accessible cells with no cell selected until the player interacts, and the status identifies the chosen difficulty without horizontal overflow. At the tested desktop and phone viewports, the complete game shell fits the available height without an unnecessary vertical scrollbar.

**Automation:** `tests/app-shell.spec.ts`.

## Enter Values and Notes

**Action:** Select an editable cell and enter a digit through the touch number pad. Enter the same value again, select another editable cell, enable Notes, and enter a candidate. Enter the same invalid digit in several cells, then enter it in a valid cell. Fill the ninth non-invalid instance of that digit, then try it through both the number pad and keyboard.

**Expected:** Each state-changing interaction sends one typed action with the current authoritative revision. Re-entering the selected cell's existing value sends no request and leaves the controls stable. The returned value appears as player input, the note mode exposes its pressed state, and the API response enables undo without modifying givens. Invalid duplicates do not count toward completion or block a valid entry. A digit shown nine non-invalid times in the authoritative snapshot disables its number-pad button, and keyboard entry cannot bypass that guard.

**Automation:** `tests/app-shell.spec.ts`.

## Stable Board Geometry and State Precedence

**Action:** Measure the board and all 81 cells, enter invalid digits 1 through 5 from the keyboard, add a note, erase the value, and select a given digit at desktop and mobile widths.

**Expected:** Every board and cell bounding box remains fixed while content changes. Keyboard entry retains focus with a clean solid focus cue rather than a dotted or dashed artifact. Every tested invalid digit uses red ink plus the same complete, fixed-position marker below the glyph and exposes `aria-invalid`; the cue does not depend on text-decoration metrics, become a spellcheck wave, or add a decorative corner marker. The square gameplay board keeps corner-cell selection aligned with the grid. The selected cell is never also styled as a peer or match, peer highlighting remains observable, matching values use a quiet circular digit halo rather than a competing fill, and an empty selected cell produces no matches.

**Automation:** `tests/app-shell.spec.ts`.

## Interaction Paths

Keyboard navigation, digit entry, note-mode toggle, and erase share the same action controller as pointer controls and remain available while the page has focus, even when the board does not. A new or restored board starts without a selection, clicking outside the board clears the highlight, and the first arrow key selects the first editable cell before subsequent arrows navigate normally. Arrow navigation moves DOM focus and selection together, and the selected/focused cell uses the same border treatment as pointer and touch selection rather than leaving a second focus box behind. Undo, redo, and hint availability come directly from the returned snapshot rather than browser-derived history. The geometry and visual-state scenario runs at desktop and narrow mobile widths and asserts the rendered keyboard-focus style; reduced-motion behavior remains a CSS-level invariant.

## Pause, Time, and Refresh Recovery

**Action:** Start a game, let elapsed time advance, hide and restore the page, pause, wait, refresh the page, and resume at desktop and mobile widths.

**Expected:** Hiding the page stops the timer until it is visible again without changing the explicit pause state. Pause conceals the board and stops the timer. Refresh shows a neutral loading state instead of flashing the welcome surface, reloads the opaque active session from the API, preserves paused timer state, and shows the restored authoritative board after resume.

**Automation:** `tests/app-shell.spec.ts`.

## Service Failure and Retry

**Action:** Make an otherwise valid move while the game service returns a temporary server failure, then use the offered retry.

**Expected:** The last confirmed board remains visible, the message explains that the board is safe, and the named retry sends the move again. Revision-conflict recovery continues to reload the authoritative session rather than replay stale state.

**Automation:** `tests/app-shell.spec.ts`.

## Leave and New Puzzle Confirmation

**Action:** From an active game, click the site logo, dismiss the leave confirmation, then confirm a return to the front page. Start another game, request a new puzzle, choose a different difficulty in the dialog, and confirm it.

**Expected:** Each confirmation receives focus on its safe action and traps keyboard focus. Dismissal returns focus to the initiating logo or button and keeps the unchanged board. Confirming the logo action clears the active pointer and shows the welcome surface without creating a session. The new-puzzle dialog exposes all levels and creates exactly one session at the newly selected difficulty only after confirmation.

**Automation:** `tests/app-shell.spec.ts`.

## Solved Completion

**Action:** Apply a move whose authoritative response changes the session status to solved.

**Expected:** The completion message is announced, elapsed time stops, and pause plus hint controls become unavailable.

**Automation:** `tests/app-shell.spec.ts`.

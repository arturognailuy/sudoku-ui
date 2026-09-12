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

**Action:** Open the app with a healthy same-origin service, choose a level, refresh to verify that the choice remains selected, and start the single primary Play action at desktop and mobile widths.

**Expected:** Before play, the welcome surface renders all 81 positions from the canonical valid preview puzzle without redundant puzzle metadata on desktop and portrait-tablet screens, while a small portrait phone omits the decorative preview and keeps the primary decision flow immediate. The welcome surface exposes the selected difficulty with pressed state, keeps its text readable while the pointer remains over the newly selected button, preserves that browser-only preference across refreshes, and fits a sufficiently large desktop viewport without an unnecessary vertical scrollbar. The request then creates a difficulty-backed API session. The responsive board renders exactly 81 accessible cells with no cell selected until the player interacts, and the status identifies the chosen difficulty without horizontal overflow. At the tested desktop and phone viewports, the complete game shell fits the available height without an unnecessary vertical scrollbar. The tool row uses consistent outline icons with visible labels when space permits and switches to icon-only controls on phone widths; every control retains its full accessible action name and no label wraps or escapes its button. At a short wide viewport representative of display scaling, the board and controls share a top edge while the document scrolls and keeps the footer after the complete gameplay area. Dragging one active game through wide, narrow, short, and breakpoint-adjacent viewport sizes keeps the board and cells square, prevents board/control overlap and horizontal overflow, keeps all three candidate-note rows inside each cell, and centers any height-constrained desktop board within the layout track to the left of the controls.

**Automation:** `tests/app-shell.spec.ts`.

## Enter Values and Notes

**Action:** Before selecting a cell, inspect and press an available touch number-pad digit. Select a given and try both pad and keyboard input. Then select an editable cell and enter a digit through the pad. Enter the same value again, enable Notes on that non-empty cell, and try both pad and keyboard note input. Select another empty editable cell and enter a candidate. Enter the same invalid digit in several cells, then enter it in a valid cell. Fill the ninth non-invalid instance of that digit, then try it through both the number pad and keyboard.

**Expected:** Available number-pad digits stay enabled without a board selection and pressing one prompts the player to select an editable cell without sending an API action or choosing a cell arbitrarily. Selecting a given disables every number-pad digit, and keyboard entry cannot bypass the guard. Each valid state-changing interaction sends one typed action with the current authoritative revision. Re-entering the selected cell's existing value sends no request and leaves the controls stable. Notes mode exposes its pressed state, changes the number pad to a muted note-specific treatment and accessible name, and disables every note digit while the selected cell is non-empty; keyboard entry sends no action in that state. Selecting an empty editable cell enables valid note input, and candidate digits remain legible on a phone without resizing the board. Erase is disabled with no selection, on givens, and whenever the selected editable cell has no content removable in the current mode; it becomes available when the current mode has value or note content to clear. The API response enables undo without modifying givens. Invalid duplicates do not count toward completion or block a valid entry. A digit shown nine non-invalid times in the authoritative snapshot disables its number-pad button, and keyboard entry cannot bypass that guard.

**Automation:** `tests/app-shell.spec.ts`.

## Automatic Candidates

**Action:** Start with automatic candidates disabled, enable them through the Candidates control at desktop and mobile widths, refresh the active puzzle, then start a new puzzle while observing API traffic. Include a cell with manual notes and a different API-supplied candidate set.

**Expected:** Enabling the display reveals only authoritative `snapshot.candidates`, uses a quieter visual and an explicit automatic-candidate accessible label, and sends no gameplay mutation. Manual notes take visual and accessible precedence over automatic candidates in the same cell. The browser remembers the setting when the same active puzzle is refreshed, while every newly created puzzle starts with Candidates and Notes off and the other browser-only modes at their defaults. The A key and pressed-state control change only the current puzzle's display without changing the board, revision, or history.

**Automation:** `tests/app-shell.spec.ts`.

## Stable Board Geometry and State Precedence

**Action:** Measure the board and all 81 cells, enter invalid digits 1 through 5 from the keyboard, add a note, erase the value, and select a given digit with pointer and arrow navigation at desktop and mobile widths.

**Expected:** Every board and cell bounding box remains fixed while content changes. Keyboard entry retains focus with a clean solid focus cue rather than a dotted or dashed artifact. Every tested invalid digit uses red ink plus the same complete, fixed-position marker below the glyph and exposes `aria-invalid`; the cue does not depend on text-decoration metrics, become a spellcheck wave, or add a decorative corner marker. The square gameplay board keeps corner-cell selection aligned with the grid. The selected cell is never also styled as a peer or match, peer highlighting remains observable, matching committed values and candidate notes use a quiet circular digit halo rather than a competing fill, and an empty selected cell produces no matches.

**Automation:** `tests/app-shell.spec.ts`.

## Interaction Paths

Keyboard navigation, digit entry, note-mode toggle, automatic-candidate toggle, erase, pause/resume, and standard platform Undo/Redo shortcuts share the same action controller as pointer controls and remain available while the page has focus, even when the board does not. `Ctrl`/`Cmd`+`Z` sends an authoritative undo only when the snapshot permits it; `Ctrl`/`Cmd`+`Shift`+`Z` and `Ctrl`+`Y` similarly send redo. `P` pauses and resumes while all mutation shortcuts remain blocked during pause. A native disclosure exposes the complete shortcut guide to keyboard and assistive-technology users. The 81-cell grid exposes one roving tab stop: Tab enters and selects the current cell, arrow keys move inside the grid, and the next Tab reaches the number pad without traversing every cell. Candidate notes remain visually compact while their values are included in the cell's accessible name. A new or restored board starts without a selection, clicking outside the board clears the highlight, and the first arrow key selects the first editable cell before subsequent arrows navigate normally. Arrow navigation moves DOM focus and selection together, and the selected/focused cell uses the same border treatment as pointer and touch selection rather than leaving a second focus box behind. Undo, redo, and hint availability come directly from the returned snapshot rather than browser-derived history. The geometry and visual-state scenario runs at desktop and narrow mobile widths and asserts the rendered keyboard-focus style; reduced-motion behavior remains a CSS-level invariant.

## Pause, Time, and Refresh Recovery

**Action:** Start a game, issue rapid consecutive hints while API mutations disable conflicting controls, let elapsed time advance, hide and restore the page, pause, wait, refresh the page, and resume at desktop and mobile widths.

**Expected:** Elapsed time continues across in-flight and completed API mutations without restarting its clock. Hiding the page stops the timer until it is visible again without changing the explicit pause state. Pause conceals the board and stops the timer. Refresh shows a neutral loading state instead of flashing the welcome surface, reloads the opaque active session from the API, preserves paused timer state, and shows the restored authoritative board after resume.

**Automation:** `tests/app-shell.spec.ts`.

## Service Failure and Retry

**Action:** Make an otherwise valid move while the game service returns a temporary server failure, then use the offered retry.

**Expected:** The last confirmed board remains visible, the message explains that the board is safe, and the named retry sends the move again. Revision-conflict recovery continues to reload the authoritative session rather than replay stale state.

**Automation:** `tests/app-shell.spec.ts`.

## Leave and New Puzzle Confirmation

**Action:** From an active game, click the site logo, dismiss the leave confirmation, then confirm a return to the front page. Start another game, request a new puzzle, choose a different difficulty in the dialog, confirm it while the session response is delayed, and inspect the transition.

**Expected:** Each confirmation receives focus on its safe action and traps keyboard focus. Dismissal returns focus to the initiating logo or button and keeps the unchanged board. Confirming the logo action clears the active pointer and shows the welcome surface without creating a session. The new-puzzle dialog exposes all levels and creates exactly one session at the newly selected difficulty only after confirmation. While that request is pending, a named loading state replaces the stale board and controls; the new board appears only after the API response.

**Automation:** `tests/app-shell.spec.ts`.

## Solved Completion

**Action:** Apply a move whose authoritative response changes the session status to solved.

**Expected:** The completion message is announced, elapsed time stops, and mutation controls leave the interface. Focus moves from the removed grid cell to the completion heading, whose visible focus cue and accessible name communicate the solved time. The completion panel preserves the final time and offers direct actions to start another board at the same level or return to level selection without an unnecessary confirmation.

**Automation:** `tests/app-shell.spec.ts`.

### Rapid note entry

**Action:** Select an empty editable cell, enable Notes, and press several digits faster than the debounce window. While that request is deliberately delayed, enter another digit.

**Expected:** Every note appears immediately, the first `set-notes` request carries its complete sorted set, and the later digit remains visible while that request is in flight. After the first response, a serialized second request carries the latest complete set without an intermediate rollback. Each accepted request creates one authoritative revision, while conflict or failure recovery replaces the transient draft with the backend snapshot. Empty, one-digit, and multi-digit note sets use the same wire action.

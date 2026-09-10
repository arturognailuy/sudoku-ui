---
domain: Designs
status: Active
entry_points:
  - src/App.tsx
dependencies:
  - .aidoc/architecture/web-client.md
  - .aidoc/designs/e2e-scenarios.md
---

# Game Experience

Sudoku UI aims for the speed and clarity of leading browser Sudoku products without cloning their visual identity. The experience favors a calm editorial surface, direct controls, and equivalent keyboard and touch paths.

## Related Docs

| Document                                      | Relationship                  |
| --------------------------------------------- | ----------------------------- |
| [Architecture](../architecture/web-client.md) | State ownership constraints   |
| [E2E scenarios](e2e-scenarios.md)             | Observable product acceptance |

## Why This Experience Exists

A daily puzzle should reduce cognitive overhead outside the puzzle itself. Controls stay close to the board, state changes are immediate and legible, and recovery should make interruption safe rather than surprising.

## What the Experience Provides

The welcome surface leads with one decision—difficulty—and one primary action. Familiar level buttons replace a select menu, technical backend language stays out of the player-facing copy, and the same valid 9×9 puzzle used by the backend project communicates the product honestly rather than acting as decorative art. The preview needs no explanatory metadata: the board itself carries the product meaning. Small portrait phones omit the decorative preview so the complete decision flow stays immediate and the page never suggests that a cropped board is playable; portrait tablets and wider screens retain the full preview when it has enough space to communicate the product. The playable experience provides API-backed number and note entry, erase, undo/redo, applied hints, invalid-value feedback, and solved-state messaging. Re-entering the value already present in a selected cell is a local no-op rather than a redundant API mutation, while note entry keeps its toggle behavior. A number-pad digit becomes unavailable after all nine non-invalid instances appear in the authoritative snapshot, and the same guard applies to keyboard input. Repeated invalid entries never consume that digit or block a later valid entry. The puzzle is the dominant visual object; status and tools sit in one quiet adjacent control surface on desktop and move beneath the board on narrow screens. When the viewport has enough room, the game shell and board contract to fit without unnecessary vertical scrolling; genuinely constrained screens retain normal document scrolling rather than clipping controls. The responsive board uses explicit zero-minimum row and column tracks so values, notes, focus, and validation feedback cannot resize cells.

Pause conceals the puzzle and stops its elapsed-time display without changing authoritative gameplay state. The timer also stops while the page is hidden and resumes when the page becomes visible, without changing the player's explicit pause choice. The active session pointer and timer presentation state survive refresh, while the board is always restored from the API. Initial session recovery uses a neutral loading state so the welcome surface never flashes before an active board is restored. Failed starts, moves, and restoration attempts retain the last confirmed state and offer a named retry action; revision conflicts reload the latest authoritative board. Solved games stop the timer and disable pause and hint actions.

Leaving an unfinished game through the site logo or starting another puzzle requires explicit confirmation. The current timer stops while either decision is open, Escape or the safe first action returns to the unchanged board, and only the named confirmation clears the browser's active-session pointer. The home action returns to the welcome surface without creating a session. The new-puzzle decision includes the full difficulty choice, so the player can change levels before the confirmed API session is created.

Board feedback has a deliberate visual hierarchy: the selected cell uses the only strong filled state, its row/column/box peers use one quieter but observable surface, and matching values use a restrained circular halo behind the digit instead of another full-cell fill or a competing edge mark. Empty selections produce no matching-value marks. Invalid values use red ink plus a fixed-position bar below the digit. The marker is independent of font glyph metrics, so narrow and wide digits receive the same complete cue without looking like browser spellcheck or a decorative corner ornament. Invalid grid cells also expose their state to assistive technology. Pointer, touch, and arrow-key navigation keep DOM focus and selection on the same cell, while the focus and selection borders share one visual treatment instead of leaving two competing boxes on the board. A new or restored game begins without a highlighted cell, and clicking outside the board clears the current highlight. Game keyboard controls remain available while the page is focused: the first arrow selects the first editable cell when no selection exists, and later arrows navigate normally. The gameplay board uses square corners so its rectangular selection cue never conflicts with outer corner curvature; the surrounding stage may stay softly rounded without changing grid geometry. The 3×3 boundaries remain visually dominant, and the mobile layout keeps every primary action reachable without precision pointing.

## Accessibility Constraints

Keyboard navigation and visible focus are first-class interaction paths. Motion honors reduced-motion preferences, controls expose names and state to assistive technology, and status changes use appropriate live semantics without stealing focus.

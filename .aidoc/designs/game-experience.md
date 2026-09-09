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

The welcome surface leads with one decision—difficulty—and one primary action. Familiar level buttons replace a select menu, technical backend language stays out of the player-facing copy, and the same valid 9×9 puzzle used by the backend project communicates the product honestly rather than acting as decorative art. The preview needs no explanatory metadata: the board itself carries the product meaning. The playable experience provides API-backed number and note entry, erase, undo/redo, applied hints, invalid-value feedback, and solved-state messaging. The puzzle is the dominant visual object; status and tools sit in one quiet adjacent control surface on desktop and move beneath the board on narrow screens. When the viewport has enough room, the game shell and board contract to fit without unnecessary vertical scrolling; genuinely constrained screens retain normal document scrolling rather than clipping controls. The responsive board uses explicit zero-minimum row and column tracks so values, notes, focus, and validation feedback cannot resize cells.

Pause, elapsed time, resilient refresh recovery, and richer backend failure guidance remain a separate hardening slice so the core gameplay boundary stays reviewable.

Board feedback has a deliberate visual hierarchy: the selected cell uses the only strong filled state, its row/column/box peers use one quieter but observable surface, and matching values use a restrained circular halo behind the digit instead of another full-cell fill or a competing edge mark. Empty selections produce no matching-value marks. Invalid values use red ink plus a fixed-position bar below the digit. The marker is independent of font glyph metrics, so narrow and wide digits receive the same complete cue without looking like browser spellcheck or a decorative corner ornament. Invalid grid cells also expose their state to assistive technology. Keyboard focus and selection retain their own color-independent cues. The gameplay board uses square corners so its rectangular selection cue never conflicts with outer corner curvature; the surrounding stage may stay softly rounded without changing grid geometry. The 3×3 boundaries remain visually dominant, and the mobile layout keeps every primary action reachable without precision pointing.

## Accessibility Constraints

Keyboard navigation and visible focus are first-class interaction paths. Motion honors reduced-motion preferences, controls expose names and state to assistive technology, and status changes use appropriate live semantics without stealing focus.

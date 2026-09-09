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

The playable experience provides API-backed difficulty selection, number and note entry, erase, undo/redo, applied hints, invalid-value feedback, and solved-state messaging. The responsive board uses explicit zero-minimum row and column tracks so values, notes, focus, and validation feedback cannot resize cells. The control surface adapts from an adjacent desktop panel to a compact mobile layout.

Pause, elapsed time, resilient refresh recovery, and richer backend failure guidance remain a separate hardening slice so the core gameplay boundary stays reviewable.

Board feedback has a deliberate visual hierarchy: the selected cell uses the only strong filled state, its row/column/box peers use one quieter but observable surface, and matching values use a restrained edge mark instead of another fill. Empty selections produce no matching-value marks. Invalid values, matching values, keyboard focus, and selection each retain a distinct color-independent cue, while 3×3 boundaries remain visually dominant. The mobile layout keeps every primary action reachable without precision pointing.

## Accessibility Constraints

Keyboard navigation and visible focus are first-class interaction paths. Motion honors reduced-motion preferences, controls expose names and state to assistive technology, and status changes use appropriate live semantics without stealing focus.

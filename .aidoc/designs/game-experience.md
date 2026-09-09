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

The product shell establishes responsive typography, a compact connection state, an original neutral-and-green visual system, and a non-interactive preview of a valid puzzle from the backend repository. The playable experience will add difficulty choice, number and note entry, erase, history, hints, pause, elapsed time, completion, and session recovery as backend-backed interactions.

Board feedback distinguishes givens, player values, invalid values, selection, peers, and matching digits through more than color alone. The mobile layout keeps every primary action reachable without precision pointing.

## Accessibility Constraints

Keyboard navigation and visible focus are first-class interaction paths. Motion honors reduced-motion preferences, controls expose names and state to assistive technology, and status changes use appropriate live semantics without stealing focus.

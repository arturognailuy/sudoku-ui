---
domain: Designs
status: Active
entry_points:
  - tests/app-shell.spec.ts
dependencies:
  - .aidoc/designs/game-experience.md
  - .aidoc/designs/e2e-scenarios.md
---

# Player Experience Validation

The current player experience is validated as one bounded journey across every requested grade on desktop and a browser-emulated Pixel 7. The validation protects the real deployed flow while keeping physical-device claims and backend strategy-grade semantics separate.

## Related Docs

| Document                                                 | Relationship                             |
| -------------------------------------------------------- | ---------------------------------------- |
| [Game experience](game-experience.md)                    | Product and accessibility intent         |
| [E2E scenarios](e2e-scenarios.md)                        | Maintained black-box acceptance coverage |
| [Web client architecture](../architecture/web-client.md) | Browser and API ownership boundary       |

## Why the Validation Exists

Unit and mocked browser tests prove deterministic contracts but cannot establish that the deployed frontend, route, API, catalog, and responsive layout still compose into a playable experience. The bounded validation samples the complete player-facing path without reopening solver, generator, or catalog work when the deployed grades are available and correctly labelled.

The phone run uses Playwright's Pixel 7 browser profile. The phone evidence proves viewport and browser-event behavior only; it does not claim physical-device rendering, operating-system input, or network conditions.

## Current Validation Matrix

The deployed matrix starts Easy through Evil independently at 1280×900 and 412×839. Every run verifies the requested grade against the API-owned actual label, 81-cell geometry, selection, Candidates-to-Notes adoption, Undo/Redo, pause/resume, refresh recovery, console errors, failed requests, and cleanup of the created session.

| Grade  | Desktop start | Pixel 7 start | Result |
| ------ | ------------- | ------------- | ------ |
| Easy   | 351 ms        | 315 ms        | Pass   |
| Medium | 330 ms        | 333 ms        | Pass   |
| Hard   | 836 ms        | 382 ms        | Pass   |
| Expert | 339 ms        | 317 ms        | Pass   |
| Evil   | 354 ms        | 819 ms        | Pass   |

No requested/actual grade mismatch, failed request, or browser console error occurred in the ten grade/device runs. One Easy journey additionally uses authoritative hints through completion, verifies the focused solved panel, starts another Easy puzzle, and inspects the replay at phone width.

## Selected Friction and Constraint

The first deployed Pixel 7 run exposed 25 pixels of avoidable vertical overflow: the 412-pixel board grew wider than the existing 390×844 regression while the available height shrank to 839 pixels. The overflow forced a small scroll even though the same phone class had enough room for the complete closed-shortcuts game surface.

The responsive fix preserves board and control sizes and compresses only outer game padding for viewports no wider than 520 pixels and no taller than 860 pixels. `tests/app-shell.spec.ts` includes the exact 412×839 boundary and requires the closed-shortcuts document height to remain within the viewport. Taller phones keep the roomier spacing, and opening Keyboard shortcuts may intentionally grow the document.

## Maintenance Boundary

Future player-experience reviews replace this matrix when the deployed interaction contract changes. New work is justified by reproducible player friction, grade mismatch, request failure, or a regression in the maintained journey; observations alone do not reopen backend generation or catalog work.

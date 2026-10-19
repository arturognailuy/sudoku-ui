---
domain: Designs
status: Draft
entry_points:
  - src/App.tsx
  - src/api/client.ts
dependencies:
  - .aidoc/INDEX.md
  - .aidoc/architecture/web-client.md
  - .aidoc/designs/game-experience.md
---

# Future Directions

This Draft is the only Sudoku UI location for deliberately deferred product and client directions. None of the directions below is committed work or current-state authority; each requires a concrete user need plus a separately approved product, security, and interaction design.

## Related Docs

| Document                                                                                                            | Relationship                                                 |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [Documentation index](../INDEX.md)                                                                                  | Draft Work owner and current-state discovery routes          |
| [Architecture](../architecture/web-client.md)                                                                       | Current browser/backend ownership boundary                   |
| [Game experience](game-experience.md)                                                                               | Current player-facing behavior and accessibility constraints |
| [Sudoku backend future directions](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/future-directions.md) | Deferred backend, hosting, database, and rating directions   |

## Product Expansion Beyond the Current Baseline

`.aidoc/designs/user-accounts.md` is the canonical current design for one guest game, Google identity, account-scoped authorization, cross-device continuation, and My games. Additional identity providers, import/export portability, shared games, collaboration, and social features remain possible expansions requiring their own product, security, and interaction designs.

## Additional Client Directions

Installable/offline browser behavior and native mobile or desktop clients require separate evidence and acceptance criteria. Shared gameplay semantics remain in the Go engine/API; client-specific presentation must not create another game model.

New interaction work must preserve keyboard access, visible focus, reduced-motion behavior, responsive geometry, color-independent state cues, and independent keyboard, mouse, and touchscreen black-box proof.

## Decision Gate

A direction may leave Draft only when a concrete user need defines ownership, privacy and threat model, data lifecycle, interaction scope, measurable acceptance criteria, and cross-repository responsibilities. Until then, current Architecture, Designs, and Workflows remain authoritative; this document provides no implementation authority.

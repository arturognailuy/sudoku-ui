---
domain: Designs
status: Active
entry_points:
  - src/App.tsx
  - src/api/client.ts
dependencies:
  - .aidoc/designs/roadmap.md
  - .aidoc/architecture/web-client.md
  - .aidoc/designs/game-experience.md
---

# Future Directions

This document is the only Sudoku UI location for deliberately deferred product and client directions. None of these items is committed work; each needs a concrete user need and a separately approved product, security, and interaction design.

## Related Docs

| Document                                                                                                            | Relationship                                                     |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [Roadmap](roadmap.md)                                                                                               | Approved portable preview and default-branch deployment sequence |
| [Architecture](../architecture/web-client.md)                                                                       | Current browser/backend ownership boundary                       |
| [Game experience](game-experience.md)                                                                               | Current player-facing behavior and accessibility constraints     |
| [Sudoku backend future directions](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/future-directions.md) | Deferred backend, hosting, database, and rating directions       |

## Saved Games and Portability

Single-user saved-game management and session portability remain possible expansions. A design must define anonymous continuity, ownership, source and difficulty labels, import/export safety, deletion semantics, stale-session recovery, and whether the product presents one active game or a dedicated saved-games surface.

A host access gate, when configured, does not identify an application player. A global server session list must not be presented as one visitor's games.

## Accounts and Multi-User Hosting

Accounts, account-scoped authorization, cloud synchronization, multi-tenancy, shared games, and collaboration belong to one larger product and security boundary. The design must establish identity, ownership, authorization for every session operation, tenant isolation, anonymous-player behavior, retention, abuse handling, and migration from the single-operator model before player-specific management appears in the UI.

## Additional Client Directions

Localization, installable/offline browser behavior, and native mobile or desktop clients require separate evidence and acceptance criteria. Shared gameplay semantics remain in the Go engine/API; client-specific presentation must not create another game model.

New interaction work must preserve keyboard access, visible focus, reduced-motion behavior, responsive geometry, color-independent state cues, and independent keyboard, mouse, and touchscreen black-box proof.

## Decision Gate

Deferred work becomes a roadmap candidate only when a concrete user need defines ownership, privacy and threat model, data lifecycle, interaction scope, measurable acceptance criteria, and cross-repository responsibilities. Until then, the portable deployment roadmap remains the only approved unfinished work.

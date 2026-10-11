---
domain: Designs
status: Active
entry_points:
  - vite.config.ts
  - deploy/Caddyfile.example
  - tests/app-shell.spec.ts
dependencies:
  - .aidoc/designs/deployment-hardening.md
  - .aidoc/workflows/test-deployment.md
  - .aidoc/designs/e2e-scenarios.md
  - .aidoc/designs/future-directions.md
---

# Roadmap

Sudoku UI has completed the approved guest, account, and renderer-neutral hint-teaching milestones. No product expansion is currently approved; the next implementation milestone begins only after a concrete user need selects one deferred direction and its cross-repository design is reviewed.

## Related Docs

| Document                                                                                        | Relationship                                             |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [User accounts](user-accounts.md)                                                               | Current guest, sign-in, claim, and account experience    |
| [Architecture](../architecture/web-client.md)                                                   | Browser/backend ownership boundary                       |
| [Game experience](game-experience.md)                                                           | Current responsive gameplay and hint-teaching experience |
| [E2E scenarios](e2e-scenarios.md)                                                               | Maintained browser acceptance catalog                    |
| [Future directions](future-directions.md)                                                       | Deferred product directions and their decision gate      |
| [Sudoku backend roadmap](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/roadmap.md) | Current backend baseline and evidence gates              |

## Current Product Baseline

Sudoku remains immediately playable as one sealed guest game without an account wall. Optional Google identity adds automatic claim, cross-device continuation, account-scoped game management, session controls, and deletion while keeping authentication and game authority in the Go API.

Renderer-neutral hint teaching gives guest and account games the same complete API-authored plan. The browser navigates semantic teaching steps locally and applies only the exact previewed plan identity through the ordinary revisioned action boundary.

The browser remains a presentation client rather than an identity or game authority. IndexedDB stores at most one opaque backend-sealed guest record, the HttpOnly web session stays outside JavaScript storage, and authoritative account, puzzle, revision, validation, history, and hint state remain in the Go service.

## Why the Next Milestone Needs a Decision

The deferred directions have materially different ownership, privacy, threat-model, storage, and interaction consequences. Shared games, localization, offline installation, another identity provider, and native clients cannot be treated as interchangeable backlog items or inferred from the completed account and hint work.

A new milestone starts only when a concrete user need identifies the target player, authoritative data owner, lifecycle, security boundary, cross-repository responsibilities, and observable acceptance criteria. The selected direction receives a separately reviewed design before implementation; development-stage compatibility remains unnecessary unless the design explicitly introduces it.

## Maintained Quality Gates

- Formatting, lint, unit coverage, production build, mount checks, and the complete Playwright suite remain green.
- Storage inspection proves that no provider or application token enters localStorage, sessionStorage, or IndexedDB.
- Browser acceptance preserves one guest record, safe replacement, refresh recovery, exactly-once claim recovery, My games, cross-browser continuation, deletion, and complete hint teaching.
- Existing board geometry, accessibility, responsive behavior, and independent keyboard, mouse, and touchscreen journeys remain unchanged.
- Browser artifacts contain no hostname, credential, backend listener, user path, active branch, or environment topology.

Until a new direction passes the decision gate, maintenance may correct defects, security issues, documentation drift, and test gaps without inventing another product milestone.

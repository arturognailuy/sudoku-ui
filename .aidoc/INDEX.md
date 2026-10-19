---
domain: Conventions
status: Active
entry_points:
  - AGENT.md
dependencies: []
---

# Sudoku UI Documentation

This index is the exhaustive registry and bounded discovery entry point for the Sudoku web client. Start with the route for the task, then follow the named source pointers rather than reading every document.

## Related Docs

| Document                                             | Relationship                                                |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| [Architecture](architecture/web-client.md)           | Browser/backend ownership and implementation boundaries     |
| [Experience](designs/game-experience.md)             | Current product, interaction, and accessibility contract    |
| [User accounts](designs/user-accounts.md)            | Guest, sign-in, claim, and account lifecycle                |
| [E2E scenarios](designs/e2e-scenarios.md)            | Maintained black-box acceptance catalog                     |
| [Localization](designs/localization.md)              | Locale ownership, catalogs, and API descriptor rendering    |
| [Deployment design](designs/deployment-hardening.md) | Static artifact, mount, access-policy, and failure contract |
| [Deployment workflow](workflows/test-deployment.md)  | Generic preview and default-branch operating procedure      |

## Reading Chains

- **Frontend feature or fix:** `AGENT.md` → [Architecture](architecture/web-client.md) → [Experience](designs/game-experience.md) → [E2E scenarios](designs/e2e-scenarios.md) → affected `src/` and `tests/` files.
- **Localization:** `AGENT.md` → [Localization](designs/localization.md) → [Architecture](architecture/web-client.md) → [Experience](designs/game-experience.md) → [E2E scenarios](designs/e2e-scenarios.md) → `src/i18n/`, affected presentation surfaces, and locale browser tests.
- **User accounts:** `AGENT.md` → [Architecture](architecture/web-client.md) → [User accounts](designs/user-accounts.md) → [Experience](designs/game-experience.md) → [E2E scenarios](designs/e2e-scenarios.md).
- **API integration:** `AGENT.md` → [Architecture](architecture/web-client.md) → `src/api/client.ts` → `src/api/types.ts`.
- **Deployment:** `AGENT.md` → [Deployment design](designs/deployment-hardening.md) → [Deployment workflow](workflows/test-deployment.md) → `deploy/Caddyfile.example`.
- **Testing:** `AGENT.md` → [E2E scenarios](designs/e2e-scenarios.md) → applicable files under `tests/` and `src/**/*.test.tsx`.

## Draft Work

| Topic                                    | Owner         | Status | Document                              |
| ---------------------------------------- | ------------- | ------ | ------------------------------------- |
| Unselected product and client expansions | Product owner | Draft  | `.aidoc/designs/future-directions.md` |

Draft work is discoverable for planning but is not current-state authority and does not appear in the current implementation reading chains.

## Registry

| Document                                 | Purpose                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| `.aidoc/architecture/web-client.md`      | Browser/backend ownership, persistence, transactions, and input boundaries |
| `.aidoc/designs/game-experience.md`      | Current player-facing behavior and accessibility invariants                |
| `.aidoc/designs/user-accounts.md`        | Implemented guest/account identity and game lifecycle                      |
| `.aidoc/designs/e2e-scenarios.md`        | Black-box browser and full-stack acceptance catalog                        |
| `.aidoc/designs/deployment-hardening.md` | Portable artifact, mount, access-policy, and verification design           |
| `.aidoc/workflows/test-deployment.md`    | Preview and trusted default-branch deployment procedure                    |
| `.aidoc/designs/localization.md`         | Locale selection, complete production catalogs, and descriptor rendering   |
| `.aidoc/designs/future-directions.md`    | Draft decision gates for unselected expansion                              |

## Validation

Run `npm run test:docs` for required frontmatter, allowed status values, list types, portable metadata paths, metadata targets, and the validator's positive/failure fixtures. Natural-language truth, value, readability, ownership, and navigation remain semantic or fresh-context review responsibilities rather than script checks.

---
domain: Conventions
status: Active
entry_points:
  - AGENT.md
dependencies: []
---

# Sudoku UI Documentation

This index is the discovery entry point for the Sudoku web client. Read only the chain relevant to the current task, then follow source pointers for implementation details.

## Related Docs

| Document                                   | Relationship                                  |
| ------------------------------------------ | --------------------------------------------- |
| [Architecture](architecture/web-client.md) | Browser/backend ownership and code boundaries |
| [Experience](designs/game-experience.md)   | Product and accessibility intent              |
| [E2E scenarios](designs/e2e-scenarios.md)  | Black-box acceptance catalog                  |
| [Deployment](workflows/test-deployment.md) | Test-stack topology and operating workflow    |

## Reading Chains

- **Frontend feature:** `AGENT.md` → [Architecture](architecture/web-client.md) → [Experience](designs/game-experience.md) → [E2E scenarios](designs/e2e-scenarios.md)
- **API integration:** `AGENT.md` → [Architecture](architecture/web-client.md) → `src/api/client.ts`
- **Deployment:** `AGENT.md` → [Deployment](workflows/test-deployment.md) → `deploy/Caddyfile.example`
- **Testing:** `AGENT.md` → [E2E scenarios](designs/e2e-scenarios.md) → `tests/`

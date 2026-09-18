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

| Document                                             | Relationship                                                |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| [Architecture](architecture/web-client.md)           | Browser/backend ownership and code boundaries               |
| [Experience](designs/game-experience.md)             | Current product and accessibility intent                    |
| [Roadmap](designs/roadmap.md)                        | Portable preview and default-branch delivery sequence       |
| [Deployment design](designs/deployment-hardening.md) | Static artifact, mount, access-policy, and browser contract |
| [Future directions](designs/future-directions.md)    | Deferred product and client directions                      |
| [E2E scenarios](designs/e2e-scenarios.md)            | Black-box acceptance catalog                                |
| [Deployment](workflows/test-deployment.md)           | Generic preview and default-branch operating workflow       |

## Reading Chains

- **Frontend feature:** `AGENT.md` → [Architecture](architecture/web-client.md) → [Experience](designs/game-experience.md) → [E2E scenarios](designs/e2e-scenarios.md)
- **Roadmap:** `AGENT.md` → [Roadmap](designs/roadmap.md) → [Deployment design](designs/deployment-hardening.md) → [Future directions](designs/future-directions.md)
- **API integration:** `AGENT.md` → [Architecture](architecture/web-client.md) → `src/api/client.ts`
- **Deployment:** `AGENT.md` → [Roadmap](designs/roadmap.md) → [Deployment design](designs/deployment-hardening.md) → [Test deployment](workflows/test-deployment.md) → `deploy/Caddyfile.example`
- **Testing:** `AGENT.md` → [E2E scenarios](designs/e2e-scenarios.md) → `tests/`

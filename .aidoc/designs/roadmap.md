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

The next approved milestone makes the browser client a portable, verifiable static artifact for development previews and default-branch deployments. The milestone keeps environment selection and host details outside the repository.

## Related Docs

| Document                                                                                        | Relationship                                              |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [Deployment design](deployment-hardening.md)                                                    | Static artifact, mount, cache, and browser contract       |
| [Deployment workflow](../workflows/test-deployment.md)                                          | Portable preview and default-branch installation flow     |
| [E2E scenarios](e2e-scenarios.md)                                                               | Maintained browser and deployment acceptance catalog      |
| [Future directions](future-directions.md)                                                       | Deferred product and client directions                    |
| [Sudoku backend roadmap](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/roadmap.md) | Coordinated backend artifact and service responsibilities |

## Why Portable Deployment Comes Next

Sudoku remains a development project, so refactoring, downtime, and replacement of active games are acceptable. Portable deployment reduces friction and protects unrelated applications without adding production availability ceremony.

The same static client must support two environment roles. A branch preview may be replaced ad hoc with selected development artifacts, while a default-branch installation may later update automatically after trusted workflows succeed. The repository does not own the preview hostname, active branch selection, destination host, or deployment credentials.

## Approved Delivery Sequence

1. Keep formatting, lint, unit coverage, production build, mount checks, and the complete Playwright suite green.
2. Publish a verifiable static artifact from trusted branch workflows with the frontend commit, checksums, and normalized mount input.
3. Preserve one generic same-origin routing example for static assets, API requests, health, and path-prefix refreshes.
4. Let operators deploy selected development-branch artifacts to an ad hoc preview without repository automation.
5. Pair a successful default-branch frontend artifact with a successful default-branch backend artifact in a serialized private host-side replacement flow.
6. Enable automatic default-branch deployment only after staging, browser smoke tests, failure restoration, and neighboring-route checks pass end to end.

## Environment Responsibilities

A preview environment is intentionally disposable. Its operator selects the active branch or falls back to the default branch, performs replacement when useful, and accepts development downtime. Branch selection and preview URLs remain private runtime inputs.

A default-branch environment accepts only trusted successful artifacts. A merge in either repository may trigger private host tooling to select the newest successful default-branch pair, but the public repositories expose only the generic artifact and verification contract.

## Maintained Delivery Gates

- Root and path-prefix builds keep every asset, API call, health request, and refresh inside the selected mount.
- The browser bundle contains no hostname, credential, backend listener, user path, active branch, or environment topology.
- Authentication is an optional host policy; repository routing examples neither require nor embed credentials.
- Browser verification covers desktop and phone widths, expected assets, health, session creation, gameplay startup, and page/request/console errors.
- Failed staging or browser verification leaves or restores the previously selected Sudoku pair.
- Shared-host replacement cannot capture, rebuild, restart, or roll back a neighboring application.

Scheduled browser monitoring, backup drills, immutable-release frameworks, and production availability objectives are outside this development milestone.

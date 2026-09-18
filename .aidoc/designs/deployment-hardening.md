---
domain: Designs
status: Active
entry_points:
  - vite.config.ts
  - src/api/client.ts
  - deploy/Caddyfile.example
dependencies:
  - .aidoc/designs/roadmap.md
  - .aidoc/workflows/test-deployment.md
  - .aidoc/designs/e2e-scenarios.md
---

# Portable Static Deployment

The web client builds into a verifiable static artifact for either an origin root or an operator-selected path prefix. Environment topology, branch selection, access policy, and deployment credentials remain private host concerns.

## Related Docs

| Document                                                                                                        | Relationship                                                         |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Roadmap](roadmap.md)                                                                                           | Approved preview and default-branch delivery sequence                |
| [Deployment workflow](../workflows/test-deployment.md)                                                          | Generic installation and verification flow                           |
| [E2E scenarios](e2e-scenarios.md)                                                                               | Browser and mount acceptance catalog                                 |
| [Backend deployment design](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/deployment-hardening.md) | Canonical backend artifact, service, state, and replacement contract |

## Why Static Deployment Has Its Own Boundary

The browser application has no long-running Node service, but stale HTML, missing chunks, incorrect base paths, incompatible API behavior, or cache mismatch can still break it independently. Static artifact identity and browser proof therefore complement backend health.

A reverse proxy may serve Sudoku beside an unrelated application. Sudoku owns only its bounded route, static root, API forwarding, health forwarding, and browser checks; Sudoku replacement must not rebuild, restart, roll back, or capture routes from the neighboring application.

## Portable Mount and Routing Contract

One normalized `SUDOKU_MOUNT_PATH` selects origin-root mode or an absolute path prefix without a trailing slash. `vite.config.ts`, browser API and health URLs, static asset URLs, reverse-proxy matchers, and verification targets use the same value.

In prefix mode, assets and refreshes remain under the selected mount, API calls target `<mount>/api/v1`, and health checks target `<mount>/healthz`. The reverse proxy removes the public prefix only when forwarding to the unchanged loopback backend routes and never installs a fallback outside the Sudoku namespace.

`SudokuApiClient` remains the browser transport boundary. The static bundle receives no host credential, bearer token, loopback address, filesystem path, preview hostname, active branch, or neighboring-route knowledge.

## Optional Access Policy

Authentication is a host policy until the application has accounts and user authorization. An operator may place the complete mounted surface behind reverse-proxy authentication, a VPN, an allowlist, or no gate according to the installation's exposure.

`deploy/Caddyfile.example` demonstrates routing without mandatory authentication. An operator-added access policy belongs outside the browser bundle and should cover the intended shell and API surface consistently; a payload-free health route may remain separate when the host needs unauthenticated liveness.

## Artifact and Cache Contract

A trusted branch workflow builds with the selected mount and makes the static files, frontend Git commit, and SHA-256 checksums available to the deployment boundary. The artifact is independent of a destination hostname and can be staged before selection.

Hashed assets may use long-lived immutable caching. `index.html` must revalidate so a replacement becomes visible promptly. A lightweight private pair record may associate the frontend commit and checksums with a tested backend commit; the repositories do not require a public release framework.

The Go API remains authoritative for sessions, revisions, validation, notes, candidates, mistakes, history, and recovery. Static artifacts contain only presentation code and browser-owned preferences described in [Architecture](../architecture/web-client.md).

## Preview and Default-Branch Use

A branch preview is an ad hoc consumer of successful development artifacts. Its operator chooses the active branches or default-branch fallback and replaces the preview manually when useful; no repository automation or durable preview availability is required.

A default-branch installation may update automatically after trusted workflows succeed. Private host tooling serializes replacement, pairs successful frontend and backend artifacts, verifies checksums and mount-relative paths, stages the pair, and selects it only after backend and browser checks pass.

## Verification and Failure Handling

Browser verification checks the shell, every referenced asset, health, session creation, desktop and phone gameplay startup, responsive layout, accessibility smoke behavior, and unexpected page, request, or console errors. A shared host also checks representative neighboring routes before and after Sudoku replacement.

A failed checksum, asset, API, or browser check leaves the working pair selected or restores it. Development downtime and active-game loss are acceptable; changing or destabilizing another hosted application is not.

Scheduled browser monitoring, backup/restore drills, immutable-release ceremony, and production availability objectives remain outside this development contract.

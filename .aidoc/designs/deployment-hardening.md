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

# Static Release Deployment Hardening

The web client is an immutable member of a tested frontend/backend release pair. A single portable mount input supports both a dedicated origin and a path-prefixed installation on a shared host while Sudoku assets, routing, deployment, and rollback remain independent from neighboring sites.

## Related Docs

| Document                                                                                                        | Relationship                                                    |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [Roadmap](roadmap.md)                                                                                           | Delivery order and frontend milestone gates                     |
| [Test deployment](../workflows/test-deployment.md)                                                              | Current origin-root preview workflow                            |
| [E2E scenarios](e2e-scenarios.md)                                                                               | Maintained browser behavior baseline                            |
| [Backend deployment design](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/deployment-hardening.md) | Canonical operating, state, backup, and paired-release contract |

## Why Static Releases Need Their Own Boundary

The browser application has no long-running Node service, but its assets can still fail independently through stale HTML, missing chunks, incorrect base paths, cache mismatch, or an incompatible API. Frontend identity and browser proof therefore remain first-class release evidence rather than being inferred from API health.

A shared Caddy process may serve Sudoku beside an unrelated site. Sudoku owns a bounded route matcher, immutable asset root, release manifest, cache policy, checks, and rollback reference; a Sudoku promotion must not replace, rebuild, restart, or depend on the neighboring application.

## Portable Mount Contract

One normalized deployment input selects origin-root mode or a path prefix such as `/sudoku/`. The implementation uses the same value for Vite asset URLs, document links, browser API/health base URLs, Caddy routing, smoke-test targets, and the release manifest. Repository files never encode an operator domain, checkout path, or private backend address.

In prefix mode, navigation and refresh stay under the selected mount, API calls target `<mount>/api/v1`, and health checks target `<mount>/healthz`. Caddy strips the public mount before forwarding API and health requests to the unchanged loopback backend. No Sudoku fallback matcher may capture paths outside the Sudoku namespace.

`SudokuApiClient` remains the only HTTP transport boundary. Build-time or bootstrap configuration may select the public base path, but browser code must not receive a credential, bearer token, loopback address, host filesystem path, or knowledge of another site's routes.

## Artifact and Cache Contract

A production build produces immutable hashed assets plus revalidating `index.html` and a machine-readable release manifest. The manifest records the shared release ID, frontend Git commit, asset SHA-256 values, OpenAPI digest, build toolchain, mount mode, compatible backend commit, and previous compatible release ID.

Hashed assets may use long-lived immutable caching. `index.html` and the release manifest must revalidate so promotion and rollback become visible immediately. The active Caddy route reads only the atomic `current` frontend reference; release staging never writes into the live directory.

The static artifact contains no runtime puzzle authority. The Go API continues to own sessions, revisions, validation, notes, candidates, mistakes, history, and recovery, while the browser owns presentation-only state described in [Architecture](../architecture/web-client.md).

## Staging, Promotion, and Rollback

Candidate staging verifies asset checksums, manifest completeness, expected mount-relative URLs, absence of environment-specific values, and compatibility with the staged backend OpenAPI digest. A temporary route serves the candidate pair for the complete desktop and phone critical journey before promotion.

Promotion switches the shared paired `current` reference only after backend readiness succeeds. Public verification proves authentication, `index.html`, expected release identity, every referenced asset, API gameplay, responsive layout, accessibility smoke checks, and zero unexpected page, request, or console errors.

A failed pre-promotion browser or asset check leaves the current pair untouched. Post-promotion rollback restores both frontend and backend to `previous`; frontend-only rollback is prohibited because a green shell can hide an incompatible API.

## Monitoring and Failure Proof

Independent monitoring checks authenticated shell delivery, expected release and asset identity, API readiness, and a scheduled browser journey. Static success must not mask API failure, and API health must not mask a stale or incomplete frontend release.

Failure tests remove an asset, present an unexpected manifest, break the API route, and serve a mismatched pair. Each failure must identify the affected component and release without logging credentials, session IDs, puzzle contents, or browser storage.

## Acceptance Boundary

Frontend acceptance proves origin-root and path-prefix builds resolve all assets and API calls, unauthenticated application access is rejected, authenticated desktop and phone journeys pass, refresh and deep navigation remain inside the mount, caches reveal promotion and rollback promptly, neighboring routes remain unchanged, and built JavaScript contains no domain-specific or secret value.

The frontend repository owns static artifacts, mount-aware browser routing, cache behavior, release identity, and browser evidence. The backend repository owns the canonical paired operating contract, API service, persistent state, monitoring interface, backup consistency, restore, and release orchestration.

Accounts, public multi-user hosting, coupling to a blog build or process, and automatic changes to shared-host Caddy configuration remain explicit non-goals.

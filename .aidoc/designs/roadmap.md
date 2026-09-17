---
domain: Designs
status: Active
entry_points:
  - deploy/Caddyfile.example
  - deploy/sudoku-api.service.example
  - tests/app-shell.spec.ts
dependencies:
  - .aidoc/designs/deployment-hardening.md
  - .aidoc/workflows/test-deployment.md
  - .aidoc/designs/e2e-scenarios.md
  - .aidoc/designs/future-directions.md
---

# Roadmap

The next approved milestone hardens the current single-operator deployment before any broader product expansion. The browser client coordinates with the Go backend roadmap while retaining independent release, health, rollback, and browser-verification responsibilities.

## Related Docs

| Document                                                                                        | Relationship                                                   |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [Deployment design](deployment-hardening.md)                                                    | Static-release, mount, cache, browser, and acceptance contract |
| [Test deployment](../workflows/test-deployment.md)                                              | Current same-origin topology and portable installation inputs  |
| [E2E scenarios](e2e-scenarios.md)                                                               | Maintained browser behavior baseline                           |
| [Future directions](future-directions.md)                                                       | Deferred product and client directions                         |
| [Sudoku backend roadmap](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/roadmap.md) | Coordinated backend and operational responsibilities           |

## Why Deployment Hardening Comes Next

The current test stack proves the production build and Go API can operate through one HTTPS origin, but it does not yet define a dependable release lifecycle. Deployment hardening makes access, restart, monitoring, backup, release, rollback, and recovery behavior explicit before the project considers accounts or public multi-user hosting.

The deployment milestone changes operations rather than gameplay. Accounts, account-scoped saved games, public multi-user hosting, collaboration, and native clients remain non-goals.

## Milestone 1: Deployment-Hardening Design

The approved [deployment-hardening design](deployment-hardening.md) defines the browser-client portion of the coordinated contract: portable origin-root or path-prefix mounting, immutable static artifacts, cache behavior, shared paired-release identity, browser monitoring, failure proof, and desktop/phone acceptance.

The backend design remains canonical for the operating model, persistent state, backup consistency, restore, and release orchestration. Sudoku may share a Caddy process with an unrelated site, but each application retains independent routes, assets, processes, state, releases, checks, backups, and rollback.

The design milestone changes documentation only. Caddy, services, credentials, firewall rules, public routes, and built assets remain unchanged until a separately reviewed implementation slice is approved for the target host.

## Milestone 2: Reversible Implementation Slices

Frontend work follows the reviewed cross-repository design in this order:

1. verify that the static shell and API routes obey the exposure/authentication boundary;
2. serve only the active pair's immutable frontend directory, coordinate it with the durable backend service, and prove restart and host-reboot behavior on an approved target host;
3. monitor health, expected asset identity, and browser-visible failures with actionable alerts;
4. back up and restore service configuration plus release artifacts alongside the backend restore drill;
5. deploy a versioned frontend/backend release and prove rollback to the previous compatible pair;
6. repeat the full desktop and mobile browser journeys after the recovery exercise.

Each slice remains independently reviewable and reversible. Shared-host changes require explicit operator approval when they are applied.

## Maintained Delivery Gates

- Formatting, lint, unit coverage, production build, and the complete Playwright suite remain green.
- Browser verification covers desktop and phone widths, root and health responses, expected production asset identity, and page/console errors.
- The browser bundle contains no private hostname, credential, backend topology, user path, or environment-specific secret.
- Release and rollback checks preserve the Go API as the authoritative gameplay boundary.
- The milestone is complete only after access, restart, alert, restore, rollback, and full browser recovery evidence pass.

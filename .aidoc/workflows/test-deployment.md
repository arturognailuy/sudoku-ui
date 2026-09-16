---
domain: Workflows
status: Active
entry_points:
  - deploy/Caddyfile.example
  - deploy/sudoku-api.service.example
dependencies:
  - .aidoc/architecture/web-client.md
  - .aidoc/designs/deployment-hardening.md
---

# Test Deployment

The deployment stack serves static frontend assets and proxies the Go API through one operator-configured HTTPS origin and mount path. The topology keeps the backend loopback-only, enforces host-owned HTTP authentication for application routes, and remains portable across hosting environments.

## Related Docs

| Document                                                | Relationship                                        |
| ------------------------------------------------------- | --------------------------------------------------- |
| [Architecture](../architecture/web-client.md)           | Browser/backend trust boundary                      |
| [Deployment design](../designs/deployment-hardening.md) | Future origin-root and path-prefix release contract |
| [Roadmap](../designs/roadmap.md)                        | Approved deployment-hardening sequence              |
| [E2E scenarios](../designs/e2e-scenarios.md)            | Pre-deployment browser proof                        |

## Why Same-Origin Deployment Exists

The public application surface requires one reverse-proxy authentication policy while the payload-free health route remains available for liveness checks. Loopback binding plus mount-scoped proxy routing exposes only the intended HTTP surface and keeps credentials and backend transport details out of the JavaScript bundle.

## What Runs

Caddy reads the public site address from `SUDOKU_SITE_ADDRESS`, the built frontend directory from `SUDOKU_UI_ROOT`, and the normalized mount from `SUDOKU_MOUNT_PATH`. An empty mount selects the origin root; an absolute path without a trailing slash selects prefix mode. The same mount value drives `vite.config.ts`, browser API URLs, and Caddy matchers, so assets, API calls, refreshes, and health checks remain in one namespace.

`SUDOKU_AUTH_USERNAME` and `SUDOKU_AUTH_PASSWORD_HASH` configure Caddy basic authentication for the static shell and API. The health route bypasses authentication and forwards only the backend payload-free liveness response. A user service runs `sudoku api` on `127.0.0.1:8080` with private state; the browser receives no credential, token, loopback address, or neighboring-site route.

## Portable Installation Layout

The example user service uses systemd's `%h` home-directory specifier and expects the backend binary at `%h/.local/libexec/sudoku/sudoku`, a working directory at `%h/.local/share/sudoku`, and state beneath `%h/.local/state`. Operators may substitute a different layout while installing the example; repository files must not contain a contributor's local path.

The Caddy example requires operators to set the site, static root, mount, authentication username, and a Caddy-supported password hash before validation. `SUDOKU_MOUNT_PATH` is empty for origin-root mode or an absolute path such as `/sudoku` without a trailing slash. None of the inputs is tied to a repository checkout, preview environment, or neighboring application.

## Deployment Workflow

1. Run all quality and browser E2E gates.
2. Build the backend binary, install it and its working directory in the chosen host layout, and run the frontend build with the selected `SUDOKU_MOUNT_PATH`.
3. Install the example user service, adapting the generic `%h` layout when needed, then verify its loopback health endpoint.
4. Generate a host-owned password hash, set the Caddy deployment inputs, merge only the mount-scoped route into managed configuration, and validate Caddy before reload.
5. Prove unauthenticated shell and API rejection, authenticated desktop/mobile gameplay, unauthenticated payload-free health, mount-scoped refresh, and an unchanged neighboring route.
6. Roll back by restoring the previous static release directory and backend binary, then reload only after validation.

Caddy and service changes affect the shared host and therefore require an explicit operator-approved deployment step; repository examples are not installed automatically.

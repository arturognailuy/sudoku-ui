---
domain: Workflows
status: Active
entry_points:
  - deploy/Caddyfile.example
  - deploy/sudoku-api.service.example
dependencies:
  - .aidoc/architecture/web-client.md
---

# Test Deployment

The deployment stack serves static frontend assets and proxies the Go API through one operator-configured HTTPS origin. The topology keeps the backend loopback-only, avoids browser credentials and CORS configuration, and remains portable across hosting environments.

## Related Docs

| Document                                      | Relationship                   |
| --------------------------------------------- | ------------------------------ |
| [Architecture](../architecture/web-client.md) | Browser/backend trust boundary |
| [E2E scenarios](../designs/e2e-scenarios.md)  | Pre-deployment browser proof   |

## Why Same-Origin Deployment Exists

The test site intentionally has no user authentication, but the backend still requires process and network isolation. Loopback binding plus reverse-proxy routing exposes only the intended HTTP surface and keeps backend transport details out of the JavaScript bundle.

## What Runs

Caddy reads the public site address from `SUDOKU_SITE_ADDRESS` and the built frontend directory from `SUDOKU_UI_ROOT`. It serves that directory and proxies `/api/*` plus `/healthz` to `127.0.0.1:8080`. A user service runs the built `sudoku api` process on that loopback address with a private state directory. Hostnames, IP addresses, user names, and checkout paths remain deployment inputs rather than repository-owned product configuration.

## Portable Installation Layout

The example user service uses systemd's `%h` home-directory specifier and expects the backend binary at `%h/.local/libexec/sudoku/sudoku`, a working directory at `%h/.local/share/sudoku`, and state beneath `%h/.local/state`. Operators may substitute a different layout while installing the example; repository files must not contain a contributor's local path.

The Caddy example requires operators to set `SUDOKU_SITE_ADDRESS` to the deployment's public origin and `SUDOKU_UI_ROOT` to the absolute path of the built frontend directory before validating the merged configuration. Neither value is tied to a repository checkout or preview environment.

## Deployment Workflow

1. Run all quality and browser E2E gates.
2. Build the backend binary, install it and its working directory in the chosen host layout, and run `npm ci && npm run build` in this repository.
3. Install the example user service, adapting the generic `%h` layout when needed, then verify its loopback health endpoint.
4. Set the Caddy deployment inputs, merge the example route into the existing managed configuration, and validate Caddy before reload.
5. Verify the public health route, static shell, mobile viewport, logs, and service restart behavior.
6. Roll back by restoring the previous static release directory and backend binary, then reload only after validation.

Caddy and service changes affect the shared host and therefore require an explicit operator-approved deployment step; repository examples are not installed automatically.

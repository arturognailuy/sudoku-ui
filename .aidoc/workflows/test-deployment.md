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

Caddy reads the public site address from `SUDOKU_SITE_ADDRESS`, serves `dist/`, and proxies `/api/*` plus `/healthz` to `127.0.0.1:8080`. A user service runs the built `sudoku api` process on that loopback address with a private state directory. The hostname and installation paths are deployment inputs rather than repository-owned product configuration.

## Deployment Workflow

1. Run all quality and browser E2E gates.
2. Build the backend binary and run `npm ci && npm run build` in this repository.
3. Install the example user service with environment-specific absolute paths, then verify its loopback health endpoint.
4. Merge the example Caddy route into the existing managed configuration and validate Caddy before reload.
5. Verify the public health route, static shell, mobile viewport, logs, and service restart behavior.
6. Roll back by restoring the previous static release directory and backend binary, then reload only after validation.

Caddy and service changes affect the shared host and therefore require an explicit operator-approved deployment step; repository examples are not installed automatically.

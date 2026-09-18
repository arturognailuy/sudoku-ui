---
domain: Workflows
status: Active
entry_points:
  - deploy/Caddyfile.example
dependencies:
  - .aidoc/architecture/web-client.md
  - .aidoc/designs/deployment-hardening.md
  - .aidoc/designs/e2e-scenarios.md
---

# Deployment Workflow

The deployment workflow serves a static frontend and proxies the Go API through one operator-configured origin and mount. It supports ad hoc branch previews and trusted default-branch installations without committing environment details.

## Related Docs

| Document                                                | Relationship                                         |
| ------------------------------------------------------- | ---------------------------------------------------- |
| [Architecture](../architecture/web-client.md)           | Browser/backend trust boundary                       |
| [Deployment design](../designs/deployment-hardening.md) | Artifact, mount, access-policy, and failure contract |
| [Roadmap](../designs/roadmap.md)                        | Preview and default-branch delivery sequence         |
| [E2E scenarios](../designs/e2e-scenarios.md)            | Build and browser verification                       |

## Why Same-Origin Routing Exists

Same-origin routing keeps browser asset, API, health, and refresh behavior under one normalized mount while the Go API remains on a private listener. The browser bundle needs no backend address, transport credential, or host topology.

## Deployment Inputs

`SUDOKU_SITE_ADDRESS` selects the operator's site, `SUDOKU_UI_ROOT` selects the staged static directory, and `SUDOKU_MOUNT_PATH` selects an origin root or absolute prefix without a trailing slash. The frontend build receives the same mount value used by reverse-proxy matchers.

The backend listener is a host input in the installed reverse-proxy configuration. `deploy/Caddyfile.example` uses a generic loopback example; operators may choose another private listener without changing browser code or committing the live value.

Authentication is optional host policy. Operators may wrap the mounted shell and API with reverse-proxy authentication, a VPN, an allowlist, or another supported boundary; credentials and policy are not build inputs and never enter the JavaScript bundle.

## What Runs

The static client has no application service. The reverse proxy serves `SUDOKU_UI_ROOT`, keeps path-prefix refreshes inside the mount, and forwards only the mount-scoped API and health routes to the backend.

The canonical [backend service example](https://github.com/gnailuy/sudoku/blob/main/deploy/sudoku-api.service.example) demonstrates a loopback API with private XDG data and recovery roots. Operators choose release and state locations appropriate to their host while keeping mutable state outside application artifacts.

## Branch Preview Workflow

1. Select successful frontend and backend artifacts from the active development branches, falling back to the repositories' default branches when needed.
2. Run repository quality gates and verify artifact checksums.
3. Build or select the frontend artifact with the preview's private mount input.
4. Stage both artifacts away from the active pair, start the backend on its private listener, and verify health plus session creation.
5. Select the staged pair, then run desktop and phone gameplay smoke checks and inspect page, request, and console errors.
6. Leave or restore the previous pair if any verification fails.

The branch preview is intentionally ad hoc. Repository automation, durable availability, and automatic branch tracking are not required; branch selection and the preview URL remain private operator state.

## Trusted Artifact Input

Set the repository variable `SUDOKU_MOUNT_PATH` to `/` or an absolute normalized prefix without a trailing slash. After the quality and browser jobs pass on `master`, CI builds exactly that mount and publishes a commit-bound artifact. Operators verify `manifest.json` and every listed checksum before pairing it with a backend artifact; no secret or destination topology is a build input.

## Default-Branch Workflow

1. Accept only successful trusted default-branch artifacts; never deploy untrusted pull-request artifacts.
2. Pair the newest selected frontend and backend artifacts in private host state and serialize replacement so simultaneous merges cannot race.
3. Verify checksums, mount-relative assets, backend startup, health, and session creation before selecting the pair.
4. Verify the shell and one desktop/mobile gameplay journey after selection.
5. On a shared host, verify representative neighboring routes before and after replacement.
6. Restore the previous Sudoku pair when a Sudoku check fails without changing the neighboring application.

Automatic default-branch replacement may be enabled only after this flow passes end to end. Reverse-proxy, service, credential, and destination-host changes remain operator-owned actions rather than repository side effects.

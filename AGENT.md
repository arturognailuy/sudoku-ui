# Agent Instructions

Start with `.aidoc/INDEX.md` and follow its task-specific reading chains.

- Work on a feature or fix branch; never commit directly to `master`.
- Keep repository code and documentation portable: never commit operator-specific absolute paths, private preview hostnames, or host IP addresses.
- Keep the Go Sudoku HTTP API authoritative for puzzle, session, revision, validation, notes, hints, and history state. Browser-only presentation state must not duplicate game state.
- Update `.aidoc/` whenever architecture, product behavior, deployment, or test coverage changes.
- Run `npm run format:check`, `npm run lint`, `npm test`, `npm run build`, and the applicable black-box `npm run test:e2e` scenarios before review.
- Add or update `.aidoc/designs/e2e-scenarios.md` for feature and bug-fix changes.
- Preserve keyboard access, visible focus, responsive layout, reduced-motion behavior, and color-independent state cues.

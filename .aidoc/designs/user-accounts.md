---
domain: Designs
status: Active
entry_points:
  - src/App.tsx
  - src/api/client.ts
  - src/storage/guestGameRepository.ts
  - src/hooks/useSessionLifecycle.ts
dependencies:
  - .aidoc/architecture/web-client.md
  - .aidoc/designs/game-experience.md
  - .aidoc/designs/e2e-scenarios.md
---

# User Accounts and Guest Experience

Sudoku UI preserves instant guest play while adding optional Google sign-in, cross-device account games, and one explicit save of the browser's current guest game. The browser owns only one sealed guest record and presentation state; the Go API remains authoritative for identity, ownership, gameplay, and claim outcomes.

## Related Docs

| Document                                                                                                     | Relationship                                                            |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| [Web client architecture](../architecture/web-client.md)                                                     | Existing browser/backend ownership boundary                             |
| [Game experience](game-experience.md)                                                                        | Current responsive and accessible interaction contract                  |
| [Browser E2E scenarios](e2e-scenarios.md)                                                                    | Black-box acceptance catalog                                            |
| [Sudoku backend account design](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/user-accounts.md) | Canonical identity, sealed document, API, persistence, and threat model |

## Why the Guest-First Experience Exists

A new player must reach a puzzle without an account wall. Sign-in explains the added value—saving and continuing on other devices—without implying that local play already roams or that identity is required for the core game.

The one-guest-game rule keeps anonymous continuity understandable. A guest has one resumable game and no My games page; starting another game replaces that local game after confirmation instead of creating a hidden browser library.

## Browser Ownership Boundary

IndexedDB contains at most one guest record with a fixed application key. The record stores the backend-sealed document, its non-authoritative display snapshot, schema metadata needed to reject unsupported local records, and timer presentation state; the browser never opens, edits, or derives authoritative gameplay from the sealed bytes.

Every guest action sends the latest sealed document and expected revision to the explicit guest endpoint. The browser renders the returned authoritative snapshot and atomically replaces the complete IndexedDB record only after success. Failed actions retain the last confirmed guest record and present a named retry.

Theme and preferred difficulty may remain in ordinary browser storage. Google tokens, application session tokens, user identifiers, account game state, and claim fingerprints never enter localStorage, sessionStorage, or IndexedDB; the authenticated session is an HttpOnly cookie owned by the backend.

## Welcome and Guest Play

The welcome surface keeps difficulty and Play as the primary path. A quiet Sign in action uses concise copy such as “Save and continue on other devices” and remains visually secondary to starting a game.

A restored guest game opens directly after a neutral loading state and shows a compact local-only status. Clearing browser data removes that game, and the interface states this limitation without alarm. No guest list, recent-games section, import affordance, or background account claim appears before login.

Starting a new guest game while one is active uses the existing confirmation pattern. The new sealed document replaces the old IndexedDB record only after successful creation; cancellation or transport failure preserves the existing game.

## Sign-In and Return

Sign in begins through a same-origin backend route and leaves OAuth state, PKCE, nonce, provider tokens, and callback validation outside React. The browser may provide only an allowlisted relative return location so successful sign-in returns to the same game surface without an open redirect.

The callback recovery path first asks the backend for current account state, then reloads the unchanged local guest record. Sign-in never mutates or removes guest data and never opens account setup over the puzzle.

If a guest game exists after authentication, the game surface offers one explicit “Save this game to my account” action. No other browser data is scanned or uploaded, and the action appears only for the current guest record.

## Claim Experience

Claim sends the current sealed document to the dedicated backend endpoint and keeps the guest board visible in a bounded saving state. The browser deletes the IndexedDB record only after the backend returns the owned account game; it then adopts the returned account game identifier and authoritative snapshot.

A retry after an uncertain response is safe because the backend claim is idempotent. Cancellation, validation failure, authentication expiry, or transport failure preserves the guest record and offers a concrete retry or sign-in action without creating a second local copy.

After claim, the interface communicates that the game is saved to the account and available on other devices. The save action disappears, and later gameplay uses account-game endpoints only; mode never changes merely because the session cookie appeared.

## Authenticated Experience

An authenticated player who starts a puzzle creates an account-owned game immediately. My games lists only that user's authoritative in-progress and completed games with Resume or View and confirmation-gated Delete; the browser does not merge API results with any guest list.

Account controls expose the current profile, Sign out, revoke-all-sessions, and account deletion in a compact dedicated surface. Sign out returns to the welcome surface while leaving account games on the server; a separately retained guest record, possible only after an interrupted or declined claim, remains local and distinct.

Account deletion clearly names that identities, sessions, and owned games are removed while the shared puzzle catalog is unaffected. Destructive controls use the established accessible dialog pattern, safe initial focus, Escape dismissal, explicit names, and focus restoration.

## Interaction and Accessibility Constraints

Account loading, login return, claim, game deletion, logout, and account deletion use named status and error regions without exposing provider or server internals. Focus moves to a meaningful heading after navigation, while dialogs trap and restore focus consistently with existing game confirmations.

Authenticated and guest gameplay preserve the current board geometry, keyboard shortcuts, reduced-motion behavior, color-independent cues, and independent keyboard, mouse, and touchscreen paths. Account controls remain reachable and readable at desktop and phone widths without displacing the board's primary controls.

## Failure and Storage Policy

An unreadable, tampered, expired, or unsupported guest document produces a recoverable explanation and a confirmation-gated option to discard only that local record. The UI never invents a snapshot, silently starts another game, or uploads unrelated browser data.

IndexedDB eviction and explicit browser-data deletion are accepted guest-loss boundaries. Account games remain durable until the user deletes a game or account; idle web-session expiry prompts sign-in and must not erase an unclaimed guest record.

## Acceptance Boundary

The implemented client foundation mirrors every sealed-guest, login, current-account, session-revocation, account-game, claim, and account-deletion route in the backend contract. Unit acceptance proves nested revisioned guest actions, mount-aware login returns, same-origin application cookies, request-proof headers on authenticated mutations, encoded account-game identifiers, and body-free success responses. `GuestGameRepository` unit acceptance proves one fixed IndexedDB record, atomic replacement, explicit clearing, and rejection of unsupported schema versions; `fake-indexeddb` supplies only the deterministic test implementation and is absent from the browser bundle.

Browser acceptance remains responsible for proving one guest survives refresh and browser restart, a new guest replaces rather than accumulates records, clearing IndexedDB removes only guest state, and failed mutations or claims preserve the last confirmed record. Storage inspection proves no Google or application token enters script-readable storage.

Coordinated acceptance proves login returns to the current guest game, claim imports exactly that game once, authenticated starts appear in My games across a second browser, another user cannot access them, and logout, session revocation, game deletion, and account deletion work. Existing responsive gameplay and accessibility journeys remain green on desktop and phone through keyboard, mouse, and touchscreen input.

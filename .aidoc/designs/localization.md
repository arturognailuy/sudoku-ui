---
domain: Designs
status: Active
entry_points:
  - src/App.tsx
  - src/api/client.ts
  - src/api/types.ts
dependencies:
  - .aidoc/architecture/web-client.md
  - .aidoc/designs/game-experience.md
  - .aidoc/designs/e2e-scenarios.md
---

# Web Localization

The Sudoku web client provides complete English, Simplified Chinese, Traditional Chinese, Brazilian Portuguese, Spanish, Japanese, Korean, French, German, Russian, Arabic, Indonesian, Hindi, Italian, Turkish, Vietnamese, and Ukrainian presentation. The browser owns locale selection and translated presentation while the Go API remains locale-neutral and supplies stable message descriptors with plain-English fallback text.

## Related Docs

| Document                                                                                                             | Relationship                                                              |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Architecture](../architecture/web-client.md)                                                                        | Browser/backend ownership and persistence boundary                        |
| [Game experience](game-experience.md)                                                                                | Complete visible and accessible product surface to localize               |
| [E2E scenarios](e2e-scenarios.md)                                                                                    | Browser and real-stack acceptance owner                                   |
| [Backend localization contract](https://github.com/gnailuy/sudoku/blob/main/.aidoc/designs/localization-contract.md) | Proposed message IDs, typed arguments, and English fallback wire contract |
| `src/api/types.ts`                                                                                                   | Generated-compatible descriptor and argument unions                       |
| `src/components/`                                                                                                    | Visible and accessible presentation surfaces                              |

## Product Scope

The production release contains seventeen complete catalogs:

- English (`en`), the source and fallback locale;
- Simplified Chinese (`zh-Hans`);
- Traditional Chinese (`zh-Hant`);
- Brazilian Portuguese (`pt-BR`);
- Spanish (`es`);
- Japanese (`ja`); and
- Korean (`ko`);
- French (`fr`);
- German (`de`);
- Russian (`ru`);
- Arabic (`ar`);
- Indonesian (`id`);
- Hindi (`hi`);
- Italian (`it`);
- Turkish (`tr`);
- Vietnamese (`vi`); and
- Ukrainian (`uk`).

Completeness means the same player journey is available in every locale: welcome, difficulty selection, active game, board labels, controls, shortcuts, candidates, hints, errors, loading and transaction states, confirmations, pause, completion, account entry, My games, account settings, and assistive announcements. A partially translated surface is not shippable.

The line CLI and TUI remain English-only and belong to the backend design. This client does not send its locale to the API and does not ask the server to translate responses.

## Localization Runtime

Use FormatJS through `react-intl`. ICU MessageFormat supplies named interpolation, plural/select behavior, and translator-controlled argument order. A repository-owned wrapper exposes typed message IDs and formatting helpers so components do not call catalog internals or assemble sentences from fragments.

Catalogs are organized by stable product domains rather than component filenames: `common`, `welcome`, `game`, `hints`, `account`, `errors`, and `accessibility`. Moving a component does not rename its messages. IDs use lowercase dotted names and describe meaning rather than English wording or layout.

English source messages live in the same catalog format as every translated locale. There is no parallel hard-coded English path. Development and tests fail on a missing ID, invalid ICU syntax, missing or extra named arguments, or catalog drift. Production falls back to English only for a valid known ID that is absent from a selected catalog; release validation forbids that state for every supported catalog.

## Locale Selection and Persistence

The header exposes one compact language control on every welcome, game, loading, completion, and account surface. Its choices are:

- Auto (the automatic browser-language choice);
- English;
- 简体中文;
- 繁體中文;
- Português (Brasil);
- Español;
- 日本語; and
- 한국어;
- Français;
- Deutsch;
- Русский;
- العربية;
- Bahasa Indonesia;
- हिन्दी;
- Italiano;
- Türkçe;
- Tiếng Việt; and
- Українська.

Language names are self-named so a player can recover after choosing an unfamiliar locale. Auto remains first; the production languages then use one stable alphabetical order by their English language names, independent of the currently selected locale. The automatic language choice is visibly named Auto, while the neighboring automatic appearance choice is named System to match its computer icon and operating-system behavior. The native menu keeps every complete self-name, including Português (Brasil), while the closed control uses an approved compact self-name when needed, such as Português, to preserve header space without hiding the exact choice. The closed value is visually centered within the control rather than biased by the disclosure arrow. Pointer selection dismisses the native selector and its transient focus treatment; keyboard selection retains visible focus and exposes the current selection and expanded state without relying on color.

The browser persists the explicit preference as `auto`, `en`, `zh-Hans`, `zh-Hant`, `pt-BR`, `es`, `ja`, `ko`, `fr`, `de`, `ru`, `ar`, `id`, `hi`, `it`, `tr`, `vi`, or `uk` in a versioned local preference key. It is a global presentation preference, not game state, account data, or history. Changing language updates the current surface immediately without a reload, API request, timer interruption, board mutation, or loss of focus context.

Browser negotiation reads `navigator.languages` in order and resolves the first recognized language:

- English tags select `en`, so a primary English browser preference wins over a later installed Chinese language pack;
- `zh-TW`, `zh-HK`, and `zh-MO` select `zh-Hant`;
- `zh-CN`, `zh-SG`, and bare `zh` select `zh-Hans`;
- explicit `zh-Hans` or `zh-Hant` script tags select themselves; and
- Portuguese tags select `pt-BR`;
- Spanish tags select `es`;
- Japanese tags select `ja`;
- Korean tags select `ko`;
- French, German, Russian, Arabic, Indonesian, Hindi, Italian, Turkish, Vietnamese, and Ukrainian tags select `fr`, `de`, `ru`, `ar`, `id`, `hi`, `it`, `tr`, `vi`, and `uk`, respectively; and
- all other values select `en`.

The app listens for browser language changes only while Auto is selected. An explicit choice ignores later browser preference changes until Auto is restored.

`document.documentElement.lang` always reflects the resolved locale. Direction comes from locale metadata: Arabic sets right-to-left document direction, while every other production locale remains left-to-right. Date, number, and list formatting use `Intl` with the resolved locale; Sudoku coordinates, digits, timers, and product identifiers retain their defined domain format unless the catalog message explicitly formats them.

## API Message Rendering

An API message descriptor contains a stable `id`, closed typed `arguments`, and a complete English `text` fallback. The client validates the entire descriptor before formatting it.

For a known ID with valid arguments, the browser renders the selected catalog message and ignores `text`. For an unknown ID or a catalog-version mismatch, it displays the backend's bounded English `text` so the action remains understandable. For a malformed descriptor, it displays the client's localized generic failure and never serializes raw response data into the page.

Typed backend arguments map to ICU values through one adapter. Cell, candidate, row, column, box, difficulty, and strategy arguments use locale-aware product formatters rather than preformatted backend prose. The adapter does not infer Sudoku meaning from an ID, parse fallback text, or reconstruct a hint from scene metadata.

Hint scenes, targets, links, marks, effects, plan identity, and step order remain unchanged. Literal narration chunks become localizable message descriptors; digit and target chunks remain typed. The hint renderer may reorder localized words around those semantic references, but it cannot move reasoning or conclusion selection out of the backend.

Known API error descriptors map through the same catalog. Stable error codes still drive retry and control behavior. The player sees localized copy for known failures, English fallback for a newer unknown descriptor, and a localized generic message for malformed or unsafe responses.

## UI String Ownership

Every authored player-facing string moves behind the localization boundary, including:

- text nodes, headings, button labels, dialog copy, status text, empty states, and notices;
- `aria-label`, `aria-description`, live-region announcements, validation explanations, focus-transition context, and hidden screen-reader text;
- difficulty and strategy display names, hint titles, step messages, legends, target descriptions, and keyboard help;
- loading, saving, claiming, restarting, refreshing, undoing, redoing, retry, and destructive-confirmation states; and
- document title, metadata under application control, account labels, game summaries, and elapsed-time phrasing.

Brand names, personal profile data, email addresses, opaque game IDs, and server-provided user content are not translated. CSS class names, test IDs, log messages, internal error details, and analytics-free diagnostics are not catalog entries.

Components request complete messages, not fragments. Translators control word order and plurality; code does not concatenate translated nouns, punctuation, or coordinates. Reusable labels such as difficulty and strategy names have one catalog owner and are referenced by stable domain IDs.

## Chinese Content Rules

Simplified and Traditional Chinese are independent reviewed catalogs, not automated character conversion at runtime. They may share source tooling, but each final message is translator-owned because terminology, punctuation, idiom, and accessibility phrasing can differ beyond character forms.

Sudoku terminology is consistent within each catalog. Strategy names that are customarily retained in Latin form may keep that form with a Chinese explanation where the product needs one; the catalog, not code, owns that choice. Full-width Chinese punctuation is used in sentences, while stable keyboard keys, plan identifiers, and compact board coordinates remain unchanged.

Layouts do not assume Chinese is always shorter than English. Controls permit bounded growth, dialogs wrap without hiding actions, and accessible names remain complete even when visible labels use an approved compact form.

## Terminology Glossary

| Locale    | Puzzle        | Board     | Candidate | Hint   | Notes | Row / column / box      |
| --------- | ------------- | --------- | --------- | ------ | ----- | ----------------------- |
| `en`      | puzzle        | board     | candidate | hint   | notes | row / column / box      |
| `zh-Hans` | 数独          | 棋盘      | 候选数    | 提示   | 笔记  | 行 / 列 / 宫            |
| `zh-Hant` | 數獨          | 棋盤      | 候選數    | 提示   | 筆記  | 列 / 欄 / 宮            |
| `pt-BR`   | quebra-cabeça | tabuleiro | candidato | dica   | notas | linha / coluna / bloco  |
| `es`      | rompecabezas  | tablero   | candidato | pista  | notas | fila / columna / bloque |
| `ja`      | パズル        | 盤面      | 候補      | ヒント | メモ  | 行 / 列 / ブロック      |
| `ko`      | 퍼즐          | 보드      | 후보      | 힌트   | 메모  | 행 / 열 / 박스          |

Portuguese, Spanish, Japanese, Korean, French, German, Russian, Arabic, Indonesian, Hindi, Italian, Turkish, Vietnamese, and Ukrainian retain the canonical English strategy names while localizing every surrounding explanation and accessibility phrase. This keeps the 23-strategy vocabulary aligned with external Sudoku references without leaking unrelated English UI copy.

## Accessibility and Responsive Behavior

Language switching preserves the focused semantic control when it still exists. If a translated state transition replaces that control, focus follows the same existing game-experience rule as the English surface. Live regions announce the new language once and do not replay the complete page.

Every locale retains keyboard access, roving board focus, non-color states, reduced motion, touch targets, and screen-reader equivalence. Candidate and hint target names must remain unambiguous in every production locale at desktop and phone widths. Locale changes cannot reopen dialogs, close hints, reset selection, alter Notes or Candidates state, or restart presentation time.

A pseudo-locale expands and decorates source messages to expose clipping, concatenation, and untranslated literals during development. It is test-only and never appears in the production selector. Screenshot acceptance covers every production locale plus pseudo-locale expansion so both compact and wide translations exercise the responsive layout.

## Catalog and Type Workflow

One extraction or registry command produces the canonical message-ID and argument manifest from repository-owned source declarations. CI compares every production catalog against that manifest and rejects missing IDs, extra stale IDs, argument-name drift, invalid ICU, and duplicate ownership.

The backend contract fixture contributes API-owned message IDs and argument schemas. The frontend manifest combines those IDs with browser-owned messages without copying backend English as frontend source authority. Coordinated changes update generated TypeScript unions, every production catalog, and representative descriptor fixtures together.

Catalog files remain reviewable text in the repository. Generated runtime bundles are build artifacts rather than canonical sources. No runtime network fetch is required for initial supported locales; locale data is code-split if measurement justifies it, with English available synchronously as the guaranteed fallback.

## Implementation Boundary

`src/i18n/` owns locale negotiation, persisted preference, catalog validation, pseudo-localization, typed browser message references, and API descriptor formatting. Browser-authored status, retry, and error state stores typed catalog references rather than rendered English, so a locale change immediately rerenders existing feedback. The hint renderer consumes API-authored summary, step, and narration descriptors without retaining literal narration or parallel prose paths.

All seventeen production catalogs and the backend-owned descriptor manifest change together. The development-only pseudo-locale remains available through the explicit test query but is absent from the production selector and persisted preference vocabulary.

## Acceptance

Mechanical acceptance runs formatting, lint, unit tests, production build, documentation validation, catalog validation, generated-type checks, browser E2E, and the real React-plus-Go full-stack lane.

Semantic acceptance proves:

- every visible and assistive product message is owned by exactly one catalog entry;
- all seventeen production catalogs have identical IDs and argument contracts;
- API descriptors localize without parsing fallback English;
- unknown valid API IDs show bounded English fallback, while malformed descriptors show a localized generic failure;
- Auto and explicit preferences negotiate, persist, react, and update document metadata correctly;
- switching locale preserves authoritative game state, presentation state, timer behavior, focus, and open hint position;
- plural/select and target formatting are correct for representative errors, account summaries, elapsed time, hints, rows, columns, boxes, cells, candidates, strategies, and difficulties; and
- no API request varies by locale or emits `Accept-Language` as a gameplay contract.

Black-box journeys cover welcome, one guest game, one signed-in game, hint preview/application, retryable error, confirmation, completion, and language switching in every production locale: `en`, `zh-Hans`, `zh-Hant`, `pt-BR`, `es`, `ja`, `ko`, `fr`, `de`, `ru`, `ar`, `id`, `hi`, `it`, `tr`, `vi`, and `uk`. Desktop and phone screenshots are captured and inspected for every production locale and pseudo-locale overflow. Accessibility checks verify document language, names, live regions, focus order, and keyboard operation in each production locale.

## Out of Scope

This phase does not translate the line CLI or TUI, localize API responses on the server, store locale in account or game records, translate logs, introduce community translation infrastructure, localize user content, or ship partial language catalogs.

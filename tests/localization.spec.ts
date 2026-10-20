import { expect, test, type Page, type TestInfo } from '@playwright/test';

const puzzle =
  '.56.4.7...1.5....6.......19...9.....3.58..2...4...6...1.....93....4....22.3.1....';

const gridFromPuzzle = () =>
  Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 9 }, (_, column) => {
      const value = puzzle[row * 9 + column];
      return value === '.' ? 0 : Number(value);
    }),
  );

const emptyGrid = <T>(value: () => T) =>
  Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => value()));

const descriptor = (id: string, text: string) => ({
  id,
  arguments: [],
  text,
});

const mockLocalizedGameApi = async (page: Page) => {
  let gameRequests = 0;
  let hintRequests = 0;
  let actionRequests = 0;

  await page.route('**/healthz', (route) =>
    route.fulfill({ json: { status: 'healthy' } }),
  );
  await page.route('**/api/v1/account', (route) =>
    route.fulfill({
      status: 401,
      json: {
        error: {
          code: 'unauthenticated',
          message: descriptor(
            'error.account-unauthorized',
            'Sign in required.',
          ),
        },
      },
    }),
  );
  await page.route('**/api/v1/guest/games', (route) => {
    if (route.request().method() !== 'POST') return route.fallback();
    gameRequests += 1;
    return route.fulfill({
      status: 201,
      json: {
        document: `localized-game-${gameRequests}`,
        revision: 0,
        actual_difficulty: 'easy',
        snapshot: {
          givens: gridFromPuzzle(),
          values: gridFromPuzzle(),
          invalid: emptyGrid(() => false),
          candidates: emptyGrid(() => [] as number[]),
          mistakes: 0,
          status: 'in-progress',
          can_undo: false,
          can_redo: false,
        },
      },
    });
  });
  await page.route('**/api/v1/guest/games/hint', (route) => {
    hintRequests += 1;
    return route.fulfill({
      json: {
        revision: 0,
        hint: {
          plan_id: 'a'.repeat(64),
          kind: 'strategy',
          title: descriptor('strategy.hidden-single.name', 'Hidden single'),
          strategy: {
            id: 'hidden-single',
            name: descriptor('strategy.hidden-single.name', 'Hidden single'),
            grade: 'easy',
            grade_name: descriptor('difficulty.easy.name', 'Easy'),
          },
          summary: {
            id: 'hint.strategy.summary',
            arguments: [
              { name: 'steps', kind: 'count', count: 2 },
              {
                name: 'strategy',
                kind: 'strategy',
                strategy: 'hidden-single',
              },
            ],
            text: 'Only one value can fit in the highlighted row.',
          },
          steps: [
            {
              id: 'observe-row',
              kind: 'observe',
              message: descriptor(
                'hint.strategy.observe',
                'Scan row 1 and compare the remaining candidates.',
              ),
              marks: [{ target: { kind: 'row', index: 1 }, role: 'premise' }],
              nodes: [],
              links: [],
            },
            {
              id: 'conclude-cell',
              kind: 'conclude',
              message: {
                id: 'hint.strategy.conclude',
                arguments: [
                  {
                    name: 'strategy',
                    kind: 'strategy',
                    strategy: 'hidden-single',
                  },
                ],
                text: 'Cell R1C1 must be 1.',
              },
              marks: [
                {
                  target: { kind: 'cell', row: 1, column: 1 },
                  role: 'conclusion',
                },
              ],
              nodes: [],
              links: [],
              effect: {
                kind: 'place-value',
                placement: { row: 1, column: 1, value: 1 },
              },
            },
          ],
          conclusion: {
            kind: 'place-value',
            placement: { row: 1, column: 1, value: 1 },
          },
        },
      },
    });
  });
  await page.route('**/api/v1/guest/games/actions', (route) => {
    actionRequests += 1;
    return route.fulfill({
      status: 500,
      body: 'Unexpected action in locale test',
    });
  });

  return {
    gameRequests: () => gameRequests,
    hintRequests: () => hintRequests,
    actionRequests: () => actionRequests,
  };
};

const selectLocaleWithoutMovingFocus = async (
  page: Page,
  locale: 'auto' | 'en' | 'zh-Hans' | 'zh-Hant' | 'pt-BR' | 'es' | 'ja' | 'ko',
) => {
  await page.locator('.language-control select').evaluate((select, value) => {
    const control = select as HTMLSelectElement;
    control.value = value;
    control.dispatchEvent(new Event('change', { bubbles: true }));
  }, locale);
};

const screenshotPath = (testInfo: TestInfo, filename: string) =>
  process.env.SCREENSHOT_DIR
    ? `${process.env.SCREENSHOT_DIR}/${filename}`
    : testInfo.outputPath(filename);

const elapsedSeconds = (value: string | null) => {
  const [minutes, seconds] = (value ?? '0:00').split(':').map(Number);
  return minutes * 60 + seconds;
};

test('selects and persists every production locale, then Browser follows browser language', async ({
  page,
}) => {
  await page.addInitScript(() => {
    let languages = ['zh-TW'];
    Object.defineProperty(navigator, 'languages', {
      configurable: true,
      get: () => languages,
    });
    Object.defineProperty(window, '__setTestLanguages', {
      configurable: true,
      value: (next: string[]) => {
        languages = next;
        window.dispatchEvent(new Event('languagechange'));
      },
    });
  });
  const api = await mockLocalizedGameApi(page);
  await page.goto('/');

  const locale = page.locator('.language-control select');
  await expect(locale).toHaveValue('auto');
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-Hant');
  await expect(page.locator('#welcome-title')).toHaveText('選擇難度');

  for (const selection of [
    { preference: 'en', lang: 'en', heading: 'Choose your difficulty' },
    { preference: 'zh-Hans', lang: 'zh-Hans', heading: '选择难度' },
    { preference: 'zh-Hant', lang: 'zh-Hant', heading: '選擇難度' },
    {
      preference: 'pt-BR',
      lang: 'pt-BR',
      heading: 'Escolha sua dificuldade',
    },
    { preference: 'es', lang: 'es', heading: 'Elige tu dificultad' },
    { preference: 'ja', lang: 'ja', heading: '難易度を選択してください' },
    { preference: 'ko', lang: 'ko', heading: '난이도를 선택하세요' },
  ] as const) {
    await locale.selectOption(selection.preference);
    await expect(page.locator('html')).toHaveAttribute('lang', selection.lang);
    await expect(page.locator('#welcome-title')).toHaveText(selection.heading);
    await expect
      .poll(() => page.evaluate(() => localStorage.getItem('sudoku.locale.v1')))
      .toBe(selection.preference);
    await page.reload();
    await expect(page.locator('.language-control select')).toHaveValue(
      selection.preference,
    );
    await expect(page.locator('html')).toHaveAttribute('lang', selection.lang);
    await expect(page.locator('#welcome-title')).toHaveText(selection.heading);
  }

  await locale.selectOption('auto');
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-Hant');
  await page.evaluate(() => {
    const setLanguages = (
      window as typeof window & {
        __setTestLanguages: (value: string[]) => void;
      }
    ).__setTestLanguages;
    setLanguages(['zh-CN']);
  });
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-Hans');
  await expect(page.locator('#welcome-title')).toHaveText('选择难度');
  await expect(locale).toHaveValue('auto');
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('sudoku.locale.v1')))
    .toBe('auto');

  expect(api.gameRequests()).toBe(0);
  expect(api.hintRequests()).toBe(0);
  expect(api.actionRequests()).toBe(0);
});

test('prefers the browser primary English locale over an installed Chinese language', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'languages', {
      configurable: true,
      get: () => ['en-US', 'zh-CN'],
    });
  });
  await mockLocalizedGameApi(page);
  await page.goto('/');

  await expect(page.locator('.language-control select')).toHaveValue('auto');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('#welcome-title')).toHaveText(
    'Choose your difficulty',
  );
});

test('shows the full Portuguese label, distinguishes browser language from theme Auto, and clears pointer focus', async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockLocalizedGameApi(page);
  await page.goto('/');

  const locale = page.locator('.language-control select');
  await expect(locale).toHaveValue('auto');
  await expect(locale.locator('option:checked')).toHaveText('Browser');
  await expect(page.locator('.theme-control button').first()).toHaveText(
    'Auto',
  );

  await locale.click();
  await locale.selectOption('pt-BR');
  await expect(locale.locator('option:checked')).toHaveText(
    'Português (Brasil)',
  );
  await expect(locale).not.toBeFocused();
  await expect
    .poll(() => locale.evaluate((element) => element.clientWidth))
    .toBeGreaterThanOrEqual(156);
  await page.screenshot({
    path: screenshotPath(testInfo, 'language-selector-phone.png'),
    fullPage: true,
  });
});

test('switches locale in place without gameplay requests or losing game, presentation, timer, focus, or hint step', async ({
  page,
}) => {
  const api = await mockLocalizedGameApi(page);
  await page.goto('/');
  await page.locator('.welcome .primary-action').click();
  await expect(page.getByRole('grid')).toBeVisible();

  const selectedCell = page.locator('.game-cell').first();
  await selectedCell.click();
  await page.locator('.tool-group--modes button').first().click();
  await expect(page.locator('.number-pad')).toHaveClass(/number-pad--notes/);
  await expect(page.locator('.elapsed-time')).toHaveText('0:01', {
    timeout: 2500,
  });

  await page.locator('.hint-button').click();
  await expect(page.locator('.hint-panel')).toBeVisible();
  await page.locator('.hint-navigation .primary-action').click();
  await expect(page.locator('.hint-step__count')).toContainText('2');
  const closeHint = page.locator('.hint-close');
  await closeHint.focus();
  const timeBeforeSwitch = elapsedSeconds(
    await page.locator('.elapsed-time').textContent(),
  );
  const requestCounts = {
    games: api.gameRequests(),
    hints: api.hintRequests(),
    actions: api.actionRequests(),
  };

  await selectLocaleWithoutMovingFocus(page, 'zh-Hans');

  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-Hans');
  await expect(page.locator('#game-title')).toHaveText('简单谜题');
  await expect(page.getByRole('grid')).toBeVisible();
  await expect(page.locator('.hint-step__count')).toContainText('2');
  await expect(page.locator('.hint-close')).toBeFocused();
  await expect
    .poll(async () =>
      elapsedSeconds(await page.locator('.elapsed-time').textContent()),
    )
    .toBeGreaterThanOrEqual(timeBeforeSwitch);
  expect(api.gameRequests()).toBe(requestCounts.games);
  expect(api.hintRequests()).toBe(requestCounts.hints);
  expect(api.actionRequests()).toBe(requestCounts.actions);

  await page.locator('.hint-close').click();
  await expect(page.locator('.game-cell')).toHaveCount(81);
  await expect(selectedCell).toHaveText('');
  await expect(page.locator('.number-pad')).toHaveClass(/number-pad--notes/);
  await expect(
    page.locator('.tool-group--modes button').nth(1),
  ).toHaveAttribute('aria-pressed', 'true');
  expect(requestCounts).toEqual({ games: 1, hints: 1, actions: 0 });
});

const visualLocales = [
  { name: 'en', preference: 'en', query: '' },
  { name: 'zh-Hans', preference: 'zh-Hans', query: '' },
  { name: 'zh-Hant', preference: 'zh-Hant', query: '' },
  { name: 'pt-BR', preference: 'pt-BR', query: '' },
  { name: 'es', preference: 'es', query: '' },
  { name: 'ja', preference: 'ja', query: '' },
  { name: 'ko', preference: 'ko', query: '' },
  { name: 'pseudo', preference: 'auto', query: '?locale=pseudo' },
] as const;

const visualViewports = [
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'phone', width: 390, height: 844 },
] as const;

for (const viewport of visualViewports) {
  test(`keeps the language, appearance, and account controls the same height on ${viewport.name}`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize(viewport);
    await mockLocalizedGameApi(page);
    await page.goto('/');

    const heights = await Promise.all(
      [
        page.locator('.language-control select'),
        page.locator('.theme-control'),
        page.locator('.header-account-action'),
      ].map(async (control) => (await control.boundingBox())?.height),
    );
    await page.screenshot({
      path: screenshotPath(testInfo, `header-controls-${viewport.name}.png`),
      fullPage: true,
    });

    expect(heights.every((height) => height !== undefined)).toBe(true);
    expect(
      Math.max(...(heights as number[])) - Math.min(...(heights as number[])),
    ).toBeLessThanOrEqual(1);
  });
}

for (const locale of visualLocales) {
  for (const viewport of visualViewports) {
    test(`renders ${locale.name} welcome, game, and hint without horizontal overflow on ${viewport.name}`, async ({
      page,
    }, testInfo) => {
      await page.setViewportSize(viewport);
      await page.addInitScript((preference) => {
        localStorage.setItem('sudoku.locale.v1', preference);
      }, locale.preference);
      await mockLocalizedGameApi(page);
      await page.goto(`/${locale.query}`);

      await expect(page.locator('html')).toHaveAttribute(
        'lang',
        locale.name === 'pseudo' ? 'en-XA' : locale.name,
      );
      if (locale.name === 'pseudo') {
        await expect(page.locator('#welcome-title')).toContainText('⟦');
      }
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        )
        .toBe(true);
      await page.screenshot({
        path: screenshotPath(
          testInfo,
          `localization-${locale.name}-${viewport.name}-welcome.png`,
        ),
        fullPage: true,
      });

      await page.locator('.welcome .primary-action').click();
      await expect(page.getByRole('grid')).toBeVisible();
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        )
        .toBe(true);
      await page.screenshot({
        path: screenshotPath(
          testInfo,
          `localization-${locale.name}-${viewport.name}-game.png`,
        ),
        fullPage: true,
      });

      await page.locator('.hint-button').click();
      await expect(page.locator('.hint-panel')).toBeVisible();
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        )
        .toBe(true);
      await page.screenshot({
        path: screenshotPath(
          testInfo,
          `localization-${locale.name}-${viewport.name}-hint.png`,
        ),
        fullPage: true,
      });
    });
  }
}

import { expect, test, type Page } from '@playwright/test';

const puzzle =
  '.56.4.7...1.5....6.......19...9.....3.58..2...4...6...1.....93....4....22.3.1....';

const gridFromPuzzle = () =>
  Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 9 }, (_, column) => {
      const value = puzzle[row * 9 + column];
      return value === '.' ? 0 : Number(value);
    }),
  );

const emptyBooleanGrid = () =>
  Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => false));
const emptyDigitSetGrid = () =>
  Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => [] as number[]),
  );

const mockGameApi = async (page: Page) => {
  const givens = gridFromPuzzle();
  const values = gridFromPuzzle();
  const invalid = emptyBooleanGrid();
  const notes = emptyDigitSetGrid();
  let revision = 0;
  let canUndo = false;
  let actionRequests = 0;
  let sessionRequests = 0;
  let nextValueIsInvalid = true;
  let failNextAction = false;
  let nextStatus: 'in-progress' | 'solved' = 'in-progress';
  let restoreDelayMs = 0;
  const requestedDifficulties: string[] = [];

  await page.route('**/healthz', (route) =>
    route.fulfill({ json: { status: 'healthy' } }),
  );
  await page.route('**/api/v1/sessions', async (route) => {
    if (route.request().method() === 'POST') {
      sessionRequests += 1;
      requestedDifficulties.push(
        (
          route.request().postDataJSON() as {
            source: { difficulty: string };
          }
        ).source.difficulty,
      );
      await route.fulfill({
        status: 201,
        json: {
          id: 'mock-session-id-123456789',
          revision,
          snapshot: {
            givens,
            values,
            invalid,
            notes,
            candidates: emptyDigitSetGrid(),
            status: 'in-progress',
            can_undo: canUndo,
            can_redo: false,
          },
        },
      });
    }
  });
  await page.route(
    '**/api/v1/sessions/mock-session-id-123456789',
    async (route) => {
      if (restoreDelayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, restoreDelayMs));
      }
      await route.fulfill({
        json: {
          id: 'mock-session-id-123456789',
          revision,
          snapshot: {
            givens,
            values,
            invalid,
            notes,
            candidates: emptyDigitSetGrid(),
            status: nextStatus,
            can_undo: canUndo,
            can_redo: false,
          },
        },
      });
    },
  );
  await page.route('**/api/v1/sessions/*/actions', async (route) => {
    actionRequests += 1;
    if (failNextAction) {
      failNextAction = false;
      await route.fulfill({
        status: 503,
        json: { error: { code: 'unavailable', message: 'try later' } },
      });
      return;
    }
    const action = route.request().postDataJSON() as {
      kind: string;
      row?: number;
      column?: number;
      value?: number;
    };
    if (action.kind === 'set-value' && action.row && action.column) {
      values[action.row - 1][action.column - 1] = action.value ?? 0;
      invalid[action.row - 1][action.column - 1] = nextValueIsInvalid;
      canUndo = true;
    }
    if (action.kind === 'toggle-note' && action.row && action.column) {
      notes[action.row - 1][action.column - 1] = [action.value ?? 0];
      canUndo = true;
    }
    if (action.kind === 'clear-value' && action.row && action.column) {
      values[action.row - 1][action.column - 1] = 0;
      invalid[action.row - 1][action.column - 1] = false;
      canUndo = true;
    }
    if (action.kind === 'clear-notes' && action.row && action.column) {
      notes[action.row - 1][action.column - 1] = [];
      canUndo = true;
    }
    revision += 1;
    await route.fulfill({
      json: {
        revision,
        snapshot: {
          givens,
          values,
          invalid,
          notes,
          candidates: emptyDigitSetGrid(),
          status: nextStatus,
          can_undo: canUndo,
          can_redo: false,
        },
        result: {
          action: action.kind,
          changes: [],
          status: nextStatus,
          can_undo: canUndo,
          can_redo: false,
        },
      },
    });
  });

  return {
    actionRequests: () => actionRequests,
    sessionRequests: () => sessionRequests,
    requestedDifficulties: () => requestedDifficulties,
    setNextValueIsInvalid: (value: boolean) => {
      nextValueIsInvalid = value;
    },
    failNextAction: () => {
      failNextAction = true;
    },
    setNextStatus: (value: 'in-progress' | 'solved') => {
      nextStatus = value;
    },
    setRestoreDelay: (milliseconds: number) => {
      restoreDelayMs = milliseconds;
    },
  };
};

const boardGeometry = (page: Page) =>
  page.locator('.game-board').evaluate((board) => {
    const rectangle = (element: Element) => {
      const { x, y, width, height } = element.getBoundingClientRect();
      return [x, y, width, height].map((value) => Number(value.toFixed(3)));
    };
    return {
      board: rectangle(board),
      cells: Array.from(board.children, rectangle),
    };
  });

for (const viewport of [
  { width: 1280, height: 900 },
  { width: 390, height: 844 },
]) {
  test(`plays a backend-backed game at ${viewport.width}px`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize(viewport);
    const api = await mockGameApi(page);
    await page.goto('/');
    await expect(page.locator('.connection')).toHaveText('Game service ready');
    await expect(page.locator('.board-preview span')).toHaveCount(81);
    await expect(page.locator('.board-preview span')).toHaveText(
      Array.from(puzzle, (value) => (value === '.' ? '' : value)),
    );
    if (viewport.width <= 600) {
      await expect(page.locator('.preview-card')).toBeHidden();
    } else {
      await expect(page.locator('.preview-card')).toBeVisible();
    }
    await expect(page.getByText('A real, solvable puzzle')).toHaveCount(0);
    await expect(page.getByText('81 cells · one solution')).toHaveCount(0);
    if (viewport.width > 840) {
      await expect(
        page.evaluate(
          () => document.documentElement.scrollHeight <= window.innerHeight,
        ),
      ).resolves.toBe(true);
    }
    const screenshotIndex = viewport.width > 760 ? 0 : 1;
    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex}.png`
        : testInfo.outputPath(`welcome-preview-${viewport.width}.png`),
      fullPage: true,
    });
    await page.getByRole('button', { name: 'Hard' }).click();
    await page.getByRole('button', { name: 'Play Hard' }).click();

    await expect(
      page.getByRole('heading', { name: 'Your puzzle' }),
    ).toBeVisible();
    await expect(page.getByRole('gridcell')).toHaveCount(81);
    await expect(page.getByText('Hard puzzle ready.')).toBeVisible();
    await expect(
      page.evaluate(() => document.documentElement.scrollHeight <= innerHeight),
    ).resolves.toBe(true);
    await expect(page.getByLabel('Elapsed time')).toHaveText('0:00');
    await expect(page.getByLabel('Elapsed time')).toHaveText('0:01', {
      timeout: 2500,
    });
    const visibleTime = await page.getByLabel('Elapsed time').textContent();
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', {
        configurable: true,
        get: () => true,
      });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await new Promise((resolve) => setTimeout(resolve, 1100));
    await expect(page.getByLabel('Elapsed time')).toHaveText(visibleTime ?? '');
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', {
        configurable: true,
        get: () => false,
      });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await page.getByRole('button', { name: 'Pause' }).click();
    await expect(
      page.getByText('Puzzle paused', { exact: true }),
    ).toBeVisible();
    const pausedTime = await page.getByLabel('Elapsed time').textContent();
    await page.waitForTimeout(1100);
    await expect(page.getByLabel('Elapsed time')).toHaveText(pausedTime ?? '');
    api.setRestoreDelay(250);
    await page.reload();
    await expect(page.getByText('Loading your puzzle…')).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'A clear board. A quieter mind.' }),
    ).toHaveCount(0);
    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex + 6}.png`
        : testInfo.outputPath(`restore-loading-${viewport.width}.png`),
      fullPage: true,
    });
    await expect(
      page.getByText('Puzzle paused', { exact: true }),
    ).toBeVisible();
    api.setRestoreDelay(0);
    await expect(
      page.getByText('Your active puzzle was restored.'),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Resume' }).click();
    await expect(page.getByRole('grid')).toBeVisible();

    const initialGeometry = await boardGeometry(page);
    const firstCell = page.getByRole('gridcell', {
      name: 'Row 1, column 1, empty',
    });
    await expect(firstCell).not.toHaveClass(/game-cell--selected/);
    await page.getByRole('heading', { name: 'Your puzzle' }).click();
    await page.keyboard.press('ArrowRight');
    await expect(firstCell).toBeFocused();
    await expect(firstCell).toHaveClass(/game-cell--selected/);
    await expect(firstCell).not.toHaveClass(/game-cell--peer/);
    await expect(firstCell).not.toHaveClass(/game-cell--matching/);

    const selectedRing = await firstCell.evaluate(
      (cell) => getComputedStyle(cell).boxShadow,
    );
    await page.keyboard.press('ArrowRight');
    const keyboardSelectedCell = page.getByRole('gridcell', {
      name: 'Row 1, column 2, given 5',
    });
    await expect(keyboardSelectedCell).toBeFocused();
    await expect(keyboardSelectedCell).toHaveClass(/game-cell--selected/);
    await expect(keyboardSelectedCell).toHaveCSS('outline-style', 'solid');
    await expect(keyboardSelectedCell).toHaveCSS('outline-width', '3px');
    await expect(keyboardSelectedCell).toHaveCSS(
      'outline-color',
      'rgb(31, 98, 83)',
    );
    await expect(keyboardSelectedCell).toHaveCSS('box-shadow', selectedRing);
    await expect(firstCell).not.toBeFocused();
    await expect(firstCell).not.toHaveClass(/game-cell--selected/);
    await page.keyboard.press('ArrowLeft');
    await expect(firstCell).toBeFocused();
    await expect(firstCell).toHaveClass(/game-cell--selected/);

    let enteredCell = firstCell;
    for (const digit of [1, 2, 3, 4, 5]) {
      await enteredCell.click();
      await page.keyboard.press(String(digit));
      enteredCell = page.getByRole('gridcell', {
        name: `Row 1, column 1, ${digit}, invalid`,
      });
      await expect(enteredCell).toBeVisible();
      await expect(enteredCell).toBeFocused();
      await expect(enteredCell).toHaveClass(/game-cell--invalid/);
      await expect(enteredCell).toHaveAttribute('aria-invalid', 'true');
      await expect(enteredCell).toHaveCSS('outline-style', 'solid');
      await expect(
        enteredCell.locator('.cell-value').evaluate((value) => {
          const marker = getComputedStyle(value, '::after');
          return {
            content: marker.content,
            width: Number.parseFloat(marker.width),
            height: Number.parseFloat(marker.height),
            decoration: getComputedStyle(value).textDecorationLine,
          };
        }),
      ).resolves.toMatchObject({
        content: '""',
        width: expect.any(Number),
        height: expect.any(Number),
        decoration: 'none',
      });
      await expect(
        enteredCell.locator('.cell-value').evaluate((value) => {
          const marker = getComputedStyle(value, '::after');
          return (
            Number.parseFloat(marker.width) >= 11 &&
            Number.parseFloat(marker.height) >= 2 &&
            Number.parseFloat(marker.bottom) > 0
          );
        }),
      ).resolves.toBe(true);
    }
    const requestsAfterValueEntry = api.actionRequests();
    await page.keyboard.press('5');
    await expect.poll(() => api.actionRequests()).toBe(requestsAfterValueEntry);
    await expect(enteredCell).toBeFocused();

    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex + 2}.png`
        : testInfo.outputPath(`invalid-value-${viewport.width}.png`),
      fullPage: true,
    });
    await expect(boardGeometry(page)).resolves.toEqual(initialGeometry);
    await expect(page.getByRole('button', { name: 'Undo' })).toBeEnabled();

    const secondOpenCell = page.getByRole('gridcell', {
      name: 'Row 1, column 4, empty',
    });
    await secondOpenCell.click();
    await expect(secondOpenCell).toHaveClass(/game-cell--selected/);
    await page.getByRole('button', { name: 'Notes off' }).click();
    await page.getByRole('button', { name: 'Enter 2' }).click();
    await expect(secondOpenCell).toContainText('2');
    await expect(
      page.getByRole('button', { name: 'Notes on' }),
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(boardGeometry(page)).resolves.toEqual(initialGeometry);

    await page.getByRole('button', { name: 'Notes on' }).click();
    await enteredCell.click();
    await page.getByRole('button', { name: 'Erase' }).click();
    await expect(
      page.getByRole('gridcell', { name: 'Row 1, column 1, empty' }),
    ).toBeVisible();
    await expect(boardGeometry(page)).resolves.toEqual(initialGeometry);

    const givenFive = page.getByRole('gridcell', {
      name: 'Row 1, column 2, given 5',
    });
    await givenFive.click();
    await expect(givenFive).toHaveClass(/game-cell--selected/);
    await expect(givenFive).not.toHaveClass(/game-cell--peer/);
    await expect(givenFive).not.toHaveClass(/game-cell--matching/);
    const matchingCell = page.locator('.game-cell--matching').first();
    await expect(matchingCell).toBeVisible();
    await expect(matchingCell).not.toHaveClass(/game-cell--selected/);
    await expect(
      matchingCell
        .locator('.cell-value')
        .evaluate(
          (value) => getComputedStyle(value, '::before').backgroundColor,
        ),
    ).resolves.toBe('rgb(200, 224, 214)');

    const editableCells = page.locator('.game-cell:not(.game-cell--given)');
    for (let index = 0; index < 8; index += 1) {
      await editableCells.nth(index).click();
      await page.keyboard.press('7');
    }
    await expect(page.getByRole('button', { name: 'Enter 7' })).toBeEnabled();
    const requestsAfterInvalidDigits = api.actionRequests();
    await editableCells.nth(8).click();
    await page.getByRole('button', { name: 'Enter 7' }).click();
    await expect
      .poll(() => api.actionRequests())
      .toBe(requestsAfterInvalidDigits + 1);

    api.setNextValueIsInvalid(false);
    for (let index = 9; index < 17; index += 1) {
      await editableCells.nth(index).click();
      await page.keyboard.press('7');
    }
    await expect(page.getByRole('button', { name: 'Enter 7' })).toBeDisabled();
    const requestsAfterCompletedDigit = api.actionRequests();
    await page.keyboard.press('7');
    await expect
      .poll(() => api.actionRequests())
      .toBe(requestsAfterCompletedDigit);
    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex + 4}.png`
        : testInfo.outputPath(`completed-digit-${viewport.width}.png`),
      fullPage: true,
    });

    await expect(page.locator('body')).not.toHaveCSS('overflow-x', 'scroll');
  });
}

test('keeps the welcome preview on a portrait tablet', async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 820, height: 1180 });
  await mockGameApi(page);
  await page.goto('/');

  const preview = page.locator('.preview-card');
  await expect(preview).toBeVisible();
  await expect(preview.locator('.board-preview span')).toHaveCount(81);
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-10.png`
      : testInfo.outputPath('welcome-preview-portrait-tablet.png'),
    fullPage: true,
  });
});

test('protects navigation home and supports a new difficulty', async ({
  page,
}, testInfo) => {
  const api = await mockGameApi(page);
  await page.goto('/');
  await expect(page.locator('.connection')).toHaveText('Game service ready');
  await page.getByRole('button', { name: 'Play Easy' }).click();
  await expect.poll(() => api.sessionRequests()).toBe(1);

  await page.getByRole('link', { name: 'Sudoku home' }).click();
  const homeDialog = page.getByRole('alertdialog', {
    name: 'Leave this puzzle',
  });
  await expect(homeDialog).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Keep playing' }),
  ).toBeFocused();
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-9.png`
      : testInfo.outputPath('leave-puzzle-confirmation.png'),
    fullPage: true,
  });
  await page.keyboard.press('Escape');
  await expect(homeDialog).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Sudoku home' })).toBeFocused();
  await expect(page.getByRole('grid')).toBeVisible();

  await page.getByRole('link', { name: 'Sudoku home' }).click();
  await page.getByRole('button', { name: 'Return to front page' }).click();
  await expect(homeDialog).toHaveCount(0);
  await expect(
    page.getByRole('heading', { name: 'A clear board. A quieter mind.' }),
  ).toBeVisible();
  await expect.poll(() => api.sessionRequests()).toBe(1);

  await page.getByRole('button', { name: 'Play Easy' }).click();
  await expect.poll(() => api.sessionRequests()).toBe(2);

  await page.getByRole('button', { name: 'New puzzle' }).click();
  const dialog = page.getByRole('alertdialog', { name: 'Start a new puzzle' });
  await expect(dialog).toBeVisible();
  const keepPlaying = page.getByRole('button', { name: 'Keep playing' });
  const confirmNewPuzzle = page.getByRole('button', {
    name: 'Start new Easy puzzle',
  });
  await expect(keepPlaying).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(confirmNewPuzzle).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('button', { name: 'Easy', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(confirmNewPuzzle).toBeFocused();
  await expect.poll(() => api.sessionRequests()).toBe(2);
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-8.png`
      : testInfo.outputPath('new-puzzle-confirmation.png'),
    fullPage: true,
  });

  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'New puzzle' })).toBeFocused();
  await expect(page.getByRole('grid')).toBeVisible();
  await expect.poll(() => api.sessionRequests()).toBe(2);

  await page.getByRole('button', { name: 'New puzzle' }).click();
  await page.getByRole('button', { name: 'Hard' }).click();
  await page.getByRole('button', { name: 'Start new Hard puzzle' }).click();
  await expect.poll(() => api.sessionRequests()).toBe(3);
  await expect(dialog).toHaveCount(0);
  await expect(page.getByText('Hard puzzle ready.')).toBeVisible();
  expect(api.requestedDifficulties()).toEqual(['easy', 'easy', 'hard']);
});

test('offers retryable service failures and locks solved controls', async ({
  page,
}) => {
  const api = await mockGameApi(page);
  await page.goto('/');
  await expect(page.locator('.connection')).toHaveText('Game service ready');
  await page.getByRole('button', { name: 'Play Easy' }).click();
  const firstCell = page.getByRole('gridcell', {
    name: 'Row 1, column 1, empty',
  });
  await firstCell.click();
  api.failNextAction();
  await page.keyboard.press('1');
  await expect(page.getByRole('button', { name: 'Retry move' })).toBeVisible();
  await expect(page.getByText(/temporarily unavailable/)).toBeVisible();
  await page.getByRole('button', { name: 'Retry move' }).click();
  await expect(
    page.getByRole('gridcell', { name: 'Row 1, column 1, 1, invalid' }),
  ).toBeVisible();
  api.setNextStatus('solved');
  await page
    .getByRole('gridcell', { name: 'Row 1, column 1, 1, invalid' })
    .click();
  await page.keyboard.press('2');
  await expect(page.getByText('Puzzle solved. Beautiful work!')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Pause' })).toBeDisabled();
  await expect(
    page.getByRole('button', { name: 'Reveal a hint' }),
  ).toBeDisabled();
});

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

const mockGameApi = async (
  page: Page,
  initialNotes?: { row: number; column: number; values: number[] },
) => {
  const givens = gridFromPuzzle();
  const values = gridFromPuzzle();
  const invalid = emptyBooleanGrid();
  const notes = emptyDigitSetGrid();
  if (initialNotes) {
    notes[initialNotes.row - 1][initialNotes.column - 1] = initialNotes.values;
  }
  let revision = 0;
  let canUndo = false;
  let actionRequests = 0;
  let sessionRequests = 0;
  let nextValueIsInvalid = true;
  let failNextAction = false;
  let nextStatus: 'in-progress' | 'solved' = 'in-progress';
  let actionDelayMs = 0;
  let restoreDelayMs = 0;
  let sessionDelayMs = 0;
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
      if (sessionDelayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, sessionDelayMs));
      }
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
    if (actionDelayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, actionDelayMs));
    }
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
    setActionDelay: (milliseconds: number) => {
      actionDelayMs = milliseconds;
    },
    setRestoreDelay: (milliseconds: number) => {
      restoreDelayMs = milliseconds;
    },
    setSessionDelay: (milliseconds: number) => {
      sessionDelayMs = milliseconds;
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
    const actionRequestsBeforeSelection = api.actionRequests();
    const availableDigit = page.getByRole('button', { name: 'Enter 1' });
    await expect(availableDigit).toBeEnabled();
    await availableDigit.click();
    await expect(
      page.getByText('Select an editable cell before entering a number.'),
    ).toBeVisible();
    await expect(firstCell).not.toHaveClass(/game-cell--selected/);
    await expect
      .poll(() => api.actionRequests())
      .toBe(actionRequestsBeforeSelection);
    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex + 20}.png`
        : testInfo.outputPath('number-pad-without-selection.png'),
      fullPage: true,
    });
    await expect(page.locator('[role="gridcell"][tabindex="0"]')).toHaveCount(
      1,
    );
    await expect(page.locator('[role="gridcell"][tabindex="-1"]')).toHaveCount(
      80,
    );
    await page.getByRole('heading', { name: 'Your puzzle' }).click();
    await page.keyboard.press('ArrowRight');
    await expect(firstCell).toBeFocused();
    await expect(firstCell).toHaveClass(/game-cell--selected/);
    await expect(firstCell).not.toHaveClass(/game-cell--peer/);
    await expect(firstCell).not.toHaveClass(/game-cell--matching/);
    await expect(firstCell).toHaveAttribute('tabindex', '0');
    await page.keyboard.press('Tab');
    await expect(availableDigit).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await expect(firstCell).toBeFocused();
    await page.getByRole('heading', { name: 'Your puzzle' }).click();
    await page.getByRole('button', { name: 'New puzzle' }).focus();
    await page.keyboard.press('Tab');
    await expect(firstCell).toBeFocused();
    await expect(firstCell).toHaveClass(/game-cell--selected/);

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
    const notesPad = page.getByLabel('Number pad, notes mode');
    await expect(notesPad).toHaveClass(/number-pad--notes/);
    const noteFive = page.getByRole('button', {
      name: 'Add or remove note 5',
    });
    await expect(noteFive).toHaveCSS('color', 'rgb(102, 113, 119)');
    await noteFive.click();
    await expect(
      page.getByRole('gridcell', {
        name: 'Row 1, column 4, empty, notes 5',
      }),
    ).toContainText('5');
    await expect(
      page.getByRole('button', { name: 'Notes on' }),
    ).toHaveAttribute('aria-pressed', 'true');
    await expect(boardGeometry(page)).resolves.toEqual(initialGeometry);
    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex + 24}.png`
        : testInfo.outputPath(`notes-mode-${viewport.width}.png`),
      fullPage: true,
    });

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
    const matchingNote = secondOpenCell.locator('.cell-note--matching');
    await expect(matchingNote).toHaveText('5');
    await expect(matchingNote).toHaveCSS(
      'background-color',
      'rgb(200, 224, 214)',
    );
    await page.keyboard.press('ArrowLeft');
    await expect(secondOpenCell.locator('.cell-note--matching')).toHaveCount(0);
    await page.keyboard.press('ArrowRight');
    await expect(givenFive).toBeFocused();
    await expect(secondOpenCell.locator('.cell-note--matching')).toHaveText(
      '5',
    );
    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex + 8}.png`
        : testInfo.outputPath(`matching-note-${viewport.width}.png`),
      fullPage: true,
    });

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

test('keeps a short wide game clear of the footer', async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 1200, height: 630 });
  await mockGameApi(page);
  await page.goto('/');
  await expect(page.locator('.connection')).toHaveText('Game service ready');
  await page.getByRole('button', { name: 'Play Easy' }).click();
  await expect(page.getByRole('grid')).toBeVisible();

  await expect(
    page.evaluate(() => {
      const board = document.querySelector('.board-stage');
      const controls = document.querySelector('.game-controls');
      const footer = document.querySelector('footer');
      if (!board || !controls || !footer) return false;
      const contentBottom = Math.max(
        board.getBoundingClientRect().bottom,
        controls.getBoundingClientRect().bottom,
      );
      return contentBottom <= footer.getBoundingClientRect().top;
    }),
  ).resolves.toBe(true);

  await expect(
    page.evaluate(() => {
      const board = document.querySelector('.board-stage');
      const controls = document.querySelector('.game-controls');
      if (!board || !controls) return Number.POSITIVE_INFINITY;
      return Math.abs(
        board.getBoundingClientRect().top -
          controls.getBoundingClientRect().top,
      );
    }),
  ).resolves.toBeLessThan(1.5);

  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-23.png`
      : testInfo.outputPath('short-wide-game.png'),
    fullPage: true,
  });
});

test('keeps board content fitted while the viewport is resized', async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 1623, height: 840 });
  await mockGameApi(page, {
    row: 1,
    column: 1,
    values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  await page.goto('/');
  await expect(page.locator('.connection')).toHaveText('Game service ready');
  await page.getByRole('button', { name: 'Play Easy' }).click();

  const viewportMatrix = [
    { width: 1623, height: 840 },
    { width: 1280, height: 720 },
    { width: 1050, height: 680 },
    { width: 900, height: 760 },
    { width: 841, height: 760 },
    { width: 840, height: 760 },
    { width: 700, height: 640 },
    { width: 521, height: 720 },
    { width: 520, height: 720 },
    { width: 390, height: 700 },
  ];

  for (const viewport of viewportMatrix) {
    await page.setViewportSize(viewport);
    const layout = await page.locator('.game-board').evaluate((board) => {
      const rectangle = (element: Element) => {
        const { top, right, bottom, left, width, height } =
          element.getBoundingClientRect();
        return { top, right, bottom, left, width, height };
      };
      const cells = Array.from(board.children);
      const noteGrid = board.querySelector('.cell-notes');
      const notes = noteGrid ? Array.from(noteGrid.children) : [];
      const controls = document.querySelector('.game-controls');
      const gameLayout = document.querySelector('.game-layout');
      const footer = document.querySelector('footer');
      return {
        board: rectangle(board),
        firstCell: rectangle(cells[0]),
        noteGrid: noteGrid ? rectangle(noteGrid) : null,
        noteSlots: notes.map(rectangle),
        noteFontSize: noteGrid
          ? Number.parseFloat(getComputedStyle(noteGrid).fontSize)
          : 0,
        controls: controls ? rectangle(controls) : null,
        gameLayout: gameLayout ? rectangle(gameLayout) : null,
        layoutColumnGap: gameLayout
          ? Number.parseFloat(getComputedStyle(gameLayout).columnGap)
          : 0,
        layoutFirstColumnWidth: gameLayout
          ? Number.parseFloat(getComputedStyle(gameLayout).gridTemplateColumns)
          : 0,
        footer: footer ? rectangle(footer) : null,
        scrollWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
      };
    });

    expect(Math.abs(layout.board.width - layout.board.height)).toBeLessThan(1);
    expect(
      Math.abs(layout.firstCell.width - layout.firstCell.height),
    ).toBeLessThan(1.5);
    expect(layout.noteGrid).not.toBeNull();
    expect(layout.noteSlots).toHaveLength(9);
    expect(
      new Set(layout.noteSlots.map((slot) => Math.round(slot.top))).size,
    ).toBe(3);
    expect(layout.noteFontSize).toBeLessThanOrEqual(
      Math.min(...layout.noteSlots.map((slot) => slot.height)),
    );
    for (const slot of layout.noteSlots) {
      expect(slot.top).toBeGreaterThanOrEqual(layout.noteGrid!.top - 0.5);
      expect(slot.bottom).toBeLessThanOrEqual(layout.noteGrid!.bottom + 0.5);
    }
    expect(layout.scrollWidth).toBeLessThanOrEqual(layout.viewportWidth);
    expect(layout.controls).not.toBeNull();
    expect(layout.gameLayout).not.toBeNull();
    expect(
      layout.board.right <= layout.controls!.left ||
        layout.controls!.top >= layout.board.bottom,
    ).toBe(true);
    if (layout.controls!.top < layout.board.bottom) {
      const boardTrackRight = layout.controls!.left - layout.layoutColumnGap;
      const boardTrackLeft = boardTrackRight - layout.layoutFirstColumnWidth;
      const leftMargin = layout.board.left - boardTrackLeft;
      const rightMargin = boardTrackRight - layout.board.right;
      expect(Math.abs(leftMargin - rightMargin)).toBeLessThan(1.5);
    }
    expect(layout.footer!.top).toBeGreaterThanOrEqual(
      Math.max(layout.board.bottom, layout.controls!.bottom) - 1,
    );
  }

  await page.setViewportSize({ width: 1050, height: 680 });
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-25.png`
      : testInfo.outputPath('resized-game-notes.png'),
    fullPage: true,
  });
});

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

test('remembers the selected welcome difficulty across refreshes', async ({
  page,
}, testInfo) => {
  await mockGameApi(page);
  await page.goto('/');
  await expect(page.locator('.connection')).toHaveText('Game service ready');

  const expertButton = page.getByRole('button', {
    name: 'Expert',
    exact: true,
  });
  await expertButton.click();
  await expect(expertButton).toHaveAttribute('aria-pressed', 'true');
  await expertButton.hover();
  await expect(expertButton).toHaveCSS('background-color', 'rgb(32, 42, 47)');
  await expect(expertButton).toHaveCSS('color', 'rgb(255, 255, 255)');
  await expect(page.getByRole('button', { name: 'Play Expert' })).toBeVisible();
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-12.png`
      : testInfo.outputPath('selected-welcome-difficulty.png'),
    fullPage: true,
  });

  await page.reload();

  await expect(page.locator('.connection')).toHaveText('Game service ready');
  await expect(expertButton).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Play Expert' })).toBeVisible();
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-11.png`
      : testInfo.outputPath('remembered-welcome-difficulty.png'),
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
  api.setSessionDelay(700);
  await page.getByRole('button', { name: 'Start new Hard puzzle' }).click();
  await expect.poll(() => api.sessionRequests()).toBe(3);
  const loadingState = page.getByRole('status', {
    name: 'Preparing your Hard board…',
  });
  await expect(loadingState).toBeVisible();
  await expect(page.getByRole('grid')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'New puzzle' })).toHaveCount(0);
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-22.png`
      : testInfo.outputPath('new-puzzle-loading.png'),
    fullPage: true,
  });
  await expect(dialog).toHaveCount(0);
  await expect(loadingState).toHaveCount(0);
  await expect(page.getByText('Hard puzzle ready.')).toBeVisible();
  expect(api.requestedDifficulties()).toEqual(['easy', 'easy', 'hard']);
});

test('keeps elapsed time independent from rapid game actions', async ({
  page,
}, testInfo) => {
  const api = await mockGameApi(page);
  await page.goto('/');
  await expect(page.locator('.connection')).toHaveText('Game service ready');
  await page.getByRole('button', { name: 'Play Easy' }).click();
  await expect(page.getByLabel('Elapsed time')).toHaveText('0:00');

  api.setActionDelay(300);
  const hintButton = page.getByRole('button', { name: 'Reveal a hint' });
  for (let request = 0; request < 5; request += 1) {
    await hintButton.click();
    await expect.poll(() => api.actionRequests()).toBe(request + 1);
    await expect(hintButton).toBeEnabled();
  }

  await expect(page.getByLabel('Elapsed time')).not.toHaveText('0:00');
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-13.png`
      : testInfo.outputPath('timer-during-rapid-actions.png'),
    fullPage: true,
  });
});

test('offers retryable failures and a focused completion path', async ({
  page,
}, testInfo) => {
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
  const completionHeading = page.getByRole('heading', { name: /Solved in/ });
  await expect(completionHeading).toBeVisible();
  await expect(completionHeading).toBeFocused();
  await expect(completionHeading).toHaveCSS('outline-style', 'solid');
  await expect(page.getByRole('button', { name: 'Pause' })).toBeDisabled();
  await expect(page.getByLabel('Number pad')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Reveal a hint' })).toHaveCount(
    0,
  );
  await page.screenshot({
    path: process.env.SCREENSHOT_DIR
      ? `${process.env.SCREENSHOT_DIR}/screenshot-14.png`
      : testInfo.outputPath('solved-completion.png'),
    fullPage: true,
  });

  await page.getByRole('button', { name: 'Play another Easy' }).click();
  await expect.poll(() => api.sessionRequests()).toBe(2);
  await expect(page.getByText('Easy puzzle ready.')).toBeVisible();

  api.setNextStatus('solved');
  await page.getByRole('gridcell', { name: 'Row 1, column 4, empty' }).click();
  await page.keyboard.press('3');
  await expect(page.getByRole('heading', { name: /Solved in/ })).toBeFocused();
  await page.getByRole('button', { name: 'Choose another level' }).click();
  await expect(
    page.getByRole('heading', { name: 'A clear board. A quieter mind.' }),
  ).toBeVisible();
});

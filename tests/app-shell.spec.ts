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
  const notes = emptyDigitSetGrid();
  let revision = 0;
  let canUndo = false;

  await page.route('**/healthz', (route) =>
    route.fulfill({ json: { status: 'healthy' } }),
  );
  await page.route('**/api/v1/sessions', async (route) => {
    if (route.request().method() === 'POST') {
      await route.fulfill({
        status: 201,
        json: {
          id: 'mock-session-id-123456789',
          revision,
          snapshot: {
            givens,
            values,
            invalid: emptyBooleanGrid(),
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
  await page.route('**/api/v1/sessions/*/actions', async (route) => {
    const action = route.request().postDataJSON() as {
      kind: string;
      row?: number;
      column?: number;
      value?: number;
    };
    if (action.kind === 'set-value' && action.row && action.column) {
      values[action.row - 1][action.column - 1] = action.value ?? 0;
      canUndo = true;
    }
    if (action.kind === 'toggle-note' && action.row && action.column) {
      notes[action.row - 1][action.column - 1] = [action.value ?? 0];
      canUndo = true;
    }
    if (action.kind === 'clear-value' && action.row && action.column) {
      values[action.row - 1][action.column - 1] = 0;
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
          invalid: emptyBooleanGrid(),
          notes,
          candidates: emptyDigitSetGrid(),
          status: 'in-progress',
          can_undo: canUndo,
          can_redo: false,
        },
        result: {
          action: action.kind,
          changes: [],
          status: 'in-progress',
          can_undo: canUndo,
          can_redo: false,
        },
      },
    });
  });
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
    await mockGameApi(page);
    await page.goto('/');
    await expect(page.getByRole('status')).toHaveText('Game service ready');
    await page.getByLabel('Difficulty').selectOption('hard');
    await page.getByRole('button', { name: 'Start a new game' }).click();

    await expect(
      page.getByRole('heading', { name: 'Your board' }),
    ).toBeVisible();
    await expect(page.getByRole('gridcell')).toHaveCount(81);
    await expect(page.getByText('Hard puzzle ready.')).toBeVisible();

    const initialGeometry = await boardGeometry(page);
    const firstCell = page.getByRole('gridcell', {
      name: 'Row 1, column 1, empty',
    });
    await expect(firstCell).toHaveClass(/game-cell--selected/);
    await expect(firstCell).not.toHaveClass(/game-cell--peer/);
    await expect(firstCell).not.toHaveClass(/game-cell--matching/);

    await firstCell.click();
    await page.getByRole('button', { name: 'Enter 3' }).click();
    const enteredCell = page.getByRole('gridcell', {
      name: 'Row 1, column 1, 3',
    });
    await expect(enteredCell).toBeVisible();
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
      matchingCell.evaluate(
        (cell) => getComputedStyle(cell, '::after').backgroundColor,
      ),
    ).resolves.toBe('rgb(52, 116, 99)');

    try {
      const screenshotIndex = viewport.width > 760 ? 0 : 1;
      await page.screenshot({
        path: process.env.SCREENSHOT_DIR
          ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex}.png`
          : testInfo.outputPath(`game-${viewport.width}.png`),
        fullPage: true,
      });
    } finally {
      await expect(page.locator('body')).not.toHaveCSS('overflow-x', 'scroll');
    }
  });
}

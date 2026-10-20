import { expect, test } from '@playwright/test';

for (const pageSpec of [
  {
    path: '/privacy/index.html',
    heading: 'Privacy policy',
    counterpart: 'Terms of use',
    counterpartHref: '../terms/',
  },
  {
    path: '/terms/index.html',
    heading: 'Terms of use',
    counterpart: 'Privacy policy',
    counterpartHref: '../privacy/',
  },
] as const) {
  test(`${pageSpec.heading} is a readable static page`, async ({
    page,
  }, testInfo) => {
    await page.goto(pageSpec.path);

    await expect(
      page.getByRole('heading', { level: 1, name: pageSpec.heading }),
    ).toBeVisible();
    await expect(page.getByText('Last updated: October 4, 2026')).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Play Sudoku' }),
    ).toHaveAttribute('href', '../');
    await expect(
      page.getByRole('link', { name: pageSpec.counterpart }),
    ).toHaveAttribute('href', pageSpec.counterpartHref);

    const screenshotName =
      pageSpec.heading === 'Privacy policy' ? 'privacy' : 'terms';
    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotName}.png`
        : testInfo.outputPath(`${screenshotName}.png`),
      fullPage: true,
    });
  });

  test(`${pageSpec.heading} follows the saved game theme instead of the operating-system theme`, async ({
    page,
  }, testInfo) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => {
      localStorage.setItem('sudoku-ui.theme.v1', 'dark');
    });
    await page.goto(pageSpec.path);

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(16, 23, 21)',
    );
    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/screenshot-${pageSpec.heading === 'Privacy policy' ? 'privacy' : 'terms'}-saved-dark.png`
        : testInfo.outputPath('saved-dark.png'),
      fullPage: true,
    });
  });
}

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

    await page.screenshot({
      path: process.env.SCREENSHOT_DIR
        ? `${process.env.SCREENSHOT_DIR}/${pageSpec.heading === 'Privacy policy' ? 'screenshot-privacy' : 'screenshot-terms'}.png`
        : testInfo.outputPath(
            `${pageSpec.heading === 'Privacy policy' ? 'privacy' : 'terms'}.png`,
          ),
      fullPage: true,
    });
  });
}

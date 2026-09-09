import { expect, test } from '@playwright/test';

for (const viewport of [
  { width: 1280, height: 820 },
  { width: 390, height: 844 },
]) {
  test(`renders the deployment shell at ${viewport.width}px`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize(viewport);
    await page.route('**/healthz', (route) =>
      route.fulfill({ json: { status: 'healthy' } }),
    );
    await page.goto('/');
    try {
      await expect(
        page.getByRole('heading', { name: /clear your mind/i }),
      ).toBeVisible();
      await expect(page.getByRole('status')).toHaveText('Game service ready');
      await expect(
        page.getByRole('button', { name: 'Start a new game' }),
      ).toBeDisabled();
    } finally {
      const screenshotIndex = viewport.width > 760 ? 0 : 1;
      await page.screenshot({
        path: process.env.SCREENSHOT_DIR
          ? `${process.env.SCREENSHOT_DIR}/screenshot-${screenshotIndex}.png`
          : testInfo.outputPath(`shell-${viewport.width}.png`),
        fullPage: true,
      });
    }
  });
}

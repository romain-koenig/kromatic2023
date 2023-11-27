import { test, expect } from '@playwright/test';

test('Kromatic looks good', async ({ page }) => {
	await page.goto('https://kromatic.fr');
	await expect(page).toHaveScreenshot({ maxDiffPixels: 100 })
});

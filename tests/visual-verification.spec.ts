import { test, expect } from '@playwright/test';

test.describe.configure({ retries: 0, mode: 'serial' });

test.describe('Oliwwi Home - Visual Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
  });

  test('Hero Carousel - loads and navigates correctly', async ({ page }) => {
    await expect(page.locator('#hero-carousel')).toBeVisible();
    await page.screenshot({ path: 'tests/screenshots/hero-slide-1.png', fullPage: false });
    await page.click('#hero-next');
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'tests/screenshots/hero-slide-2.png', fullPage: false });
    await page.click('#hero-next');
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'tests/screenshots/hero-slide-3.png', fullPage: false });
    await page.click('#hero-next');
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'tests/screenshots/hero-slide-4.png', fullPage: false });
  });

  test('Benefits Banner - icons visible', async ({ page }) => {
    await expect(page.locator('[aria-label="Beneficios de Oliwwi"]')).toBeVisible();
    await page.screenshot({ path: 'tests/screenshots/benefits-strip.png', fullPage: false });
  });

  test('Brand Strip - clean logos', async ({ page }) => {
    await expect(page.locator('#marcas-heading')).toBeVisible();
    await page.screenshot({ path: 'tests/screenshots/brand-strip.png', fullPage: false });
  });

  test('Full page screenshot', async ({ page }) => {
    await page.screenshot({ path: 'tests/screenshots/full-page.png', fullPage: true });
  });
});

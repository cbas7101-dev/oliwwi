import { expect, test } from '@playwright/test';

async function waitForIslands(page: import('@playwright/test').Page) {
  await page.waitForFunction(() => [...document.querySelectorAll('astro-island')].every((island) => !island.hasAttribute('ssr')));
}

test('selects a branch and builds the correct WhatsApp order URL', async ({ page }) => {
  await page.goto('/');
  await waitForIslands(page);
  await page.getByRole('button', { name: /elige tu sucursal/i }).click();
  await page.getByRole('dialog').getByRole('button', { name: /Ambato/ }).click();
  await expect(page.getByRole('button', { name: /Ambato/ }).first()).toBeVisible();

  await page.evaluate(() => {
    (window as Window & { __openedUrl?: string }).__openedUrl = undefined;
    window.open = ((url?: string | URL) => {
      (window as Window & { __openedUrl?: string }).__openedUrl = String(url);
      return null;
    }) as typeof window.open;
  });
  await page.getByRole('button', { name: 'Pedir por WhatsApp' }).first().click();
  const openedUrl = await page.evaluate(() => (window as Window & { __openedUrl?: string }).__openedUrl ?? '');
  expect(openedUrl).toContain('wa.me/593967928652');
  expect(decodeURIComponent(openedUrl)).toContain('Tinta labial larga duración USHAS');
});

test('asks for a branch when none has been selected and Latacunga is available', async ({ page }) => {
  await page.goto('/catalogo');
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await waitForIslands(page);
  await page.evaluate(() => {
    (window as Window & { __openedUrl?: string }).__openedUrl = undefined;
    window.open = ((url?: string | URL) => {
      (window as Window & { __openedUrl?: string }).__openedUrl = String(url);
      return null;
    }) as typeof window.open;
  });
  await page.getByRole('button', { name: 'Pedir por WhatsApp' }).first().click();
  await expect(page.getByRole('heading', { name: 'Elige dónde pedir' })).toBeVisible();
  await page.getByRole('dialog').getByRole('button', { name: /Latacunga/ }).click();
  const openedUrl = await page.evaluate(() => (window as Window & { __openedUrl?: string }).__openedUrl ?? '');
  expect(openedUrl).toContain('wa.me/593984403580');
});

test('filters the catalog and does not overflow on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/catalogo');
  await waitForIslands(page);
  await expect(page.locator('main article')).toHaveCount(8);
  await page.getByRole('button', { name: 'Skincare', exact: true }).click();
  await expect(page.locator('main article')).toHaveCount(1);
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(hasOverflow).toBe(false);
});

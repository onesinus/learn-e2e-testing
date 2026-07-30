// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://uniji.ac.id/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/University/);
});

test('get scholarship page content', async ({ page }) => {
  await page.goto('https://uniji.ac.id/scholarship/uniji-scholarship-info', {
    waitUntil: 'networkidle',
  });

  // Get all visible text
  const content = await page.locator('body').innerText();

  console.log(content);

  expect(content).toContain('UNIJI Scholarship');
});
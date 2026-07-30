/**
 * Playwright test for intranet login.
 * Usage:
 *   INTRANET_USER=bambang INTRANET_PASS=bambang123 npx playwright test tests/intranet-login.spec.js
 *
 * Credentials must be provided via env vars to avoid committing secrets.
 */

const { test, expect } = require('@playwright/test');

test('intranet login', async ({ page }) => {
  const username = "salahnama";
  const password = "salahpassword";
  if (!username || !password) {
    throw new Error('Set INTRANET_USER and INTRANET_PASS environment variables before running the test.');
  }

  await page.goto('https://ediis.jic.ac.id/intranet/');

  // Update selectors below if the page uses different names/ids for inputs/buttons
  await page.fill('input[name="username"], input#username, input[type="text"]', username);
  await page.fill('input[name="password"], input#password, input[type="password"]', password);
  await page.click('button[type="submit"], button:has-text("Login"), input[type="submit"]');

  // Wait for navigation or UI change that indicates successful login
  await page.waitForLoadState('networkidle');

  // // Expect a logout link or similar text to appear after login
  // const loggedIn = page.locator('text=/logout/i').first();
  // await expect(loggedIn).toBeVisible({ timeout: 10000fl });
});

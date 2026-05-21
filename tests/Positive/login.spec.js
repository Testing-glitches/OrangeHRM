import { test, expect } from '@playwright/test';

test.use({storageState: 'auth.json'});

test('Dashboard Test', async ({ page }) => {

  // Open Dashboard
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
 test.setTimeout(60000);
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
});
import { test, expect } from '@playwright/test';

test.use({storageState: 'auth.json'});

test('Dashboard Test', async ({ page }) => {

  test.setTimeout(60000);

  // Open Dashboard
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Verify Dashboard
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
});
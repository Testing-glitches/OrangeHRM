import { test, expect } from '@playwright/test';

test.use({storageState: 'auth.json'});

test('Dashboard Test', async ({ page }) => {

  // Open Dashboard
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
 test.setTimeout(60000);
  // Verify Dashboard Visible
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
});
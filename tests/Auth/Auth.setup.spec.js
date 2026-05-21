import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {

  // Open login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter credentials
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');

  // Click login
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for dashboard
  await page.waitForURL('**/dashboard/index');

  // Verify dashboard visible
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();

  // Save auth state
  await page.context().storageState({ path: 'auth.json' });

  console.log('auth.json created successfully');

});
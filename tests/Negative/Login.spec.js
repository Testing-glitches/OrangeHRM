import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for dashboard
  await page.waitForURL('**/dashboard/index');

  // Verify Dashboard
  await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();

});
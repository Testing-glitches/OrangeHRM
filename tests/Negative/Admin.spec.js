import { test, expect } from '@playwright/test';

test.use({storageState: 'auth.json'});

test('Negative Admin Search Test', async ({ page }) => {

  test.setTimeout(120000);

  // Open Dashboard
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Verify Dashboard loaded
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // Open Admin Module
  await page.getByRole('link', { name: 'Admin' }).click();

  // Verify Admin Page
  await expect(page.getByRole('heading', { name: 'Admin', exact: true })).toBeVisible();

  // Fill invalid username
  await page.locator('input.oxd-input').nth(1).fill('InvalidUser123456');

  // Click Search
  await page.getByRole('button', { name: 'Search' }).click();

  // Wait for results
  await page.waitForTimeout(3000);

  // Verify No Records Found
  await expect(page.getByText('No Records Found').first()).toBeVisible();
});
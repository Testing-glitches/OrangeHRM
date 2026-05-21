import { test, expect } from '@playwright/test';

test.use({storageState: 'auth.json'});

test('Negative Admin Search Test', async ({ page }) => {

  test.setTimeout(150000);

  // Open Admin Module
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

  // Verify Admin Page
  await expect(page.getByRole('heading', {name: 'Admin'})).toBeVisible();

  // Enter Invalid Username
  await page.locator('input.oxd-input.oxd-input--active').nth(1).fill('InvalidUser123');

  // Click Search
  await page.getByRole('button', {name: 'Search'}).click();

  await expect(
  page.getByText('No Records Found').last()
).toBeVisible({ timeout: 10000 });
});
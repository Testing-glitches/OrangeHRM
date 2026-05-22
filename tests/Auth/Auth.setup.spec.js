import { test, expect } from '@playwright/test';

test('OrangeHRM Auth Setup', async ({ page }) => {

  test.setTimeout(120000);

  // Open Login Page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter Username
  await page.getByRole('textbox', {name: 'Username'}).fill('Admin');

  // Enter Password
  await page.getByRole('textbox', {name: 'Password'}).fill('admin123');

  // Click Login
  await page.getByRole('button', {name: 'Login'}).click();

  // Verify Dashboard
  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

  // Save Login Session
  await page.context().storageState({path: 'auth.json'});

  console.log('Auth session saved successfully');

});
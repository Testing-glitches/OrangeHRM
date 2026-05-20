import { test } from '@playwright/test';

test('Login and save auth session', async ({ page }) => {

  // Open Login Page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Enter Username
  await page.getByRole('textbox', {name: 'Username'}).fill('Admin');

  // Enter Password
  await page.getByRole('textbox', {name: 'Password'}).fill('admin123');

  // Click Login
  await page.getByRole('button', {name: 'Login'}).click();

  // Verify Dashboard URL
  await page.waitForURL(/dashboard/);

  // Save Login Session
  await page.context().storageState({path: 'auth.json'});

  console.log('Auth session saved successfully');

});
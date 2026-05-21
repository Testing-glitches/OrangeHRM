import { test, expect } from '@playwright/test';

test('Login and save auth session', async ({ page }) => {

  // Increase timeout because website can be slow
  test.setTimeout(60000);

  // Open OrangeHRM Login Page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{waitUntil: 'domcontentloaded'});

  // Enter Username
  await page.getByRole('textbox', {name: 'Username'}).fill('Admin');

  // Enter Password
  await page.getByRole('textbox', {name: 'Password'}).fill('admin123');

  // Click Login Button
  await page.getByRole('button', {name: 'Login'}).click();

  // Verify Dashboard URL after successful login
  await page.waitForURL(/dashboard/);

  // Save Login Session in auth.json file
  await page.context().storageState({path: 'auth.json'});

  console.log('Auth session saved successfully');

});
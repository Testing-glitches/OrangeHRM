import { test, expect } from '@playwright/test';

test('Negative Login Test', async ({ page }) => {

  test.setTimeout(60000);

  // Open Login Page
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  // Enter Invalid Credentials
  await page.locator(
    'input[name="username"]'
  ).fill('InvalidUser');

  await page.locator(
    'input[name="password"]'
  ).fill('WrongPassword');

  // Click Login
  await page.getByRole('button', {
    name: 'Login'
  }).click();

  // Verify Error Message
  await expect(
    page.getByText('Invalid credentials')
  ).toBeVisible();

});
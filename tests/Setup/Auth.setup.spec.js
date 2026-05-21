import { test, expect } from '@playwright/test';

test('Login and save auth session', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.locator('input[name="username"]').fill('Admin');

  await page.locator('input[name="password"]').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

  await page.context().storageState({
    path: 'auth.json'
  });

  console.log('Auth Saved');
});
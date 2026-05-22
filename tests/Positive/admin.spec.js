import { test, expect } from '@playwright/test';

test.use({storageState: 'auth.json'});

test('Admin Module Test', async ({ page }) => {

  test.setTimeout(150000);

  // Open Admin Module
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

  // Verify Admin Page
  await expect(page.getByRole('heading', {name: 'Admin'})).toBeVisible();

  // Enter Username
  await page.locator('form input').nth(1).fill('Admin');

  // Select User Role
  await page.locator('.oxd-select-text').first().click();

  await page.getByRole('option', {name: 'Admin'}).click();

  // Click Search
  await page.getByRole('button', {name: 'Search'}).click();

  // Verify Search Result
  await expect(page.locator('.oxd-table-body')).toContainText('Admin');

  // Select First Checkbox
  await page.locator('.oxd-table-card .oxd-checkbox-input').first().click();
});

  //await page.getByRole('textbox', { name: 'Username' }).click();
  //await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  //await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  //await page.getByRole('button', { name: 'Login' }).click();
  //await page.getByRole('textbox').nth(1).click();
 // await page.getByRole('textbox').nth(1).fill('Arvind');
  //await page.getByText('-- Select --').first().click();
  //await page.getByText('-- Select --').first().click();
  //await page.getByRole('option', { name: 'ESS' }).click();
  //await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  //await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Arvind kotak');
  //await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  //await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  //await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Arvind');
  //await page.getByText('-- Select --').click();
  //await page.getByRole('listbox').getByText('Enabled').click();
  //await page.getByRole('button', { name: 'Search' }).click();
  //await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  //await expect(page.locator('form')).toContainText('Invalid');
  //await page.getByRole('textbox').nth(1).click();
  //await page.getByRole('textbox').nth(1).fill('');
  //await page.getByRole('textbox').nth(1).press('CapsLock');
  //await page.getByRole('textbox').nth(1).fill('FML');
  //await page.getByRole('textbox').nth(1).press('CapsLock');
  //await page.getByRole('textbox').nth(1).fill('FMLName');
  //await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  //await page.getByRole('textbox', { name: 'Type for hints...' }).fill('FName LName');
 // await page.locator('form').getByText('Enabled').click();
  //await page.getByRole('option', { name: 'Enabled' }).click();
  //await page.getByRole('textbox').nth(1).click();
  //await page.getByRole('textbox').nth(1).fill('FMLName1');
  //await page.getByRole('button', { name: 'Search' }).click();
  //await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  //await page.getByRole('button', { name: 'Search' }).click();
  //await page.getByRole('button', { name: 'Search' }).click();
  //await page.getByRole('textbox').nth(1).click();
  //await page.getByRole('textbox').nth(1).fill('FMLName');
  //await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  //await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Qwerty LName');
  //await page.getByText('Qwerty Qwerty LName').click();
  //await page.getByRole('button', { name: 'Search' }).click();
  //await page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();
  //await expect(page.getByRole('button', { name: ' Delete Selected' })).toBeVisible();
  ////await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  //await expect(page.getByRole('button', { name: 'No, Cancel' })).toBeVisible();
  //await expect(page.getByRole('button', { name: ' Yes, Delete' })).toBeVisible();
  //await page.getByRole('button', { name: ' Yes, Delete' }).click();
  //await page.getByRole('button', { name: 'Reset' }).click();
  //await page.getByText('namerrr').click();
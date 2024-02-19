import { test, expect } from '@playwright/test';

test('Login user with correct email and password', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('automationuser1@gmail.com');
  await page.getByPlaceholder('Password').fill('Automation@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Logged in as tester')).toBeVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
});
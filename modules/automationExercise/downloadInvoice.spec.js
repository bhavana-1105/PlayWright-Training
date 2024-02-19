const { test, expect } = require('@playwright/test');
const { DownloadInvoice } = require('../../../utils/pageObjects/modules/downloadInvoice');

test.beforeEach(async({page}) => {
  await page.goto('https://automationexercise.com/');
  const downloadInvoice = new DownloadInvoice(page);
  expect(downloadInvoice.homePage,"Validate that the user is on home page").toBeVisible();
})

test('Download Invoice', async ({ page }) => {
  const downloadInvoice = new DownloadInvoice(page);
  await test.step("Add products to cart", async() => {

  });
  await test.step("Navigate to cart page and create account", async() => {

  });
  await test.step("Navigate to cart page and place the order", async() => {

  });
  await test.step("Download invoice", async() => {

  });
  await test.step("Delete account", async() => {

  });
  await page.locator('.overlay-content > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(6) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page.getByText('Shopping Cart')).toBeVisible();
  await page.getByText('Proceed To Checkout').click();
  /** 
   * Write common method for signup in corelibrary
   */
  // await page.getByRole('link', { name: 'Register / Login' }).click();
  // await page.getByPlaceholder('Name').fill('automation');
  // await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('tester@gmail.com');
  // await page.getByRole('button', { name: 'Signup' }).click();
  // await page.getByLabel('Mr.').check();
  // await page.getByLabel('Password *').fill('Automation@123');
  // await page.getByLabel('First name *').fill('test');
  // await page.getByLabel('Last name *').fill('fd');
  // await page.getByLabel('Address * (Street address, P.').fill('fsd');
  // await page.getByLabel('State *').fill('erfd');
  // await page.getByLabel('City *').fill('trweafsd');
  // await page.locator('#zipcode').fill('546856');
  // await page.getByLabel('Mobile Number *').fill('49685696');
  // await page.getByRole('button', { name: 'Create Account' }).click();
  // await expect(page.getByText('Account Created!')).toBeVisible();
  // await page.getByRole('link', { name: 'Continue' }).click();
  // await page.frameLocator('iframe[name="aswift_3"]').getByLabel('Close ad').click();
  // await expect(page.getByText('Logged in as automation')).toBeVisible();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await expect(page.locator('#address_delivery')).toContainText('Mr. tester fdwe');
  await expect(page.locator('#address_delivery')).toContainText('fsd');
  await expect(page.getByText('Your delivery address Mr.')).toBeVisible();
  await expect(page.getByRole('row', { name: 'Product Image Winter Top' })).toBeVisible();
  await expect(page.getByRole('row', { name: 'Product Image Stylish Dress' })).toBeVisible();
  await page.locator('textarea[name="message"]').fill('test');
  await page.locator('div').filter({ hasText: 'Place Order' }).nth(1).click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').fill('erfds');
  await page.locator('input[name="card_number"]').fill('4863526352665');
  await page.getByPlaceholder('ex.').fill('542');
  await page.getByPlaceholder('MM').fill('10');
  await page.getByPlaceholder('YYYY').fill('2027');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await expect(page.getByText('Order Placed!')).toBeVisible();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download Invoice' }).click();
  const download = await downloadPromise;
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await expect(page.getByText('Account Deleted!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
});
const { test, expect } = require('playwright/test');

const openCategory = async (page, name) => {
  await page.goto('/');
  await page.getByRole('button', { name: new RegExp(name) }).click();
};

test('blank first question, sequential disclosure, required blocking, and live estimate', async ({ page }) => {
  await openCategory(page, 'Appliances');
  const mode = page.locator('#aMode');
  await expect(mode).toHaveValue('');
  await expect(page.locator('#aItem')).toBeHidden();
  await mode.selectOption('install');
  await expect(page.locator('#aItem')).toBeVisible();
  await expect(page.locator('#aExisting')).toBeHidden();
  await expect(page.locator('#livePrice')).toHaveText('$150');
  await expect(page.locator('#liveTime')).toHaveText('Up to 1 hour');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Please answer this question to continue.')).toBeVisible();
});

test('upstream invalidation and Something else persistence', async ({ page }) => {
  await openCategory(page, 'Appliances');
  await page.locator('#aMode').selectOption('diag');
  await page.locator('#aDiagItem').selectOption('Garbage Disposal');
  await page.locator('#aSymptom').selectOption('Something else');
  await page.locator('#aOther').fill('Leaks only after the switch is off');
  await expect(page.locator('#aOther')).toHaveValue('Leaks only after the switch is off');
  await page.locator('#aMode').selectOption('install');
  await expect(page.locator('#aOther')).toHaveValue('');
});

test('electrical quantities include 1-10 and 10+ without diagnostic price multiplication', async ({ page }) => {
  await openCategory(page, 'Electrical');
  await page.locator('#eMode').selectOption('diag');
  await page.locator('#eDiagArea').selectOption('Outlet / receptacle');
  await page.locator('#eDiagSymptom').selectOption('No power');
  await page.locator('#eDiagQty').selectOption('10+');
  await expect(page.locator('#livePrice')).toHaveText('$130');
  await expect(page.locator('#eDiagQty option')).toHaveCount(12);
});

test('Quick Fix catalog, quantity persistence, Review quantity edit, and remove/re-add', async ({ page }) => {
  await openCategory(page, 'Quick Fixes');
  const task = page.locator('.quickPrimaryTask[data-task="Toilet seat"]');
  await task.check();
  await task.locator('xpath=ancestor::*[contains(@class,"qty-row")]').locator('.quickPrimaryQty').selectOption('3');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Review Estimate' }).click();
  await expect(page.locator('[data-qf-task="Toilet seat"]')).toHaveValue('3');
  await page.locator('[data-qf-task="Toilet seat"]').selectOption('2');
  await expect(page.locator('#summary').getByText(/Toilet seat × 2/)).toBeVisible();
});

test('General Mounting is a standalone sequential review path', async ({ page }) => {
  await openCategory(page, 'General Mounting');
  await expect(page.locator('#mMode')).toHaveCount(0);
  await expect(page.locator('#mItem')).toBeVisible();
  await expect(page.locator('#mQty')).toBeHidden();
  await page.locator('#mItem').selectOption('Privacy screens / room dividers');
  await expect(page.locator('#mQty')).toBeVisible();
  await expect(page.locator('#livePrice')).toHaveText('Pending Review');
});

test('checkbox card text is a tap target', async ({ page }) => {
  await openCategory(page, 'Painting');
  const row = page.getByText('Ceiling', { exact: true }).locator('..');
  await row.click();
  await expect(row.locator('input')).toBeChecked();
});

test('Start Over clears current state', async ({ page }) => {
  await openCategory(page, 'Appliances');
  await page.locator('#aMode').selectOption('install');
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'Start Over' }).click();
  await expect(page.getByRole('heading', { name: 'What brings me out?' })).toBeVisible();
});

// Manual/permanent scenario retained for adapter-dependent paths:
// messy customer rebuild, scheduling conflict reauthorization, maximum plausible cart,
// multi-day routing, confirmation, and permanent Request ID are recorded in the QA report.


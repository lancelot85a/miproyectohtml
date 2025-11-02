const { test } = require('@playwright/test');
const path = require('path');

test('take screenshot of the page', async ({ page }) => {
  const filePath = path.join(__dirname, '..', 'index.html');
  await page.goto(`file://${filePath}`);
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});

/* eslint-disable no-undef */
import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
    //   headless: false, 
    //   slowMo: 100,
    //   devtools: true, 
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('correct', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('[data-toggle=popover]');
    btn.click();
    await page.waitForSelector('.popover');
  });
});

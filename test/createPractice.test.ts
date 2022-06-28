// import { argv, exit } from 'process'
import { test, expect } from '@playwright/test'

// if (!argv[2]) {
//   console.log('请在命令后添加LeetCode URL。')
//   exit(0)
// }

// const url = argv[2]

// fetch(url)
//   .then(res => res.text())
//   .then(text => console.log(text))

// const browser = await puppeteer.launch({
//   headless: false
// })
// const page = await browser.newPage()
// await page.goto(url)
// await page.waitForTimeout(5000)
// await page.screenshot({ path: 'example.png' })
// await browser.close()



test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/')
  const title = page.locator('.navbar__inner .navbar__title')
  await expect(title).toHaveText('Playwright')
  // await page.goto(url)
})
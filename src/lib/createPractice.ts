import { argv, exit } from 'process'
import puppeteer from 'puppeteer'

if (!argv[2]) {
  console.log('请在命令后添加LeetCode URL。')
  exit(0)
}

const url = argv[2]

const browser = await puppeteer.launch({
  headless: false
})
const page = await browser.newPage()
await page.goto(url)
await page.waitForTimeout(5000)
await page.screenshot({ path: 'example.png' })
await browser.close()


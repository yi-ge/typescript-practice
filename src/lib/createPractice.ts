// @ts-ignore
import * as readline from 'node:readline/promises'
import { argv, exit, stdin as input, stdout as output } from 'node:process'
import puppeteer from 'puppeteer'

if (argv.length > 3) {
  console.log('参数过多。')
  exit(0)
}

let url = ''

if (!argv[2]) {
  const rl = readline.createInterface({ input, output })

  url = await rl.question('请输入LeetCode URL：')

  rl.close()
} else {
  url = argv[2]
}

const browser = await puppeteer.launch({
  headless: false,
  ignoreDefaultArgs: ['--enable-automation'],
  defaultViewport: { 'width': 1366, 'height': 768 },
})
const page = await browser.newPage()
await page.goto(url, {
  waitUntil: 'networkidle2'
})
await page.waitForTimeout(1000)
let title = (await page.title())?.split('-')[0]?.trim()
console.log(`名称：${title}`)

const tags = await page.$$eval(`a[class^='topic-tag']`, tags => {
  return tags.map(tag => tag.textContent)
})

console.log(`分类：`, tags)

const code = await page.evaluate('monaco.editor.getModels()[0].getValue()')

console.log(code)

// await page.evaluate(() => {
//   localStorage.setItem('token', 'example-token')
// })

await browser.close()


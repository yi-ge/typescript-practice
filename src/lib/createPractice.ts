// @ts-ignore
import * as readline from 'node:readline/promises'
import { argv, exit, stdin as input, stdout as output } from 'node:process'
import puppeteer from 'puppeteer-core'
import { execSync } from 'node:child_process'

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

const sleep = (n: number) => new Promise(r => { setTimeout(r, n) })

const checkAndQuitChrome = async (kill = false) => {
  const check = execSync(`ps aux|grep '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'`)
  if (check.toString('utf-8')?.split('\n').length >= 4) {
    console.log('浏览器已在运行，正在重启...')
    if (kill) {
      execSync(`killall 'Google Chrome'`)
    } else {
      execSync(`osascript -e 'quit app "Google Chrome"'`)
    }
    await sleep(2000)
    await checkAndQuitChrome(true)
  }
}

await checkAndQuitChrome()

const browser = await puppeteer.launch({
  headless: false,
  ignoreDefaultArgs: [
    '--enable-automation',
    '--disable-background-networking',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    // '--disable-client-side-phishing-detection',
    '--disable-component-extensions-with-background-pages',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-extensions',
    '--disable-features=Translate,BackForwardCache,AvoidUnnecessaryBeforeUnloadCheckSync',
    '--disable-hang-monitor',
    // '--disable-ipc-flooding-protection',
    '--disable-popup-blocking',
    // '--disable-prompt-on-repost',
    '--disable-renderer-backgrounding',
    '--disable-sync',
    '--force-color-profile=srgb',
    '--metrics-recording-only',
    '--password-store=basic'
  ],
  defaultViewport: null,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  userDataDir: '/Users/yige/Library/Application Support/Google/Chrome',
  args: ['--restore-last-session', '--start-maximized']
})

const page = await browser.newPage()
await page.setViewport({ width: 0, height: 0 })
await page.goto(url, {
  waitUntil: 'networkidle2'
})
await page.evaluate(() => {
  // @ts-ignore
  localStorage.setItem('global_lang_key', '"typescript"')
})

// 关闭 about:blank 页面
const pages = await browser.pages()
for (const page of pages) {
  const checkURL = await page.url()
  if (checkURL === 'about:blank') {
    page.close()
  }
}

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

// await browser.close()


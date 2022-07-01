// @ts-ignore
import * as readline from 'node:readline/promises'
import { argv, exit, stdin as input, stdout as output } from 'node:process'
import puppeteer from 'puppeteer-extra'
import { execSync } from 'node:child_process'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import os from 'node:os'
import fs from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

if (os.type() !== 'Darwin' && os.type() !== 'Linux') {
  console.log('暂仅支持MacOS和Linux使用此脚本')
  exit(0)
}

if (argv.length > 3) {
  console.log('参数过多。')
  exit(0)
}

let url = ''

if (!argv[2]) {
  const rl = readline.createInterface({ input, output })

  url = await rl.question('请输入LeetCode URL（回车/1：每日一题，2：随机一题）：')

  rl.close()
} else {
  url = argv[2]
}

const sleep = (n: number) => new Promise(r => { setTimeout(r, n) })

// const checkAndQuitChrome = async (kill = false) => {
//   const check = execSync(`ps aux|grep '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'`)
//   if (check.toString('utf-8')?.split('\n').length >= 4) {
//     console.log('浏览器已在运行，正在重启...')
//     if (kill) {
//       execSync(`killall 'Google Chrome'`)
//     } else {
//       execSync(`osascript -e 'quit app "Google Chrome"'`)
//     }
//     await sleep(2000)
//     await checkAndQuitChrome(true)
//   }
// }

// await checkAndQuitChrome()

puppeteer.use(StealthPlugin())

const homeDir = os.homedir()

const userDataDir =
  os.type() === 'Linux' ?
    join(homeDir, '/.config/google-chromium') :
    join(homeDir, '/Library/Application Support/Google/Chromium')

if (!fs.existsSync(userDataDir)) fs.mkdirSync(userDataDir)

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
    '--password-store=basic',
    '--enable-blink-features=IdleDetection',
  ],
  defaultViewport: null,
  // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  userDataDir,
  // args: ['--restore-last-session', '--start-maximized']
  args: ['--start-maximized', '--no-default-browser-check']
})

const pages = await browser.pages()
const page = pages[0]// await browser.newPage()
await page.setViewport({ width: 0, height: 0 })

if (url === '' || url === '1') {
  console.log('每日一题')
  await page.goto('https://leetcode.cn/problemset/all/', {
    waitUntil: 'networkidle2'
  })
  await page.evaluate(() => {
    // @ts-ignore
    localStorage.setItem('global_lang_key', '"typescript"')
    // @ts-ignore
    localStorage.setItem('daily-question:guide-modal-shown', '"true"')
  })
  url = await page.$eval(`[role=row] a`, el => el.href)
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })
} else if (url === '2') {
  console.log('随机一题')
  await page.goto('https://leetcode.cn/problemset/all/', {
    waitUntil: 'networkidle2'
  })
  await page.evaluate(() => {
    // @ts-ignore
    localStorage.setItem('global_lang_key', '"typescript"')
    // @ts-ignore
    localStorage.setItem('daily-question:guide-modal-shown', '"true"')
  })
  await page.evaluate(() => {
    // @ts-ignore
    const headings = document.evaluate("//span[contains(., '随机一题')]", document, null, XPathResult.ANY_TYPE, null)
    let iterateNext = headings.iterateNext()
    iterateNext.parentNode?.click()
    return ''
  })
  await page.waitForTimeout(2000)
  url = page.url()
  console.log(url)
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })
} else {
  await page.goto(url)
  await page.evaluate(() => {
    // @ts-ignore
    localStorage.setItem('global_lang_key', '"typescript"')
    // @ts-ignore
    localStorage.setItem('daily-question:guide-modal-shown', '"true"')
  })
  await page.goto(url, {
    waitUntil: 'networkidle2'
  })
}

// // 关闭 about:blank 页面
// for (const page of pages) {
//   const checkURL = page.url()
//   if (checkURL === 'about:blank') {
//     page.close()
//   }
// }

await page.waitForTimeout(1000)
const title = (await page.title())?.split('-')?.shift()?.trim().split('.')?.pop()?.trim()
console.log(`名称：${title}`)


const tags = await page.$$eval(`a[class^='topic-tag']`, (items) => {
  return items.map((item) => {
    return item.textContent
  })
})

let classification = tags.length > 0 ? tags[0] : '未知'

console.log('标签：', tags)
console.log('分类：', classification)

const obj = {
  '数组': 'array',
  '字符串': 'string',
  '排序': 'sort',
  '矩阵': 'array',
  '模拟': 'other',
  '枚举': 'array',
  '字符串匹配': 'string',
  '桶排序': 'sort',
  '计数排序': 'sort',
  '基数排序': 'sort',
  '动态规划': 'other',
  '深度优先搜索': 'search',
  '贪心': 'other',
  '广度优先搜索': 'search',
  '二分查找': 'search',
  '回溯': 'other',
  '递归': 'sort',
  '分治': 'other',
  '记忆化搜索': 'search',
  '归并排序': 'sort',
  '快速选择': 'search',
  '哈希表': 'map',
  '树': 'tree',
  '二叉树': 'tree',
  '栈': 'heap',
  '堆（优先队列）': 'stack',
  '图': 'graphs',
  '链表': 'list',
  '二叉搜索树': 'tree',
  '单调栈': 'heap',
  '有序集合': 'array',
  '队列': 'array',
  '拓扑排序': 'sort',
  '最短路': 'other',
  '双向链表': 'list',
  '单调队列': 'array',
  '最小生成树': 'tree',
  '欧拉回路': 'other',
  '双连通分量': 'other',
  '强连通分量': 'other',
  '并查集': 'other',
  '字典树': 'tree',
  '线段树': 'tree',
  '树状数组': 'array',
  '后缀数组': 'array',
  '双指针': 'other',
  '位运算': 'math',
  '前缀和': 'math',
  '计数': 'math',
  '滑动窗口': 'other',
  '状态压缩': 'other',
  '哈希函数': 'other',
  '滚动哈希': 'other',
  '扫描线': 'other',
  '数学': 'math',
  '几何': 'math',
  '博弈': 'math',
  '组合数学': 'math',
  '数论': 'math',
  '随机化': 'math',
  '概率与统计': 'math',
  '水塘抽样': 'math',
  '拒绝采样': 'math',
  '数据库': 'other',
  '设计': 'other',
  '数据流': 'other',
  '交互': 'other',
  '脑筋急转弯': 'other',
  '迭代器': 'other',
  '多线程': 'other',
  'Shell': 'other',
  '未知': 'other'
}

const map = new Map(Object.entries(obj))

// 代码处理
let code: string = (await page.evaluate('monaco.editor.getModels()[0].getValue()')) as string
const reg = /[^/\\]+[/\\]*$/
const fileName = reg.exec(url)?.shift()?.replace(/[\/$]+/g, '')
const filePath = join(__dirname, '../', map.get(classification) as string, fileName + '.ts')

if (!fileName) {
  console.log('未检测到文件名')
  exit(1)
}

const keyStr = code.match(/function\s.*?\(([^)]*)\)/ig)?.shift()
const functionName = keyStr?.match(/(function)([ \t])([^\(]+)/i)?.[3]
code = keyStr && !code.includes('export ') ? code.replace(keyStr, `export ${keyStr}`) : code

if (!code.includes(`// ${url}`)) {
  code = `// ${title}
// ${url}

` + code
}

let examples = await page.evaluate(() => {
  let examples = ``
  // @ts-ignore
  const headings = document.evaluate("//strong[contains(., '示例')]", document, null, XPathResult.ANY_TYPE, null)
  let iterateNext = headings.iterateNext()
  let isFirst = true
  while (iterateNext) {
    if (isFirst) {
      isFirst = false
    } else {
      examples += '\n'
    }
    examples += iterateNext.innerText + '\n'
    examples += iterateNext?.parentNode?.nextSibling?.nextSibling.innerText
    iterateNext = headings.iterateNext()
  }
  return examples
})

examples = examples.split('\n').map(item => {
  return item ? '  // ' + item : ''
}).join('\n')

const testCode = `import { ${functionName} } from '../../src/${map.get(classification) as string}/${fileName}'

test('${title}', () => {
${examples}
  expect(${functionName}()).toBeFalsy()
})`
const testFilePath = join(__dirname, '../../test/', map.get(classification) as string, fileName + '.test.ts')

if (!fs.existsSync(dirname(filePath))) fs.mkdirSync(dirname(filePath))
if (!fs.existsSync(dirname(testFilePath))) fs.mkdirSync(dirname(testFilePath))
fs.writeFileSync(filePath, code, 'utf-8')
fs.writeFileSync(testFilePath, testCode, 'utf-8')
execSync('code ' + testFilePath)
sleep(100)
execSync('code ' + filePath)

try {
  const isLogin = !((await page.$eval(`div[class*='AuthLinks']`, el => el.innerText))?.includes('登录'))

  if (!isLogin) {
    console.log('如果有会员建议在弹出的浏览器登陆，之后访问VIP题目时可获得访问权限。')
  }
} catch (_) { }

console.log('可以开始写代码了。')

const updateCode = async (filePath: string, title: string) => {
  let fileContent = fs.readFileSync(filePath, 'utf-8')
  if (fileContent.includes('export ')) fileContent = fileContent.replace(/export\s/ig, '')
  await page.evaluate(`monaco.editor.getModels()[0].setValue(\`${fileContent}\`)`)
  console.log(`${title} 代码已同步。`)
}

let timer: NodeJS.Timeout | null = null
const debounce = (func: Function, time: number) => {
  if (timer) return
  timer = setTimeout(() => {
    timer = null
    func.call(this)
  }, time)
}

fs.watchFile(filePath, async (curr, prev) => {
  debounce(() => {
    updateCode(filePath, title || fileName)
  }, 500)
})

// await browser.close()


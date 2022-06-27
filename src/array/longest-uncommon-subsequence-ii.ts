// 题目翻译：给出一个字符串数组，在里面找出字符串满足`当前字符串不是字符串数组中其他字符串的子序列`，返回满足条件的字符串中`最长的字符串的长度`

/**
 * 判断字符串是不是另一个字符串的子序列
 * @param str1 字符串1
 * @param str2 字符串2
 * @returns 是否是子序列
 */
export function isSubsequence(str1: string, str2: string): boolean {
  if (str1.length > str2.length) return false
  if (str1 === str2) return true

  let p = 0, q = 0

  while(p < str1.length && q < str2.length) {
    if (str1[p] === str2[q]) {
      p++
      q++
    } else {
      q++
    }
  }

  return p === str1.length
}

export function findLUSlength(strs: string[]): number {
  let ans = -1

  for (let i = 0, len = strs.length; i < len; i++) {
    let check = true
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      if (isSubsequence(strs[i], strs[j])) {
        check = false
        break
      }
    }
    if (check) { // 如果都不是子序列
      ans = Math.max(ans, strs[i].length)
    }
  }

  return ans
};
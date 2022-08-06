// 数组中的字符串匹配
// https://leetcode.cn/problems/string-matching-in-an-array
// INLINE  ../../images/string/string-matching-in-an-array.jpeg
// 思路：字符串出现次数>1就说明有其他包含该字符串的字符串

export function stringMatching (words: string[]): string[] {
  // return words.filter((word) => words.find(item => item.includes(word) && item.length > word.length))
  const allStr = words.join('|')
  return words.filter((word) => allStr.indexOf(word) !== allStr.lastIndexOf(word))
}
import { stringMatching } from '../../src/string/string-matching-in-an-array'

test('数组中的字符串匹配', () => {
  // 示例 1：
  // 输入：words = ["mass","as","hero","superhero"]
  // 输出：["as","hero"]
  // 解释："as" 是 "mass" 的子字符串，"hero" 是 "superhero" 的子字符串。
  // ["hero","as"] 也是有效的答案。
  expect(stringMatching(["mass", "as", "hero", "superhero"])).toEqual(["as", "hero"])

  // 示例 2：
  // 输入：words = ["leetcode","et","code"]
  // 输出：["et","code"]
  // 解释："et" 和 "code" 都是 "leetcode" 的子字符串。
  expect(stringMatching(["leetcode", "et", "code"])).toEqual(["et", "code"])

  // 示例 3：
  // 输入：words = ["blue","green","bu"]
  // 输出：[]

  expect(stringMatching(["blue", "green", "bu"])).toEqual([])
})
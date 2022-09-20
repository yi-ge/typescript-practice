import { lengthOfLongestSubstringKDistinct } from '../../src/map/longest-substring-with-at-most-k-distinct-characters'

test('至多包含 K 个不同字符的最长子串', () => {
  // 示例 1：
  // 输入：s = "eceba", k = 2
  // 输出：3
  // 解释：满足题目要求的子串是 "ece" ，长度为 3 。
  expect(lengthOfLongestSubstringKDistinct('eceba', 2)).toBe(3)

  // 示例 2：
  // 输入：s = "aa", k = 1
  // 输出：2
  // 解释：满足题目要求的子串是 "aa" ，长度为 2 。
  expect(lengthOfLongestSubstringKDistinct('aa', 1)).toBe(2)
})
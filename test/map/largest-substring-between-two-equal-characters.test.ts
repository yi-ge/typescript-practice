import { maxLengthBetweenEqualCharacters } from '../../src/map/largest-substring-between-two-equal-characters'

test('两个相同字符之间的最长子字符串', () => {
  // 示例 1：
  // 输入：s = "aa"
  // 输出：0
  // 解释：最优的子字符串是两个 'a' 之间的空子字符串。
  expect(maxLengthBetweenEqualCharacters('aa')).toBe(0)

  // 示例 2：
  // 输入：s = "abca"
  // 输出：2
  // 解释：最优的子字符串是 "bc" 。
  expect(maxLengthBetweenEqualCharacters('abca')).toBe(2)

  // 示例 3：
  // 输入：s = "cbzxy"
  // 输出：-1
  // 解释：s 中不存在出现出现两次的字符，所以返回 -1 。
  expect(maxLengthBetweenEqualCharacters('cbzxy')).toBe(-1)

  // 示例 4：
  // 输入：s = "cabbac"
  // 输出：4
  // 解释：最优的子字符串是 "abba" ，其他的非最优解包括 "bb" 和 "" 。
  expect(maxLengthBetweenEqualCharacters('cabbac')).toBe(4)
})
import { areAlmostEqual } from '../../src/map/check-if-one-string-swap-can-make-strings-equal'

test('仅执行一次字符串交换能否使两个字符串相等', () => {
  // 示例 1：
  // 输入：s1 = "bank", s2 = "kanb"
  // 输出：true
  // 解释：例如，交换 s2 中的第一个和最后一个字符可以得到 "bank"
  expect(areAlmostEqual("bank", "kanb")).toBeTruthy()

  // 示例 2：
  // 输入：s1 = "attack", s2 = "defend"
  // 输出：false
  // 解释：一次字符串交换无法使两个字符串相等
  expect(areAlmostEqual("attack", "defend")).toBeFalsy()

  // 示例 3：
  // 输入：s1 = "kelb", s2 = "kelb"
  // 输出：true
  // 解释：两个字符串已经相等，所以不需要进行字符串交换
  expect(areAlmostEqual("kelb", "kelb")).toBeTruthy()

  // 示例 4：
  // 输入：s1 = "abcd", s2 = "dcba"
  // 输出：false
  expect(areAlmostEqual("abcd", "dcba")).toBeFalsy()

  expect(areAlmostEqual("abcd", "abce")).toBeFalsy()
})
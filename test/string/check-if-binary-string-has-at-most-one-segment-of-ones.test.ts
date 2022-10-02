import { checkOnesSegment } from '../../src/string/check-if-binary-string-has-at-most-one-segment-of-ones'

test('检查二进制字符串字段', () => {
  // 示例 1：
  // 输入：s = "1001"
  // 输出：false
  // 解释：由连续若干个 '1' 组成的字段数量为 2，返回 false
  expect(checkOnesSegment("1001")).toBeFalsy()

  // 示例 2：
  // 输入：s = "110"
  // 输出：true
  expect(checkOnesSegment("110")).toBeTruthy()
})
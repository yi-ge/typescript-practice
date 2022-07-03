import { isUgly } from '../../src/math/ugly-number'

test('丑数', () => {
  // 示例 1：
  // 输入：n = 6
  // 输出：true
  // 解释：6 = 2 × 3
  // 示例 2：
  // 输入：n = 1
  // 输出：true
  // 解释：1 没有质因数，因此它的全部质因数是 {2, 3, 5} 的空集。习惯上将其视作第一个丑数。
  // 示例 3：
  // 输入：n = 14
  // 输出：false
  // 解释：14 不是丑数，因为它包含了另外一个质因数 7 。

  expect(isUgly(6)).toBeTruthy()
  expect(isUgly(1)).toBeTruthy()
  expect(isUgly(14)).toBeFalsy()
})
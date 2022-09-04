import { nextGreaterElement } from '../../src/math/next-greater-element-iii'

test('下一个更大元素 III', () => {
  // 示例 1：
  // 输入：n = 12
  // 输出：21

  // 示例 2：
  // 输入：n = 21
  // 输出：-1

  expect(nextGreaterElement(12)).toBe(21)
  expect(nextGreaterElement(21)).toBe(-1)
  expect(nextGreaterElement(230241)).toBe(230412)
  expect(nextGreaterElement(2 ** 31 - 1 + 1)).toBe(-1)
})
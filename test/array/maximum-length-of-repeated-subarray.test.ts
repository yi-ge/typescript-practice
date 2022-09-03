import { findLength } from '../../src/array/maximum-length-of-repeated-subarray'

test('最长重复子数组', () => {
  expect(findLength([], [])).toBe(0)
  expect(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toBe(3)
})

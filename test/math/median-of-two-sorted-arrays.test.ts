import { findMedianSortedArrays } from '../../src/math/median-of-two-sorted-arrays'

test('寻找两个正序数组的中位数', () => {
  expect(findMedianSortedArrays([], [1])).toBe(1.0)
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0)
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5)
  expect(findMedianSortedArrays([1, 4], [3, 4])).toBe(3.5)
})

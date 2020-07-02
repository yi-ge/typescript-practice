import { kthSmallest } from '../../src/array/kth-smallest-element-in-a-sorted-matrix.js'

test('有序矩阵中第K小的元素', () => {
  expect(kthSmallest([
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
  ], 8)).toBe(13)

  expect(kthSmallest([
    [1, 5, 7],
    [3, 7, 8],
    [4, 8, 9]
  ], 4)).toBe(5)

  expect(kthSmallest([
    [1, 2],
    [3, 4]
  ], 3)).toBe(3)
})

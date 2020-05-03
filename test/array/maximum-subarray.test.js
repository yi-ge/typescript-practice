import { maxSubArray } from '../../src/array/maximum-subarray'

test('最大子序和', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  // expect(maxSubArray([-2, 2, -3, 4, -1, 2, 1, -5, 3])).toBe(5)
})

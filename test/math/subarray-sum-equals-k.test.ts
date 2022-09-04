import { subarraySum } from '../../src/math/subarray-sum-equals-k'

test('和为K的子数组', () => {
  expect(subarraySum([1, 1, 1], 2)).toBe(2)
  expect(subarraySum([0, 0], 2)).toBe(0)
})

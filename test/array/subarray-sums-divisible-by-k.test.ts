import { subarraysDivByK } from '../../src/array/subarray-sums-divisible-by-k'

test('和可被K整除的子数组', () => {
  expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7)
})

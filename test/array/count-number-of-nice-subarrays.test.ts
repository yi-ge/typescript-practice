import { numberOfSubarrays } from '../../src/array/count-number-of-nice-subarrays'

test('统计「优美子数组」', () => {
  expect(numberOfSubarrays([1, 1, 2, 1, 1], 3)).toBe(2)
  expect(numberOfSubarrays([2, 4, 6], 1)).toBe(0)
  expect(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toBe(16)
})

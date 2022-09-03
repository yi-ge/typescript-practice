import { largestNumber } from '../../src/string/largest-number'

test('最大数', () => {
  expect(largestNumber([10, 2])).toBe('210')
  expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330')
  expect(largestNumber([1, 20, 23, 4, 8])).toBe('8423201')
  expect(largestNumber([4, 6, 65])).toBe('6654')
  expect(largestNumber([])).toBe('0')
  expect(largestNumber([0, 0])).toBe('0')
})

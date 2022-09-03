import { firstUniqueNumber } from '../../src/array/first-unique-number-in-data-stream'

test('数据流中第一个唯一的数字', () => {
  expect(firstUniqueNumber([], -1)).toBe(-1)
  expect(firstUniqueNumber([1, 2, 2, 1, 3, 4, 4, 5, 6], 5)).toBe(3)
  expect(firstUniqueNumber([1, 2, 2, 1, 3, 4, 4, 5, 6], 7)).toBe(-1)
  expect(firstUniqueNumber([1, 2, 2, 1, 3, 4], 3)).toBe(3)
})

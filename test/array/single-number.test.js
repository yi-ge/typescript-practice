import { singleNumber } from '../../src/array/single-number'

test('只出现一次的数字', () => {
  expect(singleNumber([2, 2, 1])).toBe(1)
  expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
})

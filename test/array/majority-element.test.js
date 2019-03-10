import { majorityElement } from '../../src/array/majority-element'

test('主元素', () => {
  expect(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5])).toBe(5)
  expect(majorityElement([1, 1, 1, 1, 2, 2, 2])).toBe(1)
  expect(majorityElement([1, 1, 1, 2, 2, 2, 2])).toBe(2)
  expect(majorityElement([3, 2])).toBe(-1)
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  expect(majorityElement([1])).toBe(1)
  expect(majorityElement([2, 2])).toBe(2)
})

import firstMissingPositive from '../../src/array/first-missing-positive'

test('缺失的第一个正数', () => {
  expect(firstMissingPositive([-1])).toBe(1)
  expect(firstMissingPositive([0])).toBe(1)
  expect(firstMissingPositive([])).toBe(1)
  expect(firstMissingPositive([3, 2, -1])).toBe(1)
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
  expect(firstMissingPositive([1, 2, 0])).toBe(3)
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1)
})

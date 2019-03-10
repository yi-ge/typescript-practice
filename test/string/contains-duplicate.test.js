import { containsDuplicate } from '../../src/string/contains-duplicate'

test('存在重复元素', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
})

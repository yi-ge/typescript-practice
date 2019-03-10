import { isUnique } from '../../src/string/unique-characters'

test('判断字符串是否没有重复字符', () => {
  expect(isUnique('abc___')).toBe(false)
  expect(isUnique('abc')).toBe(true)
})

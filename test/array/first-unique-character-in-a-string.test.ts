import { firstUniqChar } from '../../src/array/first-unique-character-in-a-string'

test('第一个只出现一次的字符', () => {
  expect(firstUniqChar('leetcode')).toBe('l')
})

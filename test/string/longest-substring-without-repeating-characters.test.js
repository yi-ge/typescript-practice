import { lengthOfLongestSubstring } from '../../src/string/longest-substring-without-repeating-characters'

test('最长无重复字符的子串', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  expect(lengthOfLongestSubstring('')).toBe(0)
  expect(lengthOfLongestSubstring(' ')).toBe(1)
  expect(lengthOfLongestSubstring('au')).toBe(2)
  expect(lengthOfLongestSubstring('dvdf')).toBe(3)
})

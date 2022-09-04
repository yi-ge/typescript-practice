import { longestPalindrome } from '../../src/string/longest-palindromic-substring'

test('最长回文字符串', () => {
  expect(longestPalindrome('a')).toBe('a') // 边界条件
  expect(longestPalindrome('bb')).toBe('bb') // 边界条件
  expect(longestPalindrome('ab')).toBe('b') // 边界条件
  expect(longestPalindrome(' ')).toBe('') // 边界条件
  expect(longestPalindrome('babad')).toBe('aba') // bab也是有效答案
  expect(longestPalindrome('cbbd')).toBe('bb')
})

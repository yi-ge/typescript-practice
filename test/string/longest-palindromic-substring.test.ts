import { longestPalindrome } from '../../src/string/longest-palindromic-substring'

test('最长回文字符串', () => {
  expect(longestPalindrome('babad')).toBe('aba') // bab也是有效答案
  expect(longestPalindrome('cbbd')).toBe('bb')
})

import { validPalindrome } from '../../src/string/valid-palindrome-ii'

test('验证回文字符串 Ⅱ', () => {
  expect(validPalindrome('aba')).toBe(true)
  expect(validPalindrome('abba')).toBe(true)
  expect(validPalindrome('abca')).toBe(true)
  expect(validPalindrome('abcda')).toBe(false)
})

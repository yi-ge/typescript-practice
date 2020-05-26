import { isPalindrome } from '../../src/math/palindrome-number'

test('回文数', () => {
  expect(isPalindrome(121)).toBe(true)
  expect(isPalindrome(0)).toBe(true)
  expect(isPalindrome(11)).toBe(true)
  expect(isPalindrome(10)).toBe(false)
  expect(isPalindrome(-121)).toBe(false)
})

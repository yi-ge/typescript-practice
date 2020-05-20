import { findTheLongestSubstring } from '../../src/string/find-the-longest-substring-containing-vowels-in-even-counts'

test('每个元音包含偶数次的最长子字符串', () => {
  expect(findTheLongestSubstring('eleetminicoworoep')).toBe(13)
  expect(findTheLongestSubstring('leetcodeisgreat')).toBe(5)
  expect(findTheLongestSubstring('bcbcbc')).toBe(6)
})

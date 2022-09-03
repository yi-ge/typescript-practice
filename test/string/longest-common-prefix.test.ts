import { longestCommonPrefix } from '../../src/string/longest-common-prefix'

test('最长公共前缀', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  expect(longestCommonPrefix(['a'])).toBe('a')
  expect(longestCommonPrefix(['caa', '', 'a', 'acb'])).toBe('')
})

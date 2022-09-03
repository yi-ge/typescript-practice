import { minWindow } from '../../src/string/minimum-window-substring'

test('最小覆盖子串', () => {
  expect(minWindow('ab', 'a')).toBe('a')
  expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC')
  expect(minWindow('a', 'a')).toBe('a')
  expect(minWindow('a', 'aa')).toBe('')
  expect(minWindow('abcdc', 'da')).toBe('abcd')
})

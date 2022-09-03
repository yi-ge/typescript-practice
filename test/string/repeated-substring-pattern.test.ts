import repeatedSubstringPattern from '../../src/string/repeated-substring-pattern'

test('repeatedSubstringPattern', () => {
  expect(repeatedSubstringPattern('abab')).toEqual(true)
  expect(repeatedSubstringPattern('ab')).toEqual(false)
  expect(repeatedSubstringPattern('aba')).toEqual(false)
  expect(repeatedSubstringPattern('abcabcabcabc')).toEqual(true)
})

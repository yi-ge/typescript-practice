import { maxVowels } from '../../src/string/maximum-number-of-vowels-in-a-substring-of-given-length'

test('定长子串中元音的最大数目', () => {
  expect(maxVowels('abciiidef', 3)).toBe(3)
  expect(maxVowels('rhythms', 4)).toBe(0)
})

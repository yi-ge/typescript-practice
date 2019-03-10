import letterCombinations from '../../src/array/letter-combinations-of-a-phone-number'

test('letterCombinations', () => {
  expect(letterCombinations('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})

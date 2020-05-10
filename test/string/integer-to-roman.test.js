import { intToRoman } from '../../src/string/integer-to-roman'

test('整数转罗马数字', () => {
  expect(intToRoman(2)).toBe('II')
  expect(intToRoman(3)).toBe('III')
  expect(intToRoman(4)).toBe('IV')
  expect(intToRoman(9)).toBe('IX')
  expect(intToRoman(58)).toBe('LVIII')
})

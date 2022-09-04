import { romanToInt } from '../../src/string/roman-to-integer'

test('罗马数字转整数', () => {
  expect(romanToInt('1')).toBe(0)
  expect(romanToInt('III')).toBe(3)
  expect(romanToInt('IV')).toBe(4)
  expect(romanToInt('IX')).toBe(9)
  expect(romanToInt('LVIII')).toBe(58)
})

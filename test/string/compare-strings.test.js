import { compareStrings } from '../../src/string/compare-strings'

test('比较字符串', () => {
  expect(compareStrings('ABCD', 'AB')).toBe(true)
  expect(compareStrings('ABCD', 'ACD')).toBe(true)
  expect(compareStrings('ABCD', 'AABC')).toBe(false)
})

import { convert } from '../../src/array/zigzag-conversion'

test('Z 字形变换', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
  expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
  expect(convert('A', 1)).toBe('A')
  expect(convert('AB', 1)).toBe('AB')
})
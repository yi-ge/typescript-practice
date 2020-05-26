import { myPow } from '../../src/math/powx-n'

test('Pow(x, n)', () => {
  expect(myPow(2.00000, 10)).toBe('1024.00000')
  expect(myPow(2.10000, 3)).toBe('9.26100')
  expect(myPow(2.00000, -2)).toBe('0.25000')
})

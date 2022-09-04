import { nthUglyNumber } from '../../src/math/ugly-number-ii'

test('丑数 II', () => {
  expect(nthUglyNumber(9)).toBe(10)
  expect(nthUglyNumber(1)).toBe(1)
  expect(nthUglyNumber(10)).toBe(12)
  expect(nthUglyNumber(0)).toBe(0)
})

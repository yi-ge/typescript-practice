import trailingZeroes from '../../src/math/factorial-trailing-zeroes'

test('trailingZeroes', () => {
  expect(trailingZeroes(3)).toBe(0)
  expect(trailingZeroes(5)).toBe(1)
})

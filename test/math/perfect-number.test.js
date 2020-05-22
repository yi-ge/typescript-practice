import { checkPerfectNumber } from '../../src/math/perfect-number'

test('完美数', () => {
  expect(checkPerfectNumber(28)).toBe(true)
  expect(checkPerfectNumber(2)).toBe(false)
})

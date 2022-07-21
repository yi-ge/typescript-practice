import { waysToChange } from '../../src/math/coin-lcci'

test('硬币', () => {
  expect(waysToChange(5)).toBe(2)
  expect(waysToChange(10)).toBe(4)
})

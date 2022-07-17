import { maxProfit } from '../../src/array/best-time-to-buy-and-sell-stock-ii'

test('maxProfit', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  expect(maxProfit([])).toBe(0)
  expect(maxProfit([2, 1, 2, 0, 1])).toBe(2)
})

import maxProfit from '../../src/array/best-time-to-buy-and-sell-stock-ii'

test('maxProfit', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7)
  expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4)
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)
  expect(maxProfit([])).toEqual(0)
  expect(maxProfit([2, 1, 2, 0, 1])).toEqual(2)
})

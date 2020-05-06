import { mincostTickets } from '../../src/array/minimum-cost-for-tickets'

test('最低票价', () => {
  expect(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])).toBe(11)
  expect(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])).toBe(17)
})

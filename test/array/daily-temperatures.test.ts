import { dailyTemperatures } from '../../src/array/daily-temperatures'

test('每日温度', () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0])
})

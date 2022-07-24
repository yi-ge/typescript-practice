import { distanceBetweenBusStops } from '../../src/array/distance-between-bus-stops'

test('公交站间的距离', () => {
  // 示例 1：
  expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)).toBe(1)

  // 示例 2：
  expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)).toBe(3)

  // 示例 3：
  expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)).toBe(4)

  expect(distanceBetweenBusStops([1, 2, 3, 4], 3, 0)).toBe(4)
})
import { minRefuelStops } from '../../src/other/minimum-number-of-refueling-stops'

test('最低加油次数', () => {
  // 示例 1：
  // 输入：target = 1, startFuel = 1, stations = []
  // 输出：0
  // 解释：我们可以在不加油的情况下到达目的地。

  // 示例 2：
  // 输入：target = 100, startFuel = 1, stations = [[10,100]]
  // 输出：-1
  // 解释：我们无法抵达目的地，甚至无法到达第一个加油站。

  // 示例 3：
  // 输入：target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
  // 输出：2
  // 解释：
  // 我们出发时有 10 升燃料。
  // 我们开车来到距起点 10 英里处的加油站，消耗 10 升燃料。将汽油从 0 升加到 60 升。
  // 然后，我们从 10 英里处的加油站开到 60 英里处的加油站（消耗 50 升燃料），
  // 并将汽油从 10 升加到 50 升。然后我们开车抵达目的地。
  // 我们沿途在1两个加油站停靠，所以返回 2 。

  expect(minRefuelStops(1, 1, [])).toBe(0)
  expect(minRefuelStops(100, 1, [[10, 100]])).toBe(-1)
  expect(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]])).toBe(2)
  expect(minRefuelStops(31, 1, [[1, 10], [11, 0]])).toBe(-1)
})
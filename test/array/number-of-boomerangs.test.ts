import { numberOfBoomerangs } from '../../src/array/number-of-boomerangs'

test('回旋镖的数量', () => {
  // 示例 1：
  // 输入：points = [[0,0],[1,0],[2,0]]
  // 输出：2
  // 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]

  // 示例 2：
  // 输入：points = [[1,1],[2,2],[3,3]]
  // 输出：2

  // 示例 3：
  // 输入：points = [[1,1]]
  // 输出：0

  expect(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]])).toBe(2)
  expect(numberOfBoomerangs([[1, 1], [2, 2], [3, 3]])).toBe(2)
  expect(numberOfBoomerangs([[1, 1]])).toBe(0)
})
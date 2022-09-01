import { findJudge } from '../../src/graphs/find-the-town-judge'

test('找到小镇的法官', () => {
  // 示例 1：
  // 输入：n = 2, trust = [[1,2]]
  // 输出：2
  expect(findJudge(2, [[1, 2]])).toBe(2)

  // 示例 2：
  // 输入：n = 3, trust = [[1,3],[2,3]]
  // 输出：3
  expect(findJudge(3, [[1, 3], [2, 3]])).toBe(3)

  // 示例 3：
  // 输入：n = 3, trust = [[1,3],[2,3],[3,1]]
  // 输出：-1
  expect(findJudge(3, [[1, 3], [2, 3], [3, 1]])).toBe(-1)
})
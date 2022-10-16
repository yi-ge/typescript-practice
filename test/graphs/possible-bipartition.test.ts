import { possibleBipartition } from '../../src/graphs/possible-bipartition'

test('可能的二分法', () => {
  // 示例 1：
  // 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
  // 输出：true
  // 解释：group1 [1,4], group2 [2,3]
  expect(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])).toBeTruthy()

  // 示例 2：
  // 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
  // 输出：false
  expect(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]])).toBeFalsy()

  // 示例 3：
  // 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
  // 输出：false
  expect(possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]])).toBeFalsy()

  expect(possibleBipartition(1, [])).toBeTruthy()
})
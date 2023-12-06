import { minimumTotalPrice } from '../../src/graphs/minimize-the-total-price-of-the-trips'

test('最小化旅行的价格总和', () => {
  // 示例 1：
  // 输入：n = 4, edges = [[0,1],[1,2],[1,3]], price = [2,2,10,6], trips = [[0,3],[2,1],[2,3]]
  // 输出：23
  // 解释：
  // 上图表示将节点 2 视为根之后的树结构。第一个图表示初始树，第二个图表示选择节点 0 、2 和 3 并使其价格减半后的树。
  // 第 1 次旅行，选择路径 [0,1,3] 。路径的价格总和为 1 + 2 + 3 = 6 。
  // 第 2 次旅行，选择路径 [2,1] 。路径的价格总和为 2 + 5 = 7 。
  // 第 3 次旅行，选择路径 [2,1,3] 。路径的价格总和为 5 + 2 + 3 = 10 。
  // 所有旅行的价格总和为 6 + 7 + 10 = 23 。可以证明，23 是可以实现的最小答案。

  const n1 = 4
  const edges1 = [
    [0, 1],
    [1, 2],
    [1, 3],
  ]
  const price1 = [2, 2, 10, 6]
  const trips1 = [
    [0, 3],
    [2, 1],
    [2, 3],
  ]
  expect(minimumTotalPrice(n1, edges1, price1, trips1)).toBe(23)

  // 示例 2：
  // 输入：n = 2, edges = [[0,1]], price = [2,2], trips = [[0,0]]
  // 输出：1
  // 解释：
  // 上图表示将节点 0 视为根之后的树结构。第一个图表示初始树，第二个图表示选择节点 0 并使其价格减半后的树。
  // 第 1 次旅行，选择路径 [0] 。路径的价格总和为 1 。
  // 所有旅行的价格总和为 1 。可以证明，1 是可以实现的最小答案。

  const n2 = 2
  const edges2 = [[0, 1]]
  const price2 = [2, 2]
  const trips2 = [[0, 0]]
  expect(minimumTotalPrice(n2, edges2, price2, trips2)).toBe(1)
})

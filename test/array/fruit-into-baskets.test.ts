import { totalFruit } from '../../src/array/fruit-into-baskets'

test('水果成篮', () => {
  // 示例 1：
  // 输入：fruits = [1,2,1]
  // 输出：3
  // 解释：可以采摘全部 3 棵树。
  expect(totalFruit([1, 2, 1])).toBe(3)

  // 示例 2：
  // 输入：fruits = [0,1,2,2]
  // 输出：3
  // 解释：可以采摘 [1,2,2] 这三棵树。
  // 如果从第一棵树开始采摘，则只能采摘 [0,1] 这两棵树。
  expect(totalFruit([0, 1, 2, 2])).toBe(3)

  // 示例 3：
  // 输入：fruits = [1,2,3,2,2]
  // 输出：4
  // 解释：可以采摘 [2,3,2,2] 这四棵树。
  // 如果从第一棵树开始采摘，则只能采摘 [1,2] 这两棵树。
  expect(totalFruit([1, 2, 3, 2, 2])).toBe(4)

  // 示例 4：
  // 输入：fruits = [3,3,3,1,2,1,1,2,3,3,4]
  // 输出：5
  // 解释：可以采摘 [1,2,1,1,2] 这五棵树。
  expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toBe(5)
})
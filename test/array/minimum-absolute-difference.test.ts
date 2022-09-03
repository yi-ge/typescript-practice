import { minimumAbsDifference } from '../../src/array/minimum-absolute-difference'

test('最小绝对差', () => {
  // 示例 1：
  // 输入：arr = [4,2,1,3]
  // 输出：[[1,2],[2,3],[3,4]]
  expect(minimumAbsDifference([4, 2, 1, 3])).toEqual([[1, 2], [2, 3], [3, 4]])

  // 示例 2：
  // 输入：arr = [1,3,6,10,15]
  // 输出：[[1,3]]
  expect(minimumAbsDifference([1, 3, 6, 10, 15])).toEqual([[1, 3]])

  // 示例 3：
  // 输入：arr = [3,8,-10,23,19,-4,-14,27]
  // 输出：[[-14,-10],[19,23],[23,27]]
  expect(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])).toEqual([[-14, -10], [19, 23], [23, 27]])

  expect(minimumAbsDifference([5, 4, 3, 2])).toEqual([[2, 3], [3, 4], [4, 5]])
})
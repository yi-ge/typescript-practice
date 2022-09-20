import { countGoodTriplets } from '../../src/array/count-good-triplets'

test('统计好三元组', () => {
  // 示例 1：
  // 输入：arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
  // 输出：4
  // 解释：一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。
  expect(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)).toBe(4)

  // 示例 2：
  // 输入：arr = [1,1,2,2,3], a = 0, b = 0, c = 1
  // 输出：0
  // 解释：不存在满足所有条件的三元组。
  expect(countGoodTriplets([1, 1, 2, 3], 0, 0, 1)).toBe(0)
})
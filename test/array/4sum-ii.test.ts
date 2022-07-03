import { fourSumCount } from '../../src/array/4sum-ii'

test('四数相加 II', () => {
  // 示例 1：
  // 输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
  // 输出：2
  // 解释：
  // 两个元组如下：
  // 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
  // 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

  // 示例 2：
  // 输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
  // 输出：1

  expect(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])).toBe(2)
  expect(fourSumCount([0], [0], [0], [0])).toBe(1)
  expect(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1])).toBe(6)
  expect(fourSumCount([-1, 1, 1, 1, -1]
    , [0, -1, -1, 0, 1]
    , [-1, -1, 1, -1, -1]
    , [0, 1, 0, -1, -1])).toBe(132)
})
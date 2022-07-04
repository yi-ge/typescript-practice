import { containsNearbyAlmostDuplicate } from '../../src/array/contains-duplicate-iii'

test('存在重复元素 III', () => {
  // 示例 1：
  // 输入：nums = [1,2,3,1], k = 3, t = 0
  // 输出：true
  // 示例 2：
  // 输入：nums = [1,0,1,1], k = 1, t = 2
  // 输出：true
  // 示例 3：
  // 输入：nums = [1,5,9,1,5,9], k = 2, t = 3
  // 输出：false
  expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toBeTruthy()
  expect(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)).toBeTruthy()
  expect(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)).toBeFalsy()
})
// 存在重复元素 III
// https://leetcode.cn/problems/contains-duplicate-iii/
// INLINE  ../../images/array/contains-duplicate-iii.jpeg

export function containsNearbyAlmostDuplicate (nums: number[], k: number, t: number): boolean {
  const set = new Set<number>()
  for (let i = 0, len = nums.length; i < len; i++) {
    let min = Number.MAX_VALUE
    for (const n of set.values()) { // abs(nums[i] - nums[j]) <= t
      if (n /*?*/ >= nums[i] - t) {
        min = Math.min(min, n)
      }
    }
    if (min !== Number.MAX_VALUE && min/*?*/ <= nums[i] + t) return true

    set.add(nums[i]) /*?*/

    // 如果出现重复元素， set 的 size 不能反映实际长度。但是本题不受影响
    if (set.size > k) { // 满足 abs(i - j) <= k
      set.delete(nums[i - k]) /*?*/
    }
  }

  return false
}
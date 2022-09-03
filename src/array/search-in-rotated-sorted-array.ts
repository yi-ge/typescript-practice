/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = function (nums: number[], target: number): number {
  // 参考 src/array/binary-search.ts
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] === target) return mid

    if (nums[l] <= nums[mid]) {
      if (nums[mid] > target && nums[l] <= target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// export const search = (nums, target) => {
//   return nums.indexOf(target)
// }

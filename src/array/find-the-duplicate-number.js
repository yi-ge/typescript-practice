/**
 * @param {number[]} nums
 * @return {number}
 */
export const findDuplicate = function (nums) {
  const len = nums.length
  let l = 0; let r = len - 1; let res = -1 // 数字都在1-n
  while (l <= r) {
    const mid = (l + r) >> 1
    let cnt = 0
    for (let i = 0; i < len; i++) {
      cnt += nums[i] <= mid // true = 1，满足条件才计数
    }

    if (cnt <= mid) {
      l = mid + 1
    } else {
      r = mid - 1
      res = mid
    }
  }

  return res
}

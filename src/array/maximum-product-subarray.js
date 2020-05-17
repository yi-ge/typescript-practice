/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxProduct = function (nums) {
  let res = nums[0]
  let prevMin = nums[0]
  let prevMax = nums[0]
  let tmp1 = 0; let tmp2 = 0
  for (let i = 1; i < nums.length; i++) {
    tmp1 = prevMin * nums[i]
    tmp2 = prevMax * nums[i]
    prevMin = Math.min(tmp1, tmp2, nums[i])
    prevMax = Math.max(tmp1, tmp2, nums[i])
    res = Math.max(prevMax, res)
  }
  return res
}

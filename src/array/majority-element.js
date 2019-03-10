/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function (nums) {
  if (nums.length === 1) return nums[0]
  const tmp = nums.sort((a, b) => a - b)
  const res = tmp[~~(nums.length / 2)]
  if (nums.length > 2) return res
  if (nums.length === 2 && nums[0] === nums[1]) {
    return res
  }
  return -1
}

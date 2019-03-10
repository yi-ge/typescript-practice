/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const res = nums.findIndex(item => item === target)
  if (res !== -1) return res

  if (target < nums[0]) return 0

  for (const n in nums) {
    if (nums[n] > target) {
      return Number(n)
    }
  }

  return nums.length
}

export default searchInsert

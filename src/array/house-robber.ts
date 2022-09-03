/**
 * @param {number[]} nums
 * @return {number}
 */
export const rob = function (nums?: number[]): number {
  if (!nums) return 0
  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]

  let first = nums[0]; let second = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    const temp = second
    second = Math.max(first + nums[i], second)
    first = temp
  }
  return second
}

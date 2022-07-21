/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function (nums:number[]):number {
  let max = nums[0]
  let tmp = 0
  nums.forEach(n => { max = Math.max(tmp > 0 ? tmp += n : tmp = n, max) })
  // 如果当前指针所指元素之前的和小于0，则丢弃当前元素之前的数列
  return max
}

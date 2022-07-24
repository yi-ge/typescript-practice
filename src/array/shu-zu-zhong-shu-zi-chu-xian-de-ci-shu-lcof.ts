/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const singleNumbers = function (nums:number[]):number[] {
  const ab = nums.reduce((a, b) => a ^ b)
  const diff = ab & -ab
  const num1 = nums.reduce((a, n) => n & diff ? a ^ n : a, 0)

  return [num1, ab ^ num1]
}

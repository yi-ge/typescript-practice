/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = function (nums: number[]) {
  return new Set(nums).size !== nums.length
}

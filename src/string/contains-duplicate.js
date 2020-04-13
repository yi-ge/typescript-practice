/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length
}

/**
 * @param {number[]} nums
 * @return {number}
 */
export var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b)
}

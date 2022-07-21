/**
 * @param {number[]} nums
 * @return {number}
 */
export var singleNumber = function (nums:number[]):number {
  return nums.reduce((a, b) => a ^ b)
}

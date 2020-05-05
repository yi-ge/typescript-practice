/**
 * @param {number[]} nums
 * @return {string}
 */
export const largestNumber = function (nums) {
  return nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('').replace(/^0+/, '') || '0'
}

/**
 * @param {number} num
 * @return {string}
 */
export const intToRoman = function (num: number) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const chars = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let result = ''
  while (num) {
    if (num >= nums[0]) { // 3 > 1 => 2 > 1 => 1 == 1
      result += chars[0] // I => II => III
      num -= nums[0] // 3 -> 2 => 2 -> 1 => 1 => 0
    } else {
      nums.shift()
      chars.shift()
    }
  }
  return result
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = function (nums) {
  const ans = []
  for (let i = 0, len = nums.length; i < len; i++) {
    let tmpL = 1
    let tmpR = 1
    for (let j = 0; j < len; j++) {
      if (j < i) {
        tmpL *= nums[j]
      } else if (j > i) {
        tmpR *= nums[j]
      }
    }
    ans.push(tmpL * tmpR)
  }

  return ans
}

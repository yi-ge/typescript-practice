/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canJump = function (nums:number[]):boolean {
  let maxLength = nums[0]

  for (let n = 1, len = nums.length; n < len; n++) {
    if (n > maxLength) return false // 如果能调最远的距离没有超过当前起跳距离，必然失败
    const tmp = n + nums[n]
    if (tmp > maxLength) maxLength = tmp // 获取能跳最远的距离
  }

  return true
}

// let maxLength = 0

// for (const n in nums) {
//   if (n > maxLength) return false // 如果能调最远的距离没有超过当前起跳距离，必然失败
//   maxLength = Math.max(maxLength, Number(n) + nums[n]) // 获取能跳最远的距离
// }

// return true

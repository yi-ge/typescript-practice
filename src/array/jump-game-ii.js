/**
 * @param {number[]} nums
 * @return {number}
 */
export const jump = function (nums) {
  let step = 0 // 跳跃步数
  let maxPosition = 0 // 最大位置
  let lastJumpStepMax = 0 // 最后一次跳跃最大能跳的步数

  for (let n = 0, len = nums.length; n < len - 1; n++) {
    maxPosition = Math.max(maxPosition, nums[n] + n)
    if (lastJumpStepMax === n) { // 从当前位置开始，到当前能跳的位置这个区间，谁最大，就选谁，并跳一次
      lastJumpStepMax = maxPosition
      step++
    }
    if (lastJumpStepMax > len) return step
  }

  return step
}

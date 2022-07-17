// LeetCode 457. 环形数组循环 https://leetcode-cn.com/problems/circular-array-loop/
// LintCode 1229. 循环数组中的环 https://www.lintcode.com/problem/circular-array-loop/description

const getNextIndex = (nums: number[], len: number, cur: number) => {
  return ((cur + nums[cur]) % len + len) % len
}

export function circularArrayLoop (nums: number[]): boolean {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) continue
    let slow = i, fast = getNextIndex(nums, len, i)
    while (nums[slow] * nums[fast] > 0 && nums[slow] * nums[getNextIndex(nums, len, fast)] > 0) { // 方向相同
      if (slow === fast) {
        if (slow !== getNextIndex(nums, len, slow)) {
          return true
        } else {
          break
        }
      }
      slow = getNextIndex(nums, len, slow)
      fast = getNextIndex(nums, len, getNextIndex(nums, len, fast))
    }
    let add = i
    while (nums[add] * nums[getNextIndex(nums, len, add)] > 0) {
      const tmp = add
      add = getNextIndex(nums, len, add)
      nums[tmp] = 0
    }
  }
  return false
}
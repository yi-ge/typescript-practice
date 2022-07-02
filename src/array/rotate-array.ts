// 轮转数组
// https://leetcode.cn/problems/rotate-array/

/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate (nums: number[], k: number): void {
  const len = nums.length
  nums.push(...nums)
  while (len - k < 0) {
    k = k - len
  }
  nums.splice(0, len - k)
  nums.splice(len)
}
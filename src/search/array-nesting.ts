// 数组嵌套
// https://leetcode.cn/problems/array-nesting
// INLINE  ../../images/search/array-nesting.jpeg

export function arrayNesting (nums: number[]): number {
  let maxNesting = 0
  const set = new Set()
  for (let i = 0, len = nums.length; i < len; i++) {
    let nesting = 0
    let nextIndex = nums[i]
    while (nextIndex >= 0 && nextIndex <= len - 1) {
      if (set.has(nextIndex)) {
        break
      } else {
        set.add(nextIndex)
        nesting++
        nextIndex = nums[nextIndex]
      }
    }
    maxNesting = Math.max(maxNesting, nesting)
  }
  return maxNesting
}
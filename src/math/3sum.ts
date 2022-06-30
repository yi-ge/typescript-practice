// 一年前做过。复制自：https://leetcode-cn.com/problems/3sum/solution/three-sum-ti-jie-by-wonderful611/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = function (nums: number[]): number[][] {
  const res = []
  const length = nums.length
  nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break // 优化2: 最左值为正数则一定无解
      let first = i + 1
      let last = length - 1
      do {
        if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
        const result = nums[i] + nums[first] + nums[last]
        if (result === 0) { // 如果可以组队
          res.push([nums[i], nums[first], nums[last]])
        }
        if (result <= 0) { // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]) { } // 如果相等就跳过
        } else { // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) { }
        }
      } while (first < last)
      while (nums[i] === nums[++i]) { }
    }
  }
  return res
}

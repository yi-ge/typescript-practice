// LeetCode 26. 删除排序数组中的重复项 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// LintCode 100. 删除排序数组中的重复数字 https://www.lintcode.com/problem/remove-duplicates-from-sorted-array/description

export default (nums:number[]):number => {
  if (!nums || (nums && nums.length === 0)) return 0
  let i = 0
  for (let n = 1, len = nums.length; n < len; n++) {
    if (nums[n] !== nums[i]) {
      nums[++i] = nums[n]
      if (i !== n && n === len - 1) {
        nums.splice(n, 1)
      }
    }
  }

  return i + 1
}

// LintCode 31. 数组划分 https://www.lintcode.com/problem/partition-array/description

export default (nums:number[], k:number) => {
  if (nums !== null) {
    if (nums.length === 0) return 0

    let start = 0
    let end = nums.length - 1

    while (start <= end) {
      while (start < end && nums[start] < k) {
        start++
      }

      while (start <= end && nums[end] >= k) {
        end--
      }

      if (start <= end) {
        const tmp = nums[start]
        nums[start] = nums[end]
        nums[end] = tmp
        start++
        end--
      }
    }

    return start
  } else {
    throw new Error('数组不能为null')
  }
}

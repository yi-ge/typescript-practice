export const search = function (nums: number[], target: number): number {
  if (!nums || nums.length === 0) return -1

  let start = 0
  let end = nums.length
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2)
    if (target === nums[mid]) {
      end = mid
    } else if (target < nums[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  if (target === nums[start]) {
    return start
  }

  return -1
}

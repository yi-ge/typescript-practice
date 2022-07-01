/**
 Do not return anything, modify nums in-place instead.
 */
export function wiggleSort (nums: number[]): void {
  const [...cp] = nums, n = nums.length
  cp.sort((a, b) => a - b)
  for (let i = Math.floor((n + 1) / 2) - 1, j = n - 1, idx = 0; idx < n; idx++, i--, j--) {
    nums[idx++] = cp[i]
    if (idx < n) nums[idx] = cp[j]
  }
}
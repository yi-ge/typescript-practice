export function threeSumClosest (nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]

  for (let i = 0, len = nums.length - 2; i < len; i++) {
    let left = i + 1
    let right = len + 1
    while (left !== right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }

      if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }

  return res
}
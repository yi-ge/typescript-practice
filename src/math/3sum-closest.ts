export function threeSumClosest (nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[2]

  for (let i = 0, len = nums.length - 2; i < len && res !== target; i++) {
    let left = i + 1
    let right = len + 1
    while (left !== right) {
      // 判断最小值
      let min = nums[i] + nums[left] + nums[left + 1]
      if (target < min) {
        if (Math.abs(min - target) < Math.abs(res - target)) res = min
        break
      }

      //判断最大值
      let max = nums[i] + nums[right] + nums[right - 1]
      if (target > max) {
        if (Math.abs(max - target) < Math.abs(res - target)) res = max
        break
      }

      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }

      if (sum > target) {
        right--
        while (left !== right && nums[right] === nums[right + 1]) { // 去重
          right--
        }
      } else {
        left++
        while (left !== right && nums[left] === nums[left - 1]) { // 去重
          left++
        }
      }

      while (i < len && nums[i] == nums[i + 1]) { // 去重
        i++
      }
    }
  }

  return res
}
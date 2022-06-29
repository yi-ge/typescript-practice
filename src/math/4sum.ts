// 关键在于如何去重

export function fourSum (nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b)

  let result = []

  for (let i = 0, len = nums.length - 3; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue // 去重

    for (let j = i + 1, len = nums.length - 2; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue // 去重

      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
          right--
        } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]])

          while (left < right && nums[right] === nums[right - 1]) { // 去重
            right--
          }

          while (left < right && nums[left] === nums[left + 1]) { // 去重
            left++
          }

          right--
          left++
        }
      }
    }
  }

  return result
}
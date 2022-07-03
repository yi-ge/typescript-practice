// 方法一：
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

// 方法二：
// 回溯法
// 记录重复元素，不成参与判断
export function fourSum2 (nums: number[], target: number): number[][] {
  const result: number[][] = []
  const path: number[] = []
  nums.sort((a, b) => a - b)
  const backtracking = (start: number) => {
    if (path.length === 4) {
      if (path[0] + path[1] + path[2] + path[3] === target) {
        result.push([...path])
      }
      return
    }
    let j = null // 去除当前层级重复元素
    for (let i = start; i < nums.length; i++) {
      if (j === nums[i]) continue
      j = nums[i]
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
    }
  }
  backtracking(0)
  return result
}

// 假设有一个升序数组,经过不确定长度的偏移，得到一个新的数组，我们称为循环升序数组。
// （例如：[0, 3, 4, 6, 7] 可能变成 [6, 7, 0, 3, 4]）
// 给定一个数字和一个循环升序数组，判断这个数字是否在这个数组内，在的话返回 true，否则返回 false。要求时间复杂度为O(logN)

// 示例1：
// 输入：nums = [6, 7, 0, 3, 4]， target = 0
// 输出：true

// 示例2：
// 输入：nums = [6, 7, 0, 3, 4]， target = 5
// 输出：false

export default (nums: number[], target: number): boolean => {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = parseInt((start + (end - start) / 2).toString())
    if (target === nums[mid]) {
      return true
    } else if (nums[start] < nums[mid] && nums[mid] < nums[end]) { // 普通二分
      if (target > mid) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    } else if (nums[start] > nums[mid] && nums[mid] < nums[end]) { // 转折点在左边
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    } else if (nums[start] < nums[mid] && nums[mid] > nums[end]) { // 转折点在右边
      if (target < nums[mid] && target >= nums[start]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else { // 没法判断
      // end = mid - 1
      // start = mid + 1
      for (let n = start; n <= end; n++) {
        if (nums[n] === target) {
          return true
        }
      }
      return false
    }
  }

  return false
}

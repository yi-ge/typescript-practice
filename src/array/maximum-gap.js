// LeetCode 164. 最大间距 https://leetcode-cn.com/problems/maximum-gap/
// LintCode 400. 最大间距 https://www.lintcode.com/problem/maximum-gap/

// export default (arr) => {
//   // 基于冒泡排序修改
//   let maxSpace = 0
//   const len = arr.length - 1
//   for (let n = 0; n < len; n++) {
//     const iLen = len - n
//     for (let i = 0; i < iLen; i++) {
//       if (arr[i + 1] < arr[i]) {
//         const temp = arr[i + 1]
//         arr[i + 1] = arr[i]
//         arr[i] = temp
//       }
//     }
//     if (n > 0) {
//       maxSpace = Math.max(arr[iLen + 1] - arr[iLen], maxSpace)
//     }
//   }

//   return len > 0 ? Math.max(maxSpace, arr[1] - arr[0]) : 0
// }

export default (nums) => {
  const min = (a, b) => {
    if (a === -1) {
      return b
    } else if (b === -1) {
      return a
    } else if (a < b) {
      return a
    } else {
      return b
    }
  }

  const max = (a, b) => {
    if (a === -1) {
      return b
    } else if (b === -1) {
      return a
    } else if (a > b) {
      return a
    } else {
      return b
    }
  }

  if (nums.length < 2) {
    return 0
  }

  let minNum = -1
  let maxNum = -1
  let n = nums.length
  for (let i = 0; i < n; ++i) {
    minNum = min(nums[i], minNum)
    maxNum = max(nums[i], maxNum)
  }

  if (maxNum === minNum) {
    return 0
  }

  let average = (maxNum - minNum) * 1.0 / (n - 1)
  if (average === 0) {
    ++average
  }

  let localMin = (s) => {
    let a = []
    while (s-- > 0) {
      a.push(0)
    }
    return a
  }

  let localMax = (s) => {
    let a = []
    while (s-- > 0) {
      a.push(0)
    }
    return a
  }

  for (let i = 0; i < n; ++i) {
    localMin[i] = -1
    localMax[i] = -1
  }

  for (let i = 0; i < n; ++i) {
    let t = (((nums[i] - minNum) / average) | 0)
    localMin[t] = min(localMin[t], nums[i])
    localMax[t] = max(localMax[t], nums[i])
  }

  let ans = (average | 0)
  let left = 0
  let right = 1

  while ((left < n - 1)) {
    while ((right < n && localMin[right] === -1)) {
      ++right
    }
    if (right >= n) {
      break
    }
    ans = max(ans, localMin[right] - localMax[left])
    left = right
    ++right
  }

  return ans
}

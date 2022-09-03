// LeetCode 41. 缺失的第一个正数 https://leetcode-cn.com/problems/first-missing-positive/
// LintCode 189. 丢失的第一个正整数 https://www.lintcode.com/problem/first-missing-positive/description

// 全部排序
// export default (arr) => {
//   arr = arr.filter(item => item > 0)

//   if (arr.length) {
//     arr.sort((a, b) => a - b)

//     if (arr[0] !== 1) {
//       return 1
//     } else {
//       for (let n = 0, len = arr.length - 1; n < len; n++) {
//         if (arr[n + 1] - arr[n] > 1) {
//           return arr[n] + 1
//         }
//       }
//       return arr.pop() + 1
//     }
//   }

//   return 1
// }

// 第二解，选择排序变种
export default (arr: number[]) => {
  arr = arr.filter(item => item > 0)

  if (arr.length) {
    const len = arr.length
    for (let n = 0, min; n < len; n++) {
      min = arr[n]
      for (let i = n + 1; i < len; i++) {
        if (arr[i] < min) {
          const tmp = min
          min = arr[i]
          arr[i] = tmp
        }
      }
      arr[n] = min

      if (n > 0) {
        if (arr[n] - arr[n - 1] > 1) {
          return arr[n - 1] + 1
        }
      } else {
        if (arr[0] !== 1) {
          return 1
        }
      }
    }

    return arr.pop() as number + 1
  }

  return 1
}

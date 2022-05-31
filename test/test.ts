// const nums = [2, 6, 1, 4, 8, 4, 7, 8, 97, 3, 2]

// // O(n^2)
// // 选择排序： 选择最小的元素和当前位置元素交换位置。
// // 插入排序： 对比已排序的元素插入到合适位置。
// // 冒泡排序： 把最大的元素排到最末尾。

// /**
//  * 冒泡排序
//  * @param nums 待排序数组
//  * @returns 已排序好的数组
//  */
// const bubbleSort = (nums: number[]): number[] => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let done = true
//     for (let j = 0; j < nums.length - 1 - i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//         done = false
//       }
//     }
//     if (done) break
//   }
//   return nums
// }

// console.log(bubbleSort(nums))

// const s = "loveleetcode"

// function firstUniqChar (s: string): number {
//   const obj = {}
//   for (let i = 0, len = s.length; i < len; i++) {
//     if (obj[s[i]]) {
//       obj[s[i]]++
//     } else {
//       obj[s[i]] = 1
//     }
//   }

//   for (let i = 0, len = s.length; i < len; i++) {
//     if (obj[s[i]] && obj[s[i]] === 1) return i
//   }

//   return -1
// };

// console.log(firstUniqChar(s))

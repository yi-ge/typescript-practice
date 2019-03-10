/**
 * 参考：https://leetcode-cn.com/problems/count-number-of-nice-subarrays/solution/count-number-of-nice-subarrays-by-ikaruga/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const numberOfSubarrays = function (nums, k) {
  const odd = []
  odd.push(-1)

  let ans = 0
  let i = 1
  for (let j = 0; j <= nums.length; j++) {
    if (j === nums.length || (nums[j] & 1)) {
      odd.push(j)
    }

    if (odd.length - i > k) {
      const left = odd[i] - odd[i - 1]
      const right = j - odd[odd.length - 2]
      ans += left * right
      i++
    }
  }
  return ans
}

/**
 * 错误解法
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// export const numberOfSubarrays = function (nums, k) {
//   let res = 0
//   for (let n = 0, len = nums.length; n < len; n++) {
//     let num = 0
//     let i = n
//     while (num < k && i < len) {
//       if (nums[i] % 2 !== 0) {
//         num++
//       }
//       i++
//     }

//     if (num === k) {
//       res++
//     }
//   }

//   return res
// }

// 中位数：将一个集合划分为两个长度相等的子集，其中一个子集中的元素总是大于另一个子集中的元素。
// 参考：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function (nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

  const m = nums1.length; const n = nums2.length
  let left = 0; let right = m
  let median1 = 0; let median2 = 0

  while (left <= right) {
    const i = (left + right) >> 1
    const j = ((m + n + 1) >> 1) - i

    const numsIm1 = (i === 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1]) // nums1[i-1]
    const numsI = (i === m ? Number.MAX_SAFE_INTEGER : nums1[i]) // nums1[i]
    const numsJm1 = (j === 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1]) // nums2[j-1]
    const numsJ = (j === n ? Number.MAX_SAFE_INTEGER : nums2[j]) // nums2[j]

    if (numsIm1 <= numsJ) {
      median1 = Math.max(numsIm1, numsJm1)
      median2 = Math.min(numsI, numsJ)
      left = i + 1
    } else {
      right = i - 1
    }
  }

  return (m + n) % 2 === 0 ? (median1 + median2) / 2.0 : median1
}

// 常规解法，不满足复杂度
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//   const newArr = nums1.concat(nums2).sort((a, b) => a - b)
//   const length = newArr.length

//   if (length % 2 === 0) {
//     const half = length / 2
//     return (newArr[half - 1] + newArr[half]) / 2
//   } else {
//     return newArr[(length - 1) / 2]
//   }
// };

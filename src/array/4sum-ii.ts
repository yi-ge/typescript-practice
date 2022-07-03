// 四数相加 II
// https://leetcode.cn/problems/4sum-ii/
// INLINE  ../../images/array/4sum-ii.jpeg

export function fourSumCount (nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map<number, number>()
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j]
      if (map.has(sum)) {
        map.set(sum, map.get(sum) as number + 1)
      } else {
        map.set(sum, 1)
      }
    }
  }

  let res = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = 0 - nums1[i] - nums2[j]
      if (map.has(sum)) res += map.get(sum) as number
    }
  }

  return res
}
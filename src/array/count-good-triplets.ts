// 统计好三元组
// https://leetcode.cn/problems/count-good-triplets/
// INLINE  ../../images/array/count-good-triplets.jpeg

export function countGoodTriplets (arr: number[], a: number, b: number, c: number): number {
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
          ans++
        }
      }
    }
  }
  return ans
}
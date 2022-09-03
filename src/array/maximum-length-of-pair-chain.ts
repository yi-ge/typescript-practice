// 最长数对链
// https://leetcode.cn/problems/maximum-length-of-pair-chain
// INLINE  ../../images/array/maximum-length-of-pair-chain.jpeg

export function findLongestChain (pairs: number[][]): number {
  let curr = -Infinity, ans = 0
  pairs.sort((a, b) => a[1] - b[1]) // ?
  for (let i = 0, len = pairs.length; i < len; i++) {
    if (curr < pairs[i][0]) {
      curr = pairs[i][1]
      ans++
    }
  }
  return ans
}
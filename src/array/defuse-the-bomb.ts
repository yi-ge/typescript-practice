// 拆炸弹
// https://leetcode.cn/problems/defuse-the-bomb
// INLINE  ../../images/array/defuse-the-bomb.jpeg
// 解题思路：拼接数组，模拟过程

export function decrypt (code: number[], k: number): number[] {
  if (k === 0) return new Array(code.length).fill(0)
  const codes = [...code, ...code, ...code]
  const res = []
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      let sum = 0
      for (let j = 0; j < k; j++) {
        sum += codes[i + j + 1]
      }
      res.push(sum)
    }
  } else {
    for (let i = code.length; i < code.length * 2; i++) {
      let sum = 0
      for (let j = 0; j < Math.abs(k); j++) {
        sum += codes[i - j - 1]
      }
      res.push(sum)
    }
  }
  return res
}
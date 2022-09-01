// 找到小镇的法官
// https://leetcode.cn/problems/find-the-town-judge
// INLINE  ../../images/graphs/find-the-town-judge.jpeg

export function findJudge (n: number, trust: number[][]): number {
  const inDegrees = new Array(n + 1).fill(0)
  const outDegrees = new Array(n + 1).fill(0)

  for (const edge of trust) {
    ++inDegrees[edge[1]]
    ++outDegrees[edge[0]]
  }

  for (let i = 1; i <= n; i++) {
    if (inDegrees[i] === n - 1 && outDegrees[i] === 0) {
      return i
    }
  }

  return -1
}
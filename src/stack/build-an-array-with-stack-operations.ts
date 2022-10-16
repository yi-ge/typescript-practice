// 用栈操作构建数组
// https://leetcode.cn/problems/build-an-array-with-stack-operations
// INLINE  ../../images/stack/build-an-array-with-stack-operations.jpeg

export function buildArray (target: number[], n: number): string[] {
  const set = new Set(target)
  const res = []
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      res.push("Push", "Pop")
    } else {
      res.push('Push')
      if (target[target.length - 1] === i) break
    }
  }
  return res
}
// 简化路径
// https://leetcode.cn/problems/simplify-path/
// INLINE  ../../images/stack/simplify-path.jpeg

export function simplifyPath (path: string): string {
  const dirs = path.split('/')
  const stack: string[] = [] // 数组模拟stack

  for (const dir of dirs) {
    if (dir === '..') {
      stack.length && stack.pop()
    } else if (dir !== '.') {
      dir && stack.push(dir)
    }
  }

  return '/' + stack.join('/')
}
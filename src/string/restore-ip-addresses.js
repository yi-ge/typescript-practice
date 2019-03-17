// LeetCode 93. 复原IP地址 https://leetcode-cn.com/problems/restore-ip-addresses/
// LintCode 426. 恢复IP地址 https://www.lintcode.com/problem/restore-ip-addresses/description

export default (str) => {
  const result = []

  if (str === '0000') return ['0.0.0.0']

  // 递归函数
  const recur = (cur, sub) => {
    if (cur.length === 4 && cur.join('') === str) {
      if (!cur.every(item => Number(item) === 0)) {
        result.push(cur.join('.'))
      }
    } else {
      for (let n = 0, len = Math.min(3, sub.length); n < len; n++) {
        const start = Number(sub.substr(0, n + 1))
        const end = sub.substr(n + 1)
        if (start < 256 && end.length <= (9 - cur.length * 3)) {
          recur([...cur, start], end)
        }
      }
    }
  }

  recur([], str)
  return result
}

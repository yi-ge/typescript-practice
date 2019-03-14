// LeetCode 89. 格雷编码 https://leetcode-cn.com/problems/gray-code/
// LintCode 411. 格雷编码 https://www.lintcode.com/problem/gray-code/description

export default (n) => {
  if (n === 0) return [0]
  const make = (n) => {
    if (n === 1) {
      return [0, 1]
    } else {
      const prev = make(n - 1)
      const result = []
      const max = Math.pow(2, n) - 1
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result
    }
  }

  return make(n).map(val => {
    console.log(val)
    return parseInt(val, 2)
  })
}

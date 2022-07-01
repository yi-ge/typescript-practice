// LeetCode 172. 阶乘后的零 https://leetcode-cn.com/problems/factorial-trailing-zeroes/submissions/
// LintCode 2. 尾部的零 https://www.lintcode.com/problem/trailing-zeros/description

export default (n: number) => {
  let sum = 0
  while (n !== 0) {
    sum += Math.floor(n /= 5)
  }
  return sum
}

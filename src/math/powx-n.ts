/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export const myPow = function (x:number, n:number) { // 参考：快速幂 + 迭代 https://leetcode-cn.com/problems/powx-n/solution/powx-n-by-leetcode-solution/
  let ans = 1.0 // 答案

  if (n < 0) { // 如果 n 为负
    n = -n // 将 n 变为正
    x = 1.0 / x // 2^-2 = 1/(2^2) = 1/4 = 0.25
  }

  while (n > 0) {
    if (n & 1) ans *= x // 如果n的二进制最后一位为1，则计入贡献
    x *= x // 将贡献不断平方
    n >>>= 1 // 无符号右移一位，相当于 n = n / 2 | 0 ，去掉二进制的最后一位，相当于下一次判断倒数第二位
  }

  return ans.toFixed(5)
}

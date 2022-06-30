/**
 * 参考：https://leetcode-cn.com/problems/coin-lcci/solution/jian-dan-de-shu-xue-jia-fa-by-zindler/
 * @param {number} n
 * @return {number}
 */
export const waysToChange = function (n: number): number {
  const mod = 1e9 + 7
  let res = 0
  for (let i = 0; i <= ~~(n / 25); i++) {
    const a = ~~((n - i * 25) / 10)
    const t = (a + 1) * (~~(n / 5) - 5 * i - a + 1)
    res = (res + t) % mod
  }
  return res
}

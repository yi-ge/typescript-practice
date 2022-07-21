/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
export const mincostTickets = function (days:number[], costs:number[]) {
  //   动态规划:
  //   dp[i]: 从第i天开始，到最后一天所用的票价总和

  //   思路：
  //   1. 记录数组中的最早的一天和最后的一天，动态规划从最后一天向前到最早一天即可，因为
  //      其他时间不需要消耗通行证
  //   2. 用一个变量 k 指针从 days 的最后一个索引向前走，i 指针也从最后一天向前走，但是遇到了
  //      不需要花费通行证的某些天走 else 分支即可，即后一天的总花费就是这一天的总花费
  //   3. 如果遇到需要通行证的时候，分别对比买一天、七天、三十天、所需的总花费，选择总花费最少的策略即可
  //   4. 初始化的时候 dp 数组多了 30，是为了简化有的用例第 365 天需要出行，选择买 30 天
  //      通行证的时候的特判

  // 作者：ignore_express
  // 链接：https://leetcode-cn.com/problems/minimum-cost-for-tickets/solution/js-dong-tai-gui-hua-si-lu-jiang-jie-by-ignore_expr/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  const dp = new Array(366 + 30).fill(0)
  const n = days.length
  const maxDay = days[n - 1]
  const minDay = days[0]
  let k = n - 1

  for (let i = maxDay; i >= minDay; i--) {
    if (i === days[k]) {
      dp[i] = Math.min(
        dp[i + 1] + costs[0],
        dp[i + 7] + costs[1],
        dp[i + 30] + costs[2]
      )
      k--
    } else {
      dp[i] = dp[i + 1]
    }
  }

  return dp[minDay]
}

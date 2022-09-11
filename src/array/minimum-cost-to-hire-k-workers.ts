import { MaxPriorityQueue } from './../lib/MaxPriorityQueue'
// 雇佣 K 名工人的最低成本
// https://leetcode.cn/problems/minimum-cost-to-hire-k-workers
// INLINE  ../../images/array/minimum-cost-to-hire-k-workers.jpeg
// 解题思路：去菜市场买菜，第一家青菜5元/500g，第二家青菜3元/kg。比较哪家便宜，我们自然会想到统一单位，每kg青菜多少钱。
//     同样的道理，我们计算出每单位工作质量的工资（记为w/q->wq），即可对比雇佣谁的性价比更高。
//     由于我们要雇佣 K 名工人，而不是 1 名工人。因此我们需要一个“最大堆”来维护k个数据中总计最小的成本。

export function mincostToHireWorkers (quality: number[], wage: number[], k: number): number {
  // 每个人每单位工作质量需要的工资，为了记录是谁的wq，这里用数组记录[i, wage[i]/quality[i]]。
  const wq = new Array(quality.length).fill(0).map((_, index) => [index, wage[index] / quality[index]]).sort((a, b) => a[1] - b[1])
  // 最大堆
  const queue = new MaxPriorityQueue()

  let kSum = 0 // 当前窗口值总计
  let ans = Number.MAX_VALUE
  for (let i = 0; i < wage.length; i++) {
    const currQuality = quality[wq[i][0]]
    const currWq = wq[i][1]
    queue.enqueue(currQuality)
    kSum += currQuality

    if (queue.getSize() > k) {
      kSum -= queue.dequeue()
    }

    if (queue.getSize() === k) {
      ans = Math.min(ans, kSum * currWq)
    }
  }

  return ans
}
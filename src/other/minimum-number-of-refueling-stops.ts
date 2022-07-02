// 最低加油次数
// https://leetcode.cn/problems/minimum-number-of-refueling-stops
// 解题思路：https://leetcode.cn/problems/minimum-number-of-refueling-stops/solution/javascript-tan-xin-by-younglina-coz4/

import { MaxPriorityQueue } from "../lib/MaxPriorityQueue"

export function minRefuelStops (target: number, startFuel: number, stations: number[][]): number {
  // 贪心算法
  // 所有油都带上，油用完时，取最大的油加上
  let maxPriorityQueue = new MaxPriorityQueue() // 最大优先队列
  let res = 0, total = 0, idx = 0, len = stations.length
  while (total < target) {
    if (startFuel === 0) {
      if (maxPriorityQueue.getSize()) {
        // 油用完，并且队列还有油，就取出最大的加一次油
        startFuel += maxPriorityQueue.dequeue() || 0
        res++
      } else return -1
    }
    // 每行驶1英里就会用掉1升汽油，当前油量即为能走的最远距离
    total += startFuel
    // 每次清空油量，即走到的最远距离
    startFuel = 0
    // 将小于当前走过距离的加油站的油加入队列
    while (idx < len && stations[idx][0] <= total) maxPriorityQueue.enqueue(stations[idx++][1])
  }
  return res
}
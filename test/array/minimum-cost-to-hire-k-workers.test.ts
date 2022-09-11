import { mincostToHireWorkers } from '../../src/array/minimum-cost-to-hire-k-workers'

test('雇佣 K 名工人的最低成本', () => {
  // 示例 1：
  // 输入： quality = [10,20,5], wage = [70,50,30], k = 2
  // 输出： 105.00000
  // 解释： 我们向 0 号工人支付 70，向 2 号工人支付 35。
  expect(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2).toFixed(5)).toBe('105.00000')

  // 示例 2：
  // 输入： quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
  // 输出： 30.66667
  // 解释： 我们向 0 号工人支付 4，向 2 号和 3 号分别支付 13.33333。
  expect(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3).toFixed(5)).toBe('30.66667')
})
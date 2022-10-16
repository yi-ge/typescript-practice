import { buildArray } from '../../src/stack/build-an-array-with-stack-operations'

test('用栈操作构建数组', () => {
  // 示例 1：
  // 输入：target = [1,3], n = 3
  // 输出：["Push","Push","Pop","Push"]
  // 解释：
  // 读取 1 并自动推入数组 -> [1]
  // 读取 2 并自动推入数组，然后删除它 -> [1]
  // 读取 3 并自动推入数组 -> [1,3]
  let target = [1, 3], n = 3
  expect(buildArray(target, n)).toEqual(["Push", "Push", "Pop", "Push"])

  // 示例 2：
  // 输入：target = [1,2,3], n = 3
  // 输出：["Push","Push","Push"]
  target = [1, 2, 3]; n = 3
  expect(buildArray(target, n)).toEqual(["Push", "Push", "Push"])

  // 示例 3：
  // 输入：target = [1,2], n = 4
  // 输出：["Push","Push"]
  // 解释：只需要读取前 2 个数字就可以停止。
  target = [1, 2]; n = 4
  expect(buildArray(target, n)).toEqual(["Push", "Push"])
})
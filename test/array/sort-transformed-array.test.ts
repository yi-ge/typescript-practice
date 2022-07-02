import { sortTransformedArray } from '../../src/array/sort-transformed-array'

test('有序转化数组', () => {
  // 示例 1：
  // 输入: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
  // 输出: [3,9,15,33]

  // 示例 2：
  // 输入: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
  // 输出: [-23,-5,1,7]

  expect(sortTransformedArray([-4, -2, 2, 4], 1, 3, 5)).toEqual([3, 9, 15, 33])
  expect(sortTransformedArray([-4, -2, 2, 4], -1, 3, 5)).toEqual([-23, -5, 1, 7])
})
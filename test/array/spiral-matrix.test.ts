import { spiralOrder } from '../../src/array/spiral-matrix'

test('螺旋矩阵', () => {
  // 示例 1：
  // 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
  // 输出：[1,2,3,6,9,8,7,4,5]
  expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])

  // 示例 2：
  // 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
  // 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
  expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])

  expect(spiralOrder([[]])).toEqual([])
  expect(spiralOrder([])).toEqual([])
})
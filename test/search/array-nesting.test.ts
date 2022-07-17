import { arrayNesting } from '../../src/search/array-nesting'

test('数组嵌套', () => {
  // 示例 1:
  // 输入: A = [5,4,0,3,1,6,2]
  // 输出: 4
  // 解释:
  // A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

  // 其中一种最长的 S[K]:
  // S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}

  expect(arrayNesting([5, 4, 0, 3, 1, 6, 2])).toBe(4)
})
import { findLongestChain } from '../../src/array/maximum-length-of-pair-chain'

test('最长数对链', () => {
  // 示例：
  // 输入：[[1,2], [2,3], [3,4]]
  // 输出：2
  // 解释：最长的数对链是 [1,2] -> [3,4]
  expect(findLongestChain([[1, 2], [2, 3], [3, 4]])).toBe(2)
})
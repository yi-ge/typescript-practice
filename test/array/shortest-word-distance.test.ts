import { shortestDistance } from '../../src/array/shortest-word-distance'

test('最短单词距离', () => {
  // 示例 1:
  // 输入: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
  // 输出: 3
  const wordsDict = ["practice", "makes", "perfect", "coding", "makes"]
  const word1 = "coding"
  const word2 = "practice"
  expect(shortestDistance(wordsDict, word1, word2)).toBe(3)

  // 示例 2:
  // 输入: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
  // 输出: 1
  const wordsDict2 = ["practice", "makes", "perfect", "coding", "makes"]
  const word21 = "makes"
  const word22 = "coding"
  expect(shortestDistance(wordsDict2, word21, word22)).toBe(1)
})
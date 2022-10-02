// 最短单词距离
// https://leetcode.cn/problems/shortest-word-distance/
// INLINE  ../../images/array/shortest-word-distance.jpeg

export function shortestDistance (wordsDict: string[], word1: string, word2: string): number {
  let result = wordsDict.length
  let lastTraverseIndex = -1
  let index = -1
  for (let i = 0; i < wordsDict.length; i++) {
    const word = wordsDict[i]
    if (word === word1) {
      lastTraverseIndex = i
    } else if (word === word2) {
      index = i
    }

    if (lastTraverseIndex >= 0 && index >= 0) {
      result = Math.min(result, Math.abs(index - lastTraverseIndex))
    }
  }

  return result
}
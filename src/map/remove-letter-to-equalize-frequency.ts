// 删除字符使频率相同
// https://leetcode.cn/problems/remove-letter-to-equalize-frequency
// INLINE  ../../images/map/remove-letter-to-equalize-frequency.jpeg

export function equalFrequency (word: string): boolean {
  const charCount = new Array(26).fill(0)
  for (const c of word) {
    charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  const freqCount = new Map()
  for (const c of charCount) {
    if (c > 0) {
      freqCount.set(c, (freqCount.get(c) || 0) + 1)
    }
  }
  for (const c of charCount) {
    if (c == 0) {
      continue
    }
    freqCount.set(c, freqCount.get(c) - 1)
    if (freqCount.get(c) == 0) {
      freqCount.delete(c)
    }
    if (c - 1 > 0) {
      freqCount.set(c - 1, (freqCount.get(c - 1) || 0) + 1)
    }
    if (freqCount.size == 1) {
      return true
    }
    if (c - 1 > 0) {
      freqCount.set(c - 1, freqCount.get(c - 1) - 1)
      if (freqCount.get(c - 1) == 0) {
        freqCount.delete(c - 1)
      }
    }
    /* istanbul ignore next */
    freqCount.set(c, (freqCount.get(c) || 0) + 1)
  }
  return false
}

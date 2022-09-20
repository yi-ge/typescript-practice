// 至多包含 K 个不同字符的最长子串
// https://leetcode.cn/problems/longest-substring-with-at-most-k-distinct-characters/
// INLINE  ../../images/map/longest-substring-with-at-most-k-distinct-characters.jpeg
// 解题思路：滑动窗口

export function lengthOfLongestSubstringKDistinct (s: string, k: number): number {
  let left = 0, right = 0 // 左右边界
  const map = new Map<string, number>() // 记录在k范围内每个字符出现的次数
  let ans = 0
  while (right < s.length) {
    if (map.size <= k) {
      if (map.has(s[right])) {
        map.set(s[right], map.get(s[right]) as number + 1)
      } else {
        map.set(s[right], 1)
      }
      ans = Math.max(ans, right - left)
      right++
    } else { // map.size > k
      const count = map.get(s[left]) as number - 1
      if (count > 0) {
        map.set(s[left], count)
      } else {
        map.delete(s[left])
      }
      left++
    }
  }

  return ans
}
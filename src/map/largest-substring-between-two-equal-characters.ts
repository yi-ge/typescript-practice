// 两个相同字符之间的最长子字符串
// https://leetcode.cn/problems/largest-substring-between-two-equal-characters
// INLINE  ../../images/map/largest-substring-between-two-equal-characters.jpeg

export function maxLengthBetweenEqualCharacters (s: string): number {
  let res = -1
  const map = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      res = Math.max(res, i - (map.get(s.charAt(i)) as number) - 1)
    } else {
      map.set(s.charAt(i), i)
    }
  }
  return res
}
// 仅执行一次字符串交换能否使两个字符串相等
// https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal
// INLINE  ../../images/map/check-if-one-string-swap-can-make-strings-equal.jpeg

export function areAlmostEqual (s1: string, s2: string): boolean {
  if (s1 === s2) return true
  const diffIndex = []
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (diffIndex.length == 2) {
        return false
      }
      diffIndex.push(i)
    }
  }

  if (diffIndex.length !== 2) return false
  return s1[diffIndex[0]] === s2[diffIndex[1]] && s2[diffIndex[0]] === s1[diffIndex[1]]
}
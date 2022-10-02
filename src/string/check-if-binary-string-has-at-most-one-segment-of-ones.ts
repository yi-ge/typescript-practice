// 检查二进制字符串字段
// https://leetcode.cn/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
// INLINE  ../../images/string/check-if-binary-string-has-at-most-one-segment-of-ones.jpeg

export function checkOnesSegment (s: string): boolean {
  return !s.includes('01')
}
// 生成每种字符都是奇数个的字符串
// https://leetcode.cn/problems/generate-a-string-with-characters-that-have-odd-counts
// INLINE  ../../images/string/generate-a-string-with-characters-that-have-odd-counts.jpeg

export function generateTheString (n: number): string {
  return n % 2 === 0 ? 'a'.repeat(n - 1) + 'b' : 'a'.repeat(n)
}
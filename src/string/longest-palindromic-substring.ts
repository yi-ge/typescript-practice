export const longestPalindrome = function (s: string) {
  if (!s || !s.trim()) return ''
  if (s.length === 1) return s
  if (s.length === 2) return s[0] === s[1] ? s[0] + s[1] : s[1]
  let result = ''
  /**
  *扩散坐标
  */
  const calPalindromeIndex = function (left: number, right: number, s: string) {
    const len = s.length
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--
      right++
    }
    return { left: left + 1, right: right }
  }
  for (let i = 0, len = s.length; i < len; i++) {
    let even = ''
    let odd = ''
    if (s[i] === s[i + 1]) {
      // 经过当前位与下一位判断已构成回文，扩散位直接从下一位开始，可以提速
      const evenIndex = calPalindromeIndex(i - 1, i + 2, s)
      even = s.slice(evenIndex.left, evenIndex.right)
    }
    const oddIndex = calPalindromeIndex(i - 1, i + 1, s)
    odd = s.slice(oddIndex.left, oddIndex.right)
    const re = odd.length > even.length ? odd : even
    result = result.length > re.length ? result : re
  }
  return result
}

// 作者：liu-zi-qian-2
// 链接：https://leetcode-cn.com/problems/longest-palindromic-substring/solution/5-zui-chang-hui-wen-zi-chuan-by-liu-zi-qian-2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

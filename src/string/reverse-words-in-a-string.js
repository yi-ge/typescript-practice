// LeetCode 557. 反转字符串中的单词 III https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
// LintCode 1173. 反转字符串 III https://www.lintcode.com/problem/reverse-words-in-a-string-iii/description

export default (s) => {
  return s.split(' ').map(item => {
    let tmp = ''
    for (let n = item.length; n >= 0; n--) {
      tmp += item.charAt(n)
    }
    return tmp
  }).join(' ')
}

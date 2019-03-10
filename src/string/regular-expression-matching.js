// LeetCode 10. 正则表达式匹配 https://leetcode-cn.com/problems/regular-expression-matching/
// LintCode 154. 正则表达式匹配 https://www.lintcode.com/problem/regular-expression-matching/description

// 'mississippi', 'mis*is*ip*.' 测试不通过
// export default (str, mode) => {
//   const strLen = str.length
//   const modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g) // 筛选无模式和有模式

//   if (!modeArr) return false

//   let cur = 0
//   for (let n = 0, len = modeArr.length; n < len; n++) {
//     // 匹配模式结果分类
//     // 分三类：.*|a*|bcde
//     const s = modeArr[n].split('')
//     if (s[1] === '*') { // 如果第二位是'*'，则为有模式
//       if (s[0] === '.') { // 第一种模式
//         return true
//       } else { // 第二种模式，直接移到相等的最后面
//         while (str[cur] === s[0]) {
//           cur++
//         }
//       }
//     } else { // 无模式
//       for (let i = 0, sLen = s.length; i < sLen; i++) {
//         if (s[i] !== str[cur++]) { // 注意，cur++每一次都会被执行
//           return false
//         }
//       }
//     }
//   }

//   return cur === strLen
// }

export default (str, mode) => {
  const isMatch = (s, p) => {
    // 边界情况，如果s和p都为空，说明处理结束了，返回true，否则返回false
    if (p.length <= 0) {
      return !s.length
    }
    // 判断p模式字符串的第一个字符和s字符串的第一个字符是不是匹配
    let match = false
    if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
      match = true
    }
    // p有模式的
    if (p.length > 1 && p[1] === '*') {
      // 第一种情况：s*匹配0个字符
      // 第二种情况：s*匹配1个字符，递归下去，用来表示s*匹配多个s
      return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
    } else {
      return match && isMatch(s.slice(1), p.slice(1))
    }
  }

  return isMatch(str, mode)
}

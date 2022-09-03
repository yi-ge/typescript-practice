// LeetCode 459. 重复的子字符串 https://leetcode-cn.com/problems/repeated-substring-pattern/
// LintCode 1227. 重复的子串模式 https://www.lintcode.com/problem/repeated-substring-pattern/description

export default (str: string): boolean => {
  return /^(\w+)\1+$/.test(str)
}

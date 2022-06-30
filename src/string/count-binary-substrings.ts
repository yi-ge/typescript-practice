// LeetCode 696. 计数二进制子串 https://leetcode-cn.com/problems/count-binary-substrings/
// LintCode 1079. 连续子串计数 https://www.lintcode.com/problem/count-binary-substrings/description

// 效率低
// export default (s) => {
//   let count = 0
//   for (let n = 0, len = s.length; n < len; n++) {
//     let last = s.charAt(n)
//     let time = 0
//     let lastTime = 0
//     for (let i = n + 1; i < len; i++) {
//       if (s.charAt(i) !== last && time === lastTime) {
//         count++
//         break
//       } else if (s.charAt(i) !== last) {
//         time++
//       } else if (time === 0) {
//         lastTime++
//       } else {
//         break
//       }
//     }
//   }
//   return count
// }

// 报RegExp too big
// export default (s) => {
//   // 建立数据结构，堆栈，保存数据
//   let r = []
//   // 给定任意子输入都返回第一个符合条件的子串
//   let match = (s) => {
//     let j = s.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length)
//     let reg = new RegExp(`^(${j}${o})`)
//     if (reg.test(s)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }
//   // 通过for循环控制程序运行的流程
//   for (let i = 0, len = s.length - 1; i < len; i++) {
//     let sub = match(s.slice(i))
//     if (sub) r.push(sub)
//   }
//   return r.length
// }

export default (s: any) => {
  // 来自 Somnus
  // pre 前一个数字连续出现的次数，cur 当前数字连续出现的次数，result 结果子串个数
  let pre = 0; let cur = 1; let result = 0
  for (let i = 0, len = s.length - 1; i < len; i++) {
    // 判断当前数字是否与后一个数字相同
    if (s[i] === s[i + 1]) { // 相同，则当前数字出现的次数cur加1
      cur++
    } else { // 不同，则当前数字事实上变成了前一个数字，当前数字的次数重置为1
      pre = cur
      cur = 1
    }
    if (pre >= cur) { // 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
      result++
    }
  }
  return result
}

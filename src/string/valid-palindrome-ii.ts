export const validPalindrome = function (s: string, flag = true): boolean {
  let l = 0; let r = s.length - 1
  while (l < r && s[l] === s[r]) {
    l++; r--
  }
  if (l >= r) return true // 说明是回文
  if (flag) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false) // 如果不是回文，切左边或者右边，再判断一次
  return false
}

// 暴力解法，会超时
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// export const validPalindrome = function (s) {
//   const len = s.length
//   const tmpLen = len - 1
//   let mid = len >> 1
//   if (s.substring(0, mid) === s.substring(len % 2 ? mid + 1 : mid, len).split('').reverse().join('')) {
//     return true
//   }

//   mid = tmpLen >> 1
//   for (let n = 0; n < len; n++) {
//     const tmp = s.substring(0, n) + s.substring(n + 1, len)
//     if (tmp.substring(0, mid) === tmp.substring(tmpLen % 2 ? mid + 1 : mid, tmpLen).split('').reverse().join('')) {
//       return true
//     }
//   }

//   return false
// }

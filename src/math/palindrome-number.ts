/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = function (x: number) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false // 如果末尾数为0且不是0

  let reverse = 0

  while (reverse < x) {
    reverse = reverse * 10 + x % 10
    x = x / 10 | 0
  }

  return reverse === x || (reverse / 10 | 0) === x
}

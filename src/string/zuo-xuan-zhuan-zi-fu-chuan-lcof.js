/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
export const reverseLeftWords = function (s, n) {
  return (s + s).substr(n, s.length)
}

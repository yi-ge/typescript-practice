/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
export const reverseLeftWords = function (s: string, n: number) {
  return (s + s).substr(n, s.length)
}

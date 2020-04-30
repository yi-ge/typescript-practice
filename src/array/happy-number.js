/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = function (n) {
  const set = new Set()

  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = n.toString().split('').reduce((a, b) => a + b * b, 0)
  }

  return n === 1
}

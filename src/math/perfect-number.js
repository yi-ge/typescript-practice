const pn = (p) => { // 欧几里得-欧拉定理
  return (1 << (p - 1)) * ((1 << p) - 1)
}

/**
 * @param {number} num
 * @return {boolean}
 */
export const checkPerfectNumber = function (num) {
  const primes = [2, 3, 5, 7, 13, 17, 19, 31]
  for (const prime of primes) {
    if (pn(prime) === num) return true
  }

  return false
}

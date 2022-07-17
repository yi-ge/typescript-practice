/**
 * 计算指定正整数n的质因数
 */
export const getPrimes = (n: number): number[] => {
  const prime = (n: number): number[] => {
    // 存储所有的质因数
    const arr = []
    for (let i = 2; i < n / 2 + 1; i++) {
      if (n % i === 0 && !prime(i).length) { // 计算是因数且是质数
        arr.push(i)
      }
    }

    return arr
  }

  return prime(n)
}

// 可用优先队列和动态规划解题
export const nthSuperUglyNumber = function (n: number, primes: number[]): number {
  const dp = new Array(n + 1).fill(0)
  const m = primes.length
  const pointers = new Array(m).fill(0)
  const nums = new Array(m).fill(1)
  for (let i = 1; i <= n; i++) {
    let minNum = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < m; j++) {
      minNum = Math.min(minNum, nums[j])
    }
    dp[i] = minNum
    for (let j = 0; j < m; j++) {
      if (nums[j] == minNum) {
        pointers[j]++
        nums[j] = dp[pointers[j]] * primes[j]
      }
    }
  }
  return dp[n]
  // const primesSet = new Set(primes)
  // const res = [1]
  // let i = 2
  // while (res.length < n) {
  //   const arr = getPrimes(i)
  //   let k = 0
  //   const l = arr.length
  //   for (; k < l; k++) {
  //     if (!primesSet.has(arr[k])) {
  //       break
  //     }
  //   }
  //   if (k === l) { // 有两种情况：1、没有质因数；2、所有质因数都在指定列表中
  //     if (l === 0) { // 没有质因数
  //       if (primesSet.has(i)) {
  //         res.push(i)
  //       }
  //     } else {
  //       res.push(i)
  //     }
  //   }
  //   i++
  // }

  // return res[n - 1]
}

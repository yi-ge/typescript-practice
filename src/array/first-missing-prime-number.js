// LintCode 681. 缺失的第一个素数 https://www.lintcode.com/problem/first-missing-prime-number/description

export const isPrinme = (n) => {
  if (n === 0 || n === 1) {
    return false
  }
  if (n === 2) {
    return true
  }

  for (var i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

export default (arr) => {
  const nextPrimeNumber = (num, max) => {
    if (isPrinme(num)) {
      return num
    }
    do {
      if (!max || num + 1 < max) {
        num++
      } else {
        return false
      }
    } while (!isPrinme(num))
    return num
  }

  arr = arr.filter(item => item > 0)

  if (arr.length) {
    const len = arr.length
    for (let n = 0, min; n < len; n++) {
      min = arr[n]
      for (let i = n + 1; i < len; i++) {
        if (arr[i] < min) {
          const tmp = min
          min = arr[i]
          arr[i] = tmp
        }
      }
      arr[n] = min

      if (n > 0) {
        if (arr[n] - arr[n - 1] > 1) {
          let res = nextPrimeNumber(arr[n - 1] + 1, arr[n])
          while (res === false) {
            res = nextPrimeNumber(arr[n] + 1, arr[n + 1])
            n++
          }
          return res
        }
      } else {
        if (arr[0] !== 2) {
          return 2
        }
      }
    }

    return nextPrimeNumber(arr.pop() + 1)
  }

  return 2
}

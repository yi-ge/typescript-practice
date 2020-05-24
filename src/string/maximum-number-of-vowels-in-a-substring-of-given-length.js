const v = ['a', 'e', 'i', 'o', 'u']
const check = (str) => {
  const map = new Map()

  for (let i = 0; i < str.length; i++) {
    if (v.includes(str[i])) {
      map.set(str[i], (map.get(str[i]) || 0) + 1)
    }
  }

  let res = 0
  map.forEach(n => {
    res += n
  })
  return res
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export const maxVowels = function (s, k) {
  let i = 0
  let res = 0

  const temp = s.slice(i, i + k)
  let tmp = check(temp)
  res = Math.max(res, tmp)

  while (i + k <= s.length) {
    i++
    if (v.includes(s[i + k - 1])) {
      tmp++
    }

    if (v.includes(s[i - 1])) {
      tmp--
    }

    res = Math.max(res, tmp)
  }

  return res
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = function (s: string, t: string) {
  const sLen = s.length; const tLen = t.length
  const tMap = new Map(); const map = new Map()
  let l = 0; let r = 0; let res = ''

  for (let i = 0; i < tLen; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
  }

  const check = (cMap: any) => {
    const check = new Map(
      [...cMap].filter(([k, v]) => tMap.has(k) && v >= tMap.get(k))
    )

    return check.size === tMap.size
  }

  while (r <= sLen) {
    if (t.includes(s[r])) {
      map.set(s[r], (map.get(s[r]) || 0) + 1)
    }

    while (check(map) && l <= r) {
      const tmp = s.slice(l, r + 1)
      if (res.length === 0 || tmp.length <= res.length) res = tmp
      if (t.includes(s[l]) && map.has(s[l])) {
        map.set(s[l], map.get(s[l]) - 1)
      }
      l++
    }
    r++
  }

  return res
}

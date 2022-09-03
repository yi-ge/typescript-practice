const comp = (left: string, right: string, res?: string) => {
  if (left.length > right.length) {
    [left, right] = [right, left]
  }

  res = res || left
  while (right.indexOf(res) !== 0 && res.length > 0) {
    res = res.slice(0, res.length - 1)
  }

  return res
}

export const longestCommonPrefix = function (strs: string[]): string {
  if (strs.length < 2) return strs[0] || ''

  let res = strs[0]
  for (let i = 1; i < strs.length; i++) {
    res = comp(res, strs[i])
  }

  return res
}

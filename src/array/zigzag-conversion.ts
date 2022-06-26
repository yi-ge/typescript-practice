export function convert (s: string, numRows: number): string {
  if (numRows === 1) return s
  const res = new Array(numRows).fill('')

  for (let i = 0, len = s.length, isDown = true, row = 0; i < len; i++) {
    res[isDown ? row++ : row--] += s[i]

    if (row === numRows - 1) {
      isDown = false
    } else if (row === 0) {
      isDown = true
    }
  }

  return res.join('')
}
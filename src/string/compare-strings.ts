/**
 * @param A: A string
 * @param B: A string
 * @return: if string A contains all of the characters in B return true else return false
 */
export const compareStrings = function (A: string, B: string) {
  const a = A.split('')
  const b = B.split('')

  for (const n in b) {
    const tmp = a.indexOf(b[n])
    if (tmp === -1) {
      return false
    } else {
      a.splice(tmp, 1)
    }
  }

  return true
}

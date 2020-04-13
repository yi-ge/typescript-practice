/**
 * @param {string[]} A
 * @return {string[]}
 */
export const commonChars = function (A) {
  const res = []
  let chars = new Set(A[0].split('')) // 不重复的chat集合
  for (let n = 1; n < A.length; n++) {
    const b = new Set(A[n].split(''))
    chars = new Set([...b].filter(x => chars.has(x)))
  }

  const maps = []

  for (let n = 0; n < A.length; n++) {
    const tmp = new Map()
    for (let i = 0; i < A[n].length; i++) {
      if (chars.has(A[n][i])) {
        if (tmp.has(A[n][i])) {
          tmp.set(A[n][i], tmp.get(A[n][i]) + 1)
        } else {
          tmp.set(A[n][i], 1)
        }
      }
    }
    maps.push(tmp)
  }

  chars = [...chars]

  for (const n in chars) {
    let min = -1
    for (const i in maps) {
      if (maps[i].get(chars[n]) < min || min === -1) {
        min = maps[i].get(chars[n])
      }
    }
    for (let x = 0; x < min; x++) {
      res.push(chars[n])
    }
  }

  return res
}

// 输入:
// A: [1, 2, 3, 2, 1]
// B: [3, 2, 1, 4, 7]

const maxLength = function (A, B, addA, addB, len) {
  addA = (addA > 0) ? addA : 0
  addB = (addB > 0) ? addB : 0
  let result = 0
  let k = 0
  for (let i = 0; i < len && (k + len - i > result); i++) {
    if (A[i + addA] === B[i + addB]) {
      k++
    } else {
      k = 0
    }
    result = Math.max(result, k)
  }
  return result
}

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
export const findLength = function (A, B) {
  const ALen = A.length
  const BLen = B.length
  let result = 0
  for (let i = 1; i < ALen + BLen; i++) {
    if (result >= (ALen + BLen - i)) {
      return result
    }
    const len = Math.min(i, ALen, BLen, (ALen + BLen - i))
    result = Math.max(maxLength(A, B, ALen - i, i - ALen, len), result)
  }
  return result
}

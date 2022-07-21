/**
 * @param matrix: an input matrix
 * @return: nums[0]: the maximum,nums[1]: the minimum
 */
export const maxAndMin = function (matrix:number[][]) {
  if (matrix[0] === undefined || matrix[0][0] === undefined) return []
  let max = matrix[0][0]
  let min = matrix[0][0]

  for (let n = 0, len = matrix.length; n < len; n++) {
    for (let i = 0; i < matrix[0].length; i++) {
      max = Math.max(max, matrix[n][i])
      min = Math.min(min, matrix[n][i])
    }
  }

  return [max, min]
}

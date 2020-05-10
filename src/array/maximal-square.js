/**
 * @param {character[][]} matrix
 * @return {number}
 */
export const maximalSquare = function (matrix) {
  if (!matrix || !matrix[0]) return 0

  const rows = matrix.length
  const cols = matrix[0].length
  let max = 0

  const dp = new Array(rows).fill().map(_ => new Array(cols).fill(0))

  for (let n = 0; n < rows; n++) {
    for (let i = 0; i < cols; i++) {
      if (Number(matrix[n][i]) === 1) {
        if (n === 0 || i === 0) dp[n][i] = 1
        else dp[n][i] = Math.min(dp[n - 1][i], dp[n][i - 1], dp[n - 1][i - 1]) + 1 // 找规律
        max = Math.max(max, dp[n][i])
      }
    }
  }

  return max * max
}

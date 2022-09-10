// 螺旋矩阵
// https://leetcode.cn/problems/spiral-matrix/
// INLINE  ../../images/array/spiral-matrix.jpeg

export function spiralOrder (matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return []
  const row = matrix.length
  const col = matrix[0].length
  const result: number[] = []

  let left = 0
  let right = col - 1
  let top = 0
  let bottom = row - 1

  while (left <= right || top <= bottom) {
    for (let i = left; i <= right; ++i) {
      result.push(matrix[top][i])
    }

    for (let i = top + 1; i <= bottom; ++i) {
      result.push(matrix[i][right])
    }

    if (left < right) {
      for (let i = right - 1; i > left; --i) {
        result.push(matrix[bottom][i])
      }
    }

    if (top < bottom) {
      for (let i = bottom; i > top; --i) {
        result.push(matrix[i][left])
      }
    }

    left++
    right--
    top++
    bottom--
  }

  return result
}
// 二进制矩阵中的特殊位置
// https://leetcode.cn/problems/special-positions-in-a-binary-matrix
// INLINE  ../../images/array/special-positions-in-a-binary-matrix.jpeg
// 解题思路：参见官方题解2及注释

export function numSpecial (mat: number[][]): number {
  const m = mat.length
  const n = mat[0].length

  for (let i = 0; i < m; i++) {
    let rowCount = 0
    for (let j = 0; j < n; j++) { // 遍历行，统计该行出现1的次数
      if (mat[i][j] === 1) {
        rowCount++
      }
    }

    if (i === 0) { // * 这里是最难理解的。本来是要用第0行作为每一列有多少个1的计数，因此计数前本应该对该行先清0，再记录该行对应列出现了几次1，由于只对有1的列做计数，直接减去1避开了清0操作
      rowCount-- // 即 rowCount = rowCount - 1
    }

    if (rowCount > 0) { // 如果该行出现1的次数 > 0
      for (let j = 0; j < n; j++) { // 遍历行，得到1所在的列，对出现大于1的列做累计计数
        if (mat[i][j] === 1) {
          mat[0][j] += rowCount
        }
      }
    }
  }

  return mat[0].reduce((prev, curr) => curr === 1 ? prev + 1 : prev, 0)
}
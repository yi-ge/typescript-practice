/**
 * @param {character[][]} grid
 * @return {number}
 */
export const numIslands = function (grid: any[][]): number {
  if (!grid[0]) return 0
  const maxN = grid.length - 1
  const maxI = grid[0].length - 1

  const overTurn = (n: number, i: number) => { // 沉没上下左右的岛屿
    if (Number(grid[n][i]) === 1) {
      grid[n][i] = 0
      if (i - 1 >= 0) overTurn(n, i - 1) // 上
      if (i + 1 <= grid[0].length - 1) overTurn(n, i + 1) // 下
      if (n - 1 >= 0) overTurn(n - 1, i) // 左
      if (n + 1 <= grid.length - 1) overTurn(n + 1, i) // 右
    }
  }

  let res = 0
  // 1. 遍历所有的点
  for (let n = 0; n <= maxN; n++) {
    for (let i = 0; i <= maxI; i++) {
      if (Number(grid[n][i]) === 1) { // 2. 如果是岛屿，就将其上下左右都为1的岛屿沉没
        res++
        overTurn(n, i)
      }
    }
  }

  return res
}

// 卡塔兰数
export const numTrees = function (n: number): number {
  let C = 1
  for (let i = 0; i < n; ++i) {
    C = C * 2 * (2 * i + 1) / (i + 2)
  }
  return C
}

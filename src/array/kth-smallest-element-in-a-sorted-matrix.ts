/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
export const kthSmallest = function (matrix:number[][], k:number):number {
  return matrix.flat().sort((a, b) => a - b)[k - 1]
}

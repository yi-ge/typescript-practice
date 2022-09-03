// 最小绝对差
// https://leetcode.cn/problems/minimum-absolute-difference
// INLINE  ../../images/array/minimum-absolute-difference.jpeg

export function minimumAbsDifference (arr: number[]): number[][] {
  arr.sort((a, b) => a - b)
  let minAbsDifference = Number.MAX_VALUE
  let minAbsDifferenceArr: number[][] = []
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    let j = i + 1
    const tmp = Math.abs(arr[i]/*?*/ - arr[j]/*?*/)
    if (tmp < minAbsDifference) {
      minAbsDifference = tmp // ?
      // minAbsDifferenceArr = arr[i] > arr[j] ? [[arr[j], arr[i]]] : [[arr[i], arr[j]]] // ?
      minAbsDifferenceArr = [[arr[i], arr[j]]] // ?
    } else if (tmp === minAbsDifference) {
      minAbsDifferenceArr.push([arr[i], arr[j]])
    }
  }
  return minAbsDifferenceArr // ?
}
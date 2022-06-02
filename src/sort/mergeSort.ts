/**
 * 合并两个已经排好序的数组 为一个新的排好序的数组
 * @param a 数组A
 * @param b 数组B
 * @returns 合并后的数组
 */
const merge = (a: any[], b: any[]) => {
  const arr = []
  while (a.length && b.length) {
    if (a[0] < b[0]) {
      arr.push(a.shift())
    } else {
      arr.push(b.shift())
    }
  }
  return [...arr, ...a, ...b]
}

/**
 * 归并排序
 * @param arr 待排序数组
 * @returns 排好序的数组
 */
export const mergeSort = (arr: any[]): any[] => {
  // 终止条件： 当数组只有一个元素或者是空数组的时候，终止递归
  if (arr.length <= 1) return arr
  const halfIndex = Math.floor(arr.length / 2) // arr.length >> 1

  const left = arr.splice(0, halfIndex)
  // const right = arr

  return merge(mergeSort(left), mergeSort(arr))
}

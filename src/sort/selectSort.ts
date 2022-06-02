/**
 * 选择排序
 * @param arr 待排序数组
 * @returns 已排序数组
 */
const selectSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i // 从i起，找到剩余元素中最小值的位置
    for (let j = i + 1; j < arr.length; j++) { // 找出最小的元素
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 最小的元素和i交换位置
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

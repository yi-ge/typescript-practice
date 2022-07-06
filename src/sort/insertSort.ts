import { putItem, removeItem } from "../lib/splice"

export const insertSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
    }
  }
  return arr
}

export const insertSort2 = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) { // 6 > 1
      for (let j = i; j > 0; j--) {
        if (arr[j - 1] < arr[i]) {
          const tmp = arr[i]
          arr = removeItem(arr, i) // 删除i位置的元素
          arr = putItem(arr, j, tmp) // 在j位置插入该元素
          break
        }
      }
      if (arr[i] < arr[0]) {
        const tmp = arr[i]
        removeItem(arr, i)
        arr.unshift(tmp)
      }
    }
  }
  return arr
}



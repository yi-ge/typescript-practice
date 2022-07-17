// 冒泡排序
// 平均时间复杂度 O(n * n)， 最好情况 O(n)，最坏情况 O（n * n）
// 空间复杂度 O(1)
// 稳定

export default (arr: number[]): number[] => {
  for (let n = 0, len = arr.length - 1, down = true; n < len; n++) {
    for (let i = 0, iLen = len - n; i < iLen; i++) {
      if (arr[i + 1] < arr[i]) {
        const tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp
        down = false
      }
    }
    if (down) break
  }
  return arr
}

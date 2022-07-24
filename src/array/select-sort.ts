// 选择排序
// 平均时间复杂度 O(n * n)， 最好情况 O(n * n)，最坏情况 O（n * n）
// 空间复杂度 O(1)
// 稳定

export default (arr:number[]) => {
  for (let n = 0, len = arr.length; n < len; n++) {
    let min = arr[n]
    for (let i = n + 1; i < len; i++) {
      if (arr[i] < min) {
        const tmp = min
        min = arr[i]
        arr[i] = tmp
      }
    }
    arr[n] = min
  }

  return arr
}

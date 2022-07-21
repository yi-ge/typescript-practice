
export default (arr:number[], k:number) => {
  // 这个方法未必是效率最差的
  return arr.sort((a, b) => b - a)[k - 1]

  // 冒泡排序变种，只排序指定长度的内容。未必是最佳方案
  // const len = arr.length - 1
  // for (let n = 0, down = true; n < k; n++) {
  //   for (let i = 0, iLen = len - n; i < iLen; i++) {
  //     if (arr[i + 1] < arr[i]) {
  //       const tmp = arr[i]
  //       arr[i] = arr[i + 1]
  //       arr[i + 1] = tmp
  //       down = false
  //     }
  //   }
  //   if (down) break
  // }
  // return arr[len - k + 1]
}

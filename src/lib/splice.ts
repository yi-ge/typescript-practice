/**
 * 移除指定位置的元素
 * @param arr 数组
 * @param index 数组下标
 * @returns 删除了元素后的数组
 */
export const removeItem = (arr: any[], index: number) => {
  arr.splice(index, 1)
  return arr
}

/**
 * 在指定位置添加元素
 * @param arr 数组
 * @param index 数组下标
 * @param item 需要增加的元素
 * @return 添加了元素后的组数
 */
export const putItem = (arr: any[], index: number, item: any) => {
  arr.splice(index, 0, item)
  return arr
}
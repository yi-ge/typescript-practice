let count = 0

export const resetCount = () => {
  count = 0
}

/**
 * 归并排序 - 合并左右
 */
export const merge = (left: number[], right: number[]) => {
  const res = []
  const leftLength = left.length
  const rightLength = right.length
  for (
    let index = 0, l = 0, r = 0;
    index < leftLength + rightLength;
    index++
  ) {
    if (l >= leftLength) res[index] = right[r++]
    else if (r >= rightLength) res[index] = left[l++]
    else if (left[l] <= right[r]) res[index] = left[l++]
    else {
      res[index] = right[r++]
      count += leftLength - l // 唯一与归并排序有差异的地方
    }
  }
  return res
}

/**
 * 归并排序
 */
export const mergeSort = (nums: number[]): number[] => {
  if (nums.length < 2) return nums
  const mid = ~~(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

/**
 * 逆序对
 */
export const reversePairs = function (nums: number[]): number {
  resetCount()
  mergeSort(nums)
  return count
}

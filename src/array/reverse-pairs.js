let count = 0

export const resetCount = () => {
  count = 0
}

/**
 * 归并排序 - 合并左右
 * @param {number[]} left
 * @param {number[]} right
 */
export const merge = (left, right) => {
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
 * @param {number[]} nums
 */
export const mergeSort = (nums) => {
  if (nums.length < 2) return nums
  const mid = ~~(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

/**
 * 逆序对
 * @param {number[]} nums
 * @return {number}
 */
export const reversePairs = function (nums) {
  resetCount()
  mergeSort(nums)
  return count
}

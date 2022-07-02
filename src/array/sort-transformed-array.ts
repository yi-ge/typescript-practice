// 有序转化数组
// https://leetcode.cn/problems/sort-transformed-array/
// 解题思路：借助一元二次方程性质，双指针从两头开始计算，每次保存两端值较小的一个到结果，不必事先计算中线。
// a > 0 向上抛物线，两边大中间小。从后向前存储（升序，大的值在数组末尾，所以逆序保存）。
// a < 0 向下抛物线，两边小中间大。从前往后存储。
// a = 0 取决于b单调递增/递减。

export function sortTransformedArray (nums: number[], a: number, b: number, c: number): number[] {
  const fx = (x: number) => a * x * x + b * x + c
  let left = 0
  let right = nums.length - 1
  let index = a > 0 ? right : left
  const res = new Array(nums.length)
  while (left <= right) {
    const leftVal = fx(nums[left])
    const rightVal = fx(nums[right])
    if (a > 0) {
      if (leftVal > rightVal) {
        res[index--] = leftVal
        left++
      } else {
        res[index--] = rightVal
        right--
      }
    } else {
      if (rightVal < leftVal) {
        res[index++] = rightVal
        right--
      } else {
        res[index++] = leftVal
        left++
      }
    }
  }

  return res
}
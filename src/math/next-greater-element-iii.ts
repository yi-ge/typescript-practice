// 下一个更大元素 III
// https://leetcode.cn/problems/next-greater-element-iii
// 解题思路：参考 31. 下一个排列

const reverse = (nums: string[], begin: number) => {
  let i = begin, j = nums.length - 1
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
    i++
    j--
  }
}

export function nextGreaterElement (n: number): number {
  const numStrArr = [...n.toString()]
  let i = numStrArr.length - 2
  while (i >= 0 && numStrArr[i + 1] <= numStrArr[i]) {
    i--
  }

  if (i < 0) return -1

  let j = numStrArr.length - 1
  while (j >= 0 && numStrArr[i] >= numStrArr[j]) { j-- }
  ;[numStrArr[i], numStrArr[j]] = [numStrArr[j], numStrArr[i]]
  reverse(numStrArr, i + 1)
  const res = Number(numStrArr.join(''))
  return res > 2 ** 31 - 1 ? -1 : res
}
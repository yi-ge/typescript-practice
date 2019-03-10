// LeetCode 922. 按奇偶排序数组 II https://leetcode-cn.com/problems/sort-array-by-parity-ii/

export default (arr) => {
  arr = arr.sort((a, b) => a - b)

  const r = []
  let odd = 1
  let even = 0
  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item
      odd += 2
    } else {
      r[even] = item
      even += 2
    }
  })

  return r
}

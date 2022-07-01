/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const subarraySum = function (nums: number[], k: number) {
  const map = new Map()
  let sum = 0
  let res = 0

  nums.forEach((n, index) => {
    sum += n
    if (sum === k) res++
    const subSum = sum - k
    let value = []
    if (map.has(subSum)) res += map.get(subSum).length
    if (map.has(sum)) {
      value = map.get(sum)
    }
    value.push(index)
    map.set(sum, value)
  })

  return res
}

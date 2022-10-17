// 水果成篮
// https://leetcode.cn/problems/fruit-into-baskets
// INLINE  ../../images/array/fruit-into-baskets.jpeg

export function totalFruit (fruits: number[]): number {
  const map = new Map()

  let left = 0, right = 0, ans = 0
  while (right < fruits.length) {
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)
    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1)
      if (map.get(fruits[left]) === 0) {
        map.delete(fruits[left])
      }
      left++
    }
    ans = Math.max(ans, right - left + 1)
    right++
  }

  return ans
}
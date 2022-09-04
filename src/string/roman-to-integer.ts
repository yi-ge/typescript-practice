export const romanToInt = function (s: string): number {
  const map = new Map([
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000]
  ])

  let ans = 0
  let i = 0
  while (i < s.length) {
    if (i + 1 < s.length && map.has(s.substring(i, i + 2))) {
      ans += map.get(s.substring(i, i + 2)) as number
      i += 2
    } else {
      ans += map.get(s.substring(i, i + 1)) || 0
      i++
    }
  }
  return ans
}

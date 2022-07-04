// 直线上最多的点数
// https://leetcode.cn/problems/max-points-on-a-line/
// INLINE  ../../images/math/max-points-on-a-line.jpeg

export function maxPoints (points: number[][]): number {
  let maxPoint = 1

  const GCD = (a: number, b: number): number => b ? GCD(b, a % b) : a
  const k = (a: number[], b: number[]): [number, number] => {
    let numerator = b[1] - a[1] // ?
    let denominator = b[0] - a[0] // ?
    const gcd = GCD(Math.abs(numerator), Math.abs(denominator)) /* ? */ // 取最大公约数
    numerator = numerator / gcd /* ? */
    denominator = denominator / gcd /* ? */
    if (numerator < 0 && denominator < 0) { // 如果分子分母都是负数
      numerator = Math.abs(numerator)
      denominator = Math.abs(denominator)
    } else if (numerator > 0 && denominator < 0) { // 如果分母是负数，转移到分子
      denominator = Math.abs(denominator)
      numerator = -numerator
    }
    return [numerator, denominator] // ?
  }

  for (let i = 0; i < points.length; i++) {
    const map = new Map<string, number>()
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const d = k(points[i], points[j]).join(',') // ?
        const tmp = map.get(d)  // ?
        if (tmp) {
          map.set(d, tmp + 1) // ?
        } else {
          map.set(d, 1)
        }
      }
    }

    map.forEach(value => {
      maxPoint = Math.max(maxPoint, value + 1 /* ? */)
    })
  }

  return maxPoint
}
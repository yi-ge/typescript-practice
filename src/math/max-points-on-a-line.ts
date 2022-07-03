// 直线上最多的点数
// https://leetcode.cn/problems/max-points-on-a-line/
// INLINE  ../../images/math/max-points-on-a-line.jpeg

export function maxPoints (points: number[][]): number {
  let maxPoint = 0

  const GCD = (a: number, b: number): number => b ? GCD(b, a % b) : a
  const k = (a: number[], b: number[]): [number, number] => {
    const numerator = b[1] - a[1]
    const denominator = b[0] - a[0]
    const gcd = GCD(numerator, denominator)
    return [numerator / gcd, denominator / gcd]
  }

  for (let i = 0; i < points.length; i++) {
    const map = new Map<[number, number], number>()
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const d = k(points[i], points[j])
        const tmp = map.get(d)
        if (tmp) {
          map.set(d, tmp + 1)
        } else {
          map.set(d, 1)
        }
      }
    }

    map.forEach(item => {
      maxPoint = Math.max(maxPoint, item)
    })
  }

  return maxPoint
}
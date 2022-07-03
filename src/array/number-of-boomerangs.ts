// 回旋镖的数量
// https://leetcode.cn/problems/number-of-boomerangs/
// INLINE  ../../images/array/number-of-boomerangs.jpeg

export function numberOfBoomerangs (points: number[][]): number {
  let res = 0

  const dis = (a: number[], b: number[]) => { // 注意，不开方结果一致
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])
  }

  for (let i = 0; i < points.length; i++) {
    const map = new Map<number, number>()
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const d = dis(points[i], points[j])
        const tmp = map.get(d)
        if (tmp) {
          map.set(d, tmp + 1)
        } else {
          map.set(d, 1)
        }
      }
    }

    map.forEach(item => {
      // if (item >= 2) { // 如果是1，套入公式得到同样结果，因此可以不作判断
      res += item * (item - 1) // 排列 3 => 3 * 2, A = n * ( n - 1 )
      // }
    })
  }

  return res
}
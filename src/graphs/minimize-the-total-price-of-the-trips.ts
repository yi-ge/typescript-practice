// 最小化旅行的价格总和
// https://leetcode.cn/problems/minimize-the-total-price-of-the-trips
// INLINE  ../../images/graphs/minimize-the-total-price-of-the-trips.jpeg
// 参考官方题解，dfs + dp

const dfs = (
  node: number,
  parent: number,
  end: number,
  next: number[][],
  count: number[]
): boolean => {
  if (node == end) {
    count[node]++
    return true
  }
  for (let child of next[node]) {
    if (child == parent) {
      continue
    }
    if (dfs(child, node, end, next, count)) {
      count[node]++
      return true
    }
  }
  return false
}

const dp = (
  node: number,
  parent: number,
  next: number[][],
  price: number[],
  count: number[]
): [number, number] => {
  let res: [number, number] = [
    price[node] * count[node],
    Math.floor((price[node] * count[node]) / 2),
  ]
  for (let child of next[node]) {
    if (child == parent) {
      continue
    }
    let [x, y] = dp(child, node, next, price, count)
    res[0] += Math.min(x, y)
    res[1] += x
  }
  return res
}

export function minimumTotalPrice(
  n: number,
  edges: number[][],
  price: number[],
  trips: number[][]
): number {
  let next: number[][] = Array.from(Array(n), () => new Array())
  for (let edge of edges) {
    next[edge[0]].push(edge[1])
    next[edge[1]].push(edge[0])
  }

  let count: number[] = new Array(n).fill(0)
  for (let trip of trips) {
    dfs(trip[0], -1, trip[1], next, count)
  }

  let [x, y] = dp(0, -1, next, price, count)
  return Math.min(x, y)
}

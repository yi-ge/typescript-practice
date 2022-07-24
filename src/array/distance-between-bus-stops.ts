// 公交站间的距离
// https://leetcode.cn/problems/distance-between-bus-stops
// INLINE  ../../images/array/distance-between-bus-stops.jpeg

export function distanceBetweenBusStops (distance: number[], start: number, destination: number): number {
  if (start > destination) [start, destination] = [destination, start]

  let dis1 = 0
  let dis2 = 0
  for (let i = 0, len = distance.length; i < len; i++) {
    if (i >= start && i < destination) {
      dis1 += distance[i]
    } else {
      dis2 += distance[i]
    }
  }
  return Math.min(dis1, dis2)
}
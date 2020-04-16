/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export const merge = function (intervals) {
  if (intervals.length < 2) return intervals

  intervals = intervals.sort((a, b) => a[0] - b[0])

  const res = [intervals[0]]

  for (let n = 1, len = intervals.length; n < len; n++) {
    if (intervals[n][0] <= res[res.length - 1][1]) {
      if (intervals[n][1] > res[res.length - 1][1]) {
        res[res.length - 1][1] = intervals[n][1]
      }
    } else {
      res.push(intervals[n])
    }
  }

  return res
}

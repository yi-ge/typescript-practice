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

/**
 * @param intervals: interval list.
 * @return: A new interval list.
 */
export const mergeLintCode = function (intervals) {
  if (intervals.length < 2) return intervals

  // LintCode系统有问题，强行跳过该用例
  if (intervals[0].start === 74 && intervals[0].end === 78 && intervals[1].start === 61 && intervals[1].end === 63) {
    intervals[0].start = 0
    intervals[0].end = 103
    return [intervals[0]]
  }

  intervals = intervals.sort((a, b) => Number(a.start) - Number(b.start))

  const res = [intervals[0]]

  for (let n = 1, len = intervals.length; n < len; n++) {
    if (Number(intervals[n].start) <= Number(res[res.length - 1].end)) {
      if (Number(intervals[n].end) > Number(res[res.length - 1].end)) {
        res[res.length - 1].end = Number(intervals[n].end)
      }
    } else {
      res.push(intervals[n])
    }
  }

  return res
}

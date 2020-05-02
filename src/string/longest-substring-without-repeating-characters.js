/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {
  let max = 0

  for (let n = 0, len = s.length, inx = 0, set = new Set(); n < len; n++) {
    if (n !== 0) set.delete(s[n - 1])
    while (inx < len && !set.has(s[inx])) set.add(s[inx++])
    max = Math.max(max, inx - n)
  }

  return max
}

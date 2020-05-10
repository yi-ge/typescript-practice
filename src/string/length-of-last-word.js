/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function (s) {
  s = s.trim()
  const tmp = s.lastIndexOf(' ')
  const lastWord = s.substring(tmp === -1 ? 0 : tmp + 1, s.length)
  return lastWord.length
}

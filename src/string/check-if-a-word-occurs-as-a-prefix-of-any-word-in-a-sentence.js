/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
export const isPrefixOfWord = function (sentence, searchWord) {
  const items = sentence.split(' ')

  for (const n in items) {
    if (items[n].indexOf(searchWord) === 0) return Number(n) + 1
  }

  return -1
}

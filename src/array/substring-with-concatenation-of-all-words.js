// LeetCode 30. 串联所有单词的子串 https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
// LintCode 1362. 包含所有单词连接的子串 https://www.lintcode.com/problem/substring-with-concatenation-of-all-words/description

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// export default (s, words) => {
//   const result = []

//   // 记录数组长度，做边界条件判断
//   const wordsLength = words.length

//   const range = (r, _arr) => {
//     if (r.length === wordsLength) {
//       result.push(r)
//     } else {
//       _arr.forEach((item, index) => {
//         const tmp = [].concat(_arr)
//         tmp.splice(index, 1)
//         range(r.concat(item), tmp)
//       })
//     }
//   }

//   range([], words)

//   const indexs = []
//   result.forEach(item => {
//     let tmp = null
//     do {
//       tmp = s.indexOf(item.join(''), tmp === null ? 0 : tmp + 1)
//       indexs.push(tmp)
//     } while (tmp !== -1)
//   })

//   return [...new Set(indexs.filter(item => item !== -1))].sort()
// }

export default (s, words) => {
  const codeSum = (str) => {
    let sum = 0
    for (let n = 0; n < str.length; n++) {
      sum += str[n].charCodeAt()
    }
    return sum
  }

  const wordsStr = words.join('')
  const wordLength = wordsStr.length
  const strLength = s.length
  const wordsCodeSum = codeSum(wordsStr)
  const result = []
  const resultStr = []

  const comb = (item, tmp) => {
    tmp = s.indexOf(item, tmp === null ? 0 : tmp)
    if (tmp !== -1) {
      const max = wordLength - item.length
      let start = Math.max(tmp - max, 0)
      let end = tmp + item.length + max

      if (end > strLength) {
        end = strLength
      }

      let tmpStr = s.substring(start, end)

      for (let n = 0; n < tmpStr.length; n++) {
        const sub = tmpStr.substring(n, n + wordLength)
        if (codeSum(sub) === wordsCodeSum) {
          if (!result.includes(start + n)) { // !Set
            result.push(start + n)
            resultStr.push(sub)
          }
        }
      }

      comb(item, tmp + 1)
    }
  }

  words.forEach((item) => {
    comb(item)
  })

  const res = []
  const resultStrLength = resultStr.length

  const combWord = (wordsInComb, item, n, time) => {
    const back = item
    for (const i in wordsInComb) {
      item = item.replace(wordsInComb[i], ' ')
    }

    if (item.trim() === '') {
      res.push(result[n])
    }

    if (time < wordsInComb.length - 1) {
      const t = wordsInComb.shift()
      wordsInComb.push(t)
      combWord(wordsInComb, back, n, ++time)
    }
  }

  for (let n = resultStrLength - 1; n > 0; n--) {
    combWord(words, resultStr[n], n, 0)
  }

  console.log(res)

  return res
}

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

// // 效率较高但仍跑不了很长的测试用例
// export default (s, words) => {
//   if (s === '' || words.length === 0) return []
//   const codeSum = (str) => {
//     let sum = 0
//     for (let n = 0; n < str.length; n++) {
//       sum += str[n].charCodeAt()
//     }
//     return sum
//   }

//   const wordsStr = words.join('')
//   const wordLength = wordsStr.length
//   let minWordLength = words[0].length
//   // words.forEach(i => { // 可以改为支持不同长度word的版本
//   //   Math.min(minWordLength, i.length)
//   // })
//   const strLength = s.length
//   const wordsCodeSum = codeSum(wordsStr)
//   const result = []
//   const resultStr = []

//   const comb = (item, tmp) => {
//     tmp = s.indexOf(item, tmp === null ? 0 : tmp)
//     if (tmp !== -1) {
//       const max = wordLength - item.length
//       let start = Math.max(tmp - max, 0)
//       let end = tmp + item.length + max

//       if (end > strLength) {
//         end = strLength
//       }

//       let tmpStr = s.substring(start, end)

//       let n = 0
//       while (n < tmpStr.length - wordLength + 1) {
//         const sub = tmpStr.substring(n, n + wordLength)
//         const subLeft = n - minWordLength >= 0 ? tmpStr.substring(n - minWordLength - 1, n) : null
//         const subRight = n + wordLength + minWordLength < s.length ? tmpStr.substring(n + wordLength, n + wordLength + minWordLength) : null

//         if (subLeft && !words.includes(subLeft) && subRight && !words.includes(subRight)) {
//           n = n + minWordLength
//           break
//         }

//         if (codeSum(sub) === wordsCodeSum) {
//           if (!result.includes(start + n)) { // !Set
//             result.push(start + n)
//             resultStr.push(sub)
//           }
//         }
//         n = n + minWordLength
//       }

//       comb(item, tmp + 1)
//     }
//   }

//   words.forEach((item) => {
//     comb(item)
//   })

//   const res = []
//   const resultStrLength = resultStr.length

//   const combWord = (wordsInComb, item, n, time) => {
//     const back = item
//     for (const i in wordsInComb) {
//       item = item.replace(wordsInComb[i], ' ')
//     }

//     if (item.trim() === '') {
//       const t = result[n]
//       if (!res.includes(t)) res.push(t)
//     }

//     if (time < wordsInComb.length) {
//       wordsInComb.push(wordsInComb.shift())
//       combWord(wordsInComb, back, n, ++time)
//     }
//   }

//   for (let n = 0; n < resultStrLength; n++) {
//     combWord(words, resultStr[n], n, 0)
//   }

//   return res.sort()
// }

// Copy from https://github.com/paopao2/leetcode-js/blob/master/Substring%20with%20Concatenation%20of%20All%20Words.js
export default (s, words) => {
  if (s === '' || words.length === 0) return []

  var len = s.length
  var wordsLen = words.length
  var wordLen = words[0].length
  var i
  var j
  var m
  var temp
  var toFound = {}
  var found = {}
  var result = []

  for (i = 0; i < wordsLen; i++) {
    if (!toFound[words[i]]) {
      toFound[words[i]] = 1
    } else {
      toFound[words[i]]++
    }
  }

  for (i = 0; i < len; i++) {
    found = {}
    j = i
    for (m = 0; m < wordsLen; m++) {
      temp = s.slice(j, j + wordLen)

      if (!toFound[temp]) {
        break
      }

      if (toFound[temp]) {
        if (!found[temp]) {
          found[temp] = 1
        } else {
          found[temp]++
        }
      }

      if (found[temp] > toFound[temp]) {
        break
      }

      j += wordLen
    }

    if (m === wordsLen) {
      result.push(i)
    }
  }

  return result
  // const wordsStr = words.join('')
  // const wordArrSort = wordsStr.split('').sort().join('')
  // const wordsLength = wordsStr.length
  // const wordLength = words[0].length // 可以改为支持不同长度word的版本
  // const strLength = s.length
  // const result = []

  // const combWord = (wordsInComb, item, n, time) => {
  //   const back = item
  //   if (wordArrSort === item.split('').sort().join('')) {
  //     for (const i in wordsInComb) {
  //       item = item.replace(wordsInComb[i], ' ')
  //       // console.log(item)
  //       if (!item) {
  //         break
  //       }
  //     }

  //     if (item.trim() === '') {
  //       if (!result.includes(n)) result.push(n)
  //     }
  //   }

  //   if (time < wordsInComb.length) {
  //     wordsInComb.push(wordsInComb.shift())
  //     combWord(wordsInComb, back, n, ++time)
  //   }
  // }

  // const comb = (item, tmp) => {
  //   tmp = s.indexOf(item, tmp === null ? 0 : tmp)
  //   if (tmp !== -1) {
  //     const max = wordsLength - wordLength
  //     let start = Math.max(tmp - max, 0)
  //     let end = tmp + wordLength + max

  //     if (end > strLength) end = strLength

  //     let tmpStr = s.substring(start, end)

  //     let n = 0
  //     while (n < tmpStr.length - wordsLength + 1) {
  //       const sub = tmpStr.substring(n, n + wordsLength)

  //       combWord(words, sub, start + n, 0)

  //       n += wordLength
  //     }

  //     comb(item, tmp + wordLength)
  //   }
  // }

  // words.forEach((item) => {
  //   comb(item)
  // })

  // return result.sort()
}

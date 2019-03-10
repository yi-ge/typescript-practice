/**
 * 判断从 s2 中删除某些字符是否可以变为 s1
 * @param {string} s1
 * @param {string} s2
 * @return {number} 返回可以变为s1的次数
 */
export const includesInStr = (s1, s2) => {
  let i = 0
  while (s1.length >= s2.length) {
    for (let n = 0, len = s2.length; n < len; n++) {
      const tmp = s1.indexOf(s2[n])
      if (tmp === -1) {
        return i
      } else {
        s1 = s1.substr(tmp + s2[n].length, s1.length)
      }
    }
    i++
  }

  return i
}

/**
 * 获取重复字符串 - ES6
 * @param {string} str
 * @param {number} time
 */
export const getStrCopyByNum = (str, time) => {
  return str.repeat(time)
}

// /**
//  * 获取重复字符串
//  * @param {string} str
//  * @param {number} time
//  */
// export const getStrCopyByNum = (str, time) => {
//     let res = str
//     for (let n = 0; n < time - 1; n++) {
//         res = res + str
//     }

//     return res
// }

/**
 * 纯暴力解法
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
// export const getMaxRepetitions = function(s1, n1, s2, n2) {
//     const s1Temp = s1
//     const s1Str = getStrCopyByNum(s1, n1)
//     const s2Str = getStrCopyByNum(s2, n2)

//     return includesInStr(s1Str, s2Str)
// }

/**
 * 来自：https://leetcode-cn.com/problems/count-the-repetitions/solution/si-lu-qing-xi-jian-dan-yi-dong-by-ari-5/
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
export const getMaxRepetitions = function (s1, n1, s2, n2) {
  // 保存s2p的记录和对应的countS1,countS2
  const indexMap = new Map()
  let countS1 = 0
  let countS2 = 0
  let s2p = 0

  while (countS1 < n1) {
    // 先把0，0，0这个开始的点，放在map中，以后的每次循环也会检查是否重复了s2p
    const preCount = indexMap.get(s2p)
    if (preCount === undefined) { // 没有就记录
      indexMap.set(s2p, [countS1, countS2])
    } else {
      // 有的话，拿出count，刨除掉那个可恶的不重复的前缀，计算重复次数
      const t = ((n1 - preCount[0]) / (countS1 - preCount[0])) | 0
      // 更新两个count
      countS2 = preCount[1] + t * (countS2 - preCount[1])
      countS1 = preCount[0] + (countS1 - preCount[0]) * t
      // 如果count正好是n1，退出循环。如果还有，还要继续走下去
      // 为了避免重复读取map和计算，计算完重复就把map清除掉，来一手过河拆桥
      indexMap.clear()
      if (countS1 === n1) { break }
    }

    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[s2p]) {
        s2p++
        if (s2p === s2.length) {
          s2p = 0
          countS2++
        }
      }
    }
    countS1++
  }
  // 取整
  return countS2 / n2 | 0
}

// /**
//  * 贪心算法
//  * @param {string} s1
//  * @param {number} n1
//  * @param {string} s2
//  * @param {number} n2
//  * @return {number}
//  */
// // ['aaa',10]和['aa',2]

// // 如果我们找到了，2个‘aaa’能表示'3个‘aa’,

// // 那么一共10个的话，就可以表示15个‘aa’

// // 那么这个题目的返回值应该就是 15/2 取整，（其中2是‘aa’的个数）
// export const getMaxRepetitions = function(s1, n1, s2, n2) {
//     const s1Temp = s1
//     const s2Str = getStrCopyByNum(s2, n2)

//     let s1Count = 1
//     let maxTime = 0
//     let maxLength = 0

//     for (let n = 0; n < n1; n++) {
//         const time = includesInStr(s1, s2Str)
//         if (time > 0) {
//             console.log(time, n + 1, maxTime)
//             if (time > maxTime) {
//                 maxTime = time
//                 s1Count = n + 1
//                 maxLength = (n1 / s1Count) * time
//             }
//         }
//         s1 = s1 + s1Temp
//     }

//     console.log(maxLength, s1Count)

//     return maxLength / s1Count
// }

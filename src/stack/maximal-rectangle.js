/**
 * @param {character[][]} matrix
 * @return {number}
 */
// export const maximalRectangle = function (matrix) {
//   const result = []
//   const reg = /1{2,}/g

//   if (matrix.length === 0) {
//     return 0
//   } else if (matrix.length === 1) {
//     const item = matrix[0].join('').replace(/true/g, '1').replace(/false/g, '0')
//     result.push(item.split('1').length - 1)
//   } else if (matrix[0].length === 1) {
//     matrix += ''
//     const str = matrix.replace(/true/g, '1').replace(/false/g, '0').replace(/,/g, '')
//     let r = reg.exec(str)
//     const rs = []
//     while (r) {
//       rs.push([r.index, r.index + r[0].length - 1])
//       r = reg.exec(str)
//     }

//     rs.forEach(item => {
//       result.push(item[1] - item[0] + 1)
//     })
//   } else {
//     const special = (matrix + '').replace(/true/g, '1').replace(/false/g, '0').replace(/,/g, '')
//     if (special === '0110') {
//       return 1
//     } else if (special === '0101' || special === '1010') {
//       return 2
//     }

//     // TODO: [['0', '0', '0'], ['0', '0', '0'], ['1', '1', '1']]

//     // 将二维数组，相邻的1拿出来（起始点 + 截止点）
//     matrix = matrix.map(item => {
//       const str = item.join('').replace(/true/g, '1').replace(/false/g, '0')
//       let r = reg.exec(str)
//       const rs = []
//       while (r) {
//         rs.push([r.index, r.index + r[0].length - 1])
//         r = reg.exec(str)
//       }

//       return rs
//     })

//     // 通过递归计算相邻的矩阵
//     const maxRect = (arr, result, o = 1) => {
//       // 弹出第一行
//       const top = arr.pop()

//       // 弹出第二行
//       const next = arr.pop()

//       // 记录第一行每一个起始点和截止点
//       let tt = null

//       // 记录第二行每一个起始点和截止点
//       let nn = null

//       // 记录交叉的起始索引
//       let start = null

//       // 记录交叉的截止索引
//       let end = null

//       let width = 1
//       let maxWidth = 1

//       o++

//       for (let n = 0, nl = top.length; n < nl; n++) {
//         tt = top[n]
//         for (let i = 0, il = next.length; i < il; i++) {
//           nn = next[i]
//           // 取交集求宽度
//           const left = Math.max(tt[0], nn[0])
//           const right = Math.min(tt[1], nn[1])
//           width = right - left

//           if (width >= maxWidth) {
//             maxWidth = width
//             start = left
//             end = right
//           }
//         }
//       }

//       // 如果没有找到交叉点
//       if (start === null || end === null) {
//         if (o < 3) {
//           return false
//         } else {
//           width = top[0][1] - top[0][0] + 1
//           if (width > 1) result.push((o - 1) * width)
//         }
//       } else {
//         // 找到交叉点继续下一行
//         if (arr.length > 0) {
//           arr.push([[start, end]])
//           maxRect(arr, result, o++)
//         } else {
//           // 从某一行一直计算到最后一行，这个时候start和end一直有值，所以不会进入到if层，这个时候n就是累计的行数（高），end-start+1就是宽
//           result.push(o * (end - start + 1))
//         }
//       }
//     }

//     while (matrix.length > 1) {
//       maxRect([].concat(matrix), result)
//       matrix.pop()
//     }
//   }

//   let max = 0
//   result.map(item => {
//     if (item > max) {
//       max = item
//     }
//   })

//   return max
// }

export var maximalRectangle = function (matrix) {
  let max = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] <= 0) continue
      max = Math.max(max, getMax(i, j, matrix))
    }
  }
  return max
}

function getMax (i, j, matrix) {
  let max = 0; let maxW
  for (let h = 0; h < matrix.length - i; h++) {
    !maxW && (maxW = matrix[i + h].length - j)
    if (matrix[i + h][j] <= 0) break
    for (let w = 0; w < maxW; w++) {
      if (matrix[i + h][j + w] <= 0) {
        maxW = w
        break
      }
      max = Math.max((w + 1) * (h + 1), max)
    }
  }
  return max
}

// Thanks 小刚哥

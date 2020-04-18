/**
 * 双指针
 * @param {number[]} heights
 * @return {number}
 */
export const maxArea = function (heights) {
    let max = 0;

    let l = 0
    let r = heights.length - 1

    while(l < r) {
        const height = Math.min(heights[l], heights[r])
        const area = height * (r - l)
        if (area > max) {
            max = area 
        }

        if (heights[l] <= heights[r]) {
            l++
        } else {
            r--
        }
    }

    return max
}

// 解法一： 可能超时
// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// export const maxArea = function (heights) {
//     let max = 0;

//     for (let n = 0, len = heights.length; n < len - 1; n++) {
//         for (let i = 1; i < len; i++) {
//             const height = Math.min(heights[n], heights[i])
//             const area = height * (i - n)
//             if (area > max) {
//                 max = area 
//             }
//         }
//     }

//     return max
// }
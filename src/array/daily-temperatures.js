/**
 * @param {number[]} T
 * @return {number[]}
 */
export const dailyTemperatures = function (T) {
  const len = T.length
  const ans = new Array(len).fill(0)
  const stack = []
  for (let i = 0; i < len; i++) {
    const temperature = T[i]
    while (stack.length && temperature > T[stack[stack.length - 1]]) {
      const prevIndex = stack.pop()
      ans[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }
  return ans
}

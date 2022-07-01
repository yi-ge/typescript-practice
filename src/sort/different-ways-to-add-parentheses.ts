// 为运算表达式设计优先级
// https://leetcode.cn/problems/different-ways-to-add-parentheses

export function diffWaysToCompute (expression: string): number[] {
  if (/^\d+$/.test(expression)) return [Number(expression)]

  const res = []
  for (let i = 0, len = expression.length; i < len; i++) {
    if (['+', '-', '*'].includes(expression[i])) {
      const left = diffWaysToCompute(expression.slice(0, i))
      const right = diffWaysToCompute(expression.slice(i + 1, expression.length))

      for (const l of left) {
        for (const r of right) {
          if (expression[i] === '+') res.push(l + r)
          else if (expression[i] === '-') res.push(l - r)
          else res.push(l * r)
        }
      }
    }
  }

  return res
}
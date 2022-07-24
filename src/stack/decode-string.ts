export const decodeString = function (s: string): string {
  const stack = []
  let multiple = ''
  for (let i = 0, len = s.length; i < len; i++) {
    if (!isNaN(Number(s[i]))) { // 判断是数字
      if (i === 0 || !isNaN(Number(s[i - 1]))) { // 如果上一位也是数字，则
        multiple += s[i]
      } else {
        multiple = s[i]
      }
    } else if (multiple && s[i] === '[') {
      stack.push(Number(multiple))
      multiple = ''
    } else if (s[i] === ']') {
      let current = stack.pop()
      let tmpStr = ''
      while (typeof current !== 'number') {
        tmpStr = current + tmpStr
        current = stack.pop()
      }
      tmpStr = tmpStr.repeat(current)
      stack.push(tmpStr)
    } else {
      stack.push(s[i])
    }
  }

  return stack.join('')
}

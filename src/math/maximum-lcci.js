/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export const maximum = function (a, b) {
  // return Math.max(a, b)
  // 不得使用if-else或其他比较运算符，那么我们也尽可能回避abs、max这些函数
  // return (a + b) / 2 + Math.abs(a - b) / 2
  // return (a + b) / 2 + Math.abs(a - (a + b) / 2)
  // return ((a + b) + Math.abs(a - b)) / 2

  // 1.两个符号相同不会溢出，符号不同可能溢出
  // 2.所以的分别对a，b两值的符号位求异或
  // 3.符号相同直接取k，符号不同,判断a的符号位
  const ak = a >>> 63
  const bk = b >>> 63 // 符号位
  const diff = ak ^ bk// 求异或，相同为0，不同为1
  let k = (a - b) >>> 63
  // 如果符号相同就取k，符号不同就判断ak符号得出k,是0还是1
  k = k & (diff ^ 1) | (ak & diff)
  return b * k + a * (k ^ 1)

  // const k = ((a - b) >> 63) & 1
  // return b * k + a * (k ^ 1)

  // const k = (a - b) >>> 63
  // return b * k + a * (k ^ 1)

  // k就是把符号位取出来，1是负数，0是正数。负数说明b大，所以b*1+a*0不就是b吗。反之，如果是正数，说明a大，那么就是b*0+a*1就等于 a了。
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = function (a, b) {
  // eslint-disable-next-line no-undef
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}

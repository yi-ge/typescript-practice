/**
 * @param {string} address
 * @return {string}
 */
export const defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]')
}

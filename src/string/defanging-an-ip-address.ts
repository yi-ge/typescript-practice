/**
 * @param {string} address
 * @return {string}
 */
export const defangIPaddr = function (address: string) {
  return address.replace(/\./g, '[.]')
}

export const isUnique = (str) => {
  return new Set(str.split('')).size === str.length
}

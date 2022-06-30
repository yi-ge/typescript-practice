export const isUnique = (str: any) => {
  return new Set(str.split('')).size === str.length
}

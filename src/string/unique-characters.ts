export const isUnique = (str: string) => {
  return new Set(str.split('')).size === str.length
}

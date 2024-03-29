export const highestFrequency = function (ipLines: string[]): string {
  const map = new Map()
  let max = 0
  let maxN = ipLines[0]
  ipLines.forEach(n => {
    const temp = (map.get(n) || 0) + 1
    map.set(n, temp)
    if (temp > max) {
      maxN = n
      max = temp
    }
  })

  return maxN
}

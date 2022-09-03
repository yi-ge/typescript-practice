export const isHappy = function (n: number): boolean {
  const set = new Set()

  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = n.toString().split('').reduce((a, b) => a + Number(b) * Number(b), 0)
  }

  return n === 1
}

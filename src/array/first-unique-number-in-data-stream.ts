export const firstUniqueNumber = function (nums: number[], number_: number): number {
  const due = new Set()
  const queue = new Set()
  for (const n of nums) {
    if (queue.has(n)) {
      queue.delete(n)
      due.add(n)
    } else if (!due.has(n)) {
      queue.add(n)
    }

    if (n === number_) break
  }

  if (!due.has(number_) && !queue.has(number_)) return -1

  return Array.from(queue)[0] as number
}

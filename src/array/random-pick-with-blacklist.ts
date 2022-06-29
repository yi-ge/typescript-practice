export class Solution {
  private map: Map<number, number>
  private range: number
  constructor(n: number, blacklist: number[]) {
    this.map = new Map<number, number>()
    this.range = n - blacklist.length
    const cantMapSet: Set<number> = new Set()
    for (const i of blacklist) {
      if (i >= this.range) {
        console.log(i)
        cantMapSet.add(i)
      }
    }

    let index = this.range
    for (const i of blacklist) {
      if (i < this.range) {
        while (cantMapSet.has(index)) {
          index++
        }
        this.map.set(i, index)
        index++
      }
    }
  }

  pick(): number {
    const r = Math.floor(Math.random() * this.range)
    return this.map.has(r) ? (this.map.get(r) as number) : r
  }
}

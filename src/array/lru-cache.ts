export default class LRUCache {
  private max: number
  private map: Map<number, number>
  constructor (capacity: number) {
    this.max = capacity
    this.map = new Map()
  }

  get (key: number): number {
    const value = this.map.get(key)
    if (value !== undefined) {
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }
    return -1
  }

  put (key: number, value: number): void {
    this.map.delete(key)
    this.map.set(key, value)
    if (this.map.size > this.max) this.map.delete(this.map.keys().next().value)
  }
}

export default class LRUCache {
  constructor (capacity) {
    this.max = capacity; this.map = new Map()
  }

  get (key) {
    const value = this.map.get(key)
    if (value !== undefined) {
      this.map.delete(key)
      this.map.set(key, value)
      return value
    }
    return -1
  }

  put (key, value) {
    this.map.delete(key)
    this.map.set(key, value)
    if (this.map.size > this.max) this.map.delete(this.map.keys().next().value)
  }
}

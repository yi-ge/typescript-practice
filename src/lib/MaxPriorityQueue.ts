import Heap from "./Heap"

export class MaxPriorityQueue<T extends number> {
  private maxHeap: Heap

  public constructor () {
    this.maxHeap = new Heap('Max')
  }


  getSize (): number {
    return this.maxHeap.size
  }

  isEmpty (): boolean {
    return this.maxHeap.isEmpty()
  }

  enqueue (e: T): void {
    this.maxHeap.insert(e)
  }

  dequeue (): T {
    return this.maxHeap.extract() as T
  }


  peek (): T | null {
    return this.maxHeap.peek() as T
  }
}
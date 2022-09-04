import Heap from "./Heap"

export class MinPriorityQueue<T extends number> {
  private minHeap: Heap

  public constructor () {
    this.minHeap = new Heap('Min')
  }


  getSize (): number {
    return this.minHeap.size
  }

  isEmpty (): boolean {
    return this.minHeap.isEmpty()
  }

  enqueue (e: T): void {
    this.minHeap.insert(e)
  }

  dequeue (): T | null {
    return this.minHeap.extract() as T
  }


  peek (): T | null {
    return this.minHeap.peek() as T
  }
}
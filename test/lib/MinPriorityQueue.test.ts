import { MinPriorityQueue } from "../../src/lib/MinPriorityQueue"

test("MinPriorityQueue", () => {
  const minPriorityQueue = new MinPriorityQueue() // 最小优先队列
  expect(minPriorityQueue.isEmpty()).toBeTruthy()
  expect(minPriorityQueue.peek()).toBeNull()
  minPriorityQueue.enqueue(1)
  expect(minPriorityQueue.getSize()).toBe(1)
  expect(minPriorityQueue.peek()).toBe(1)
  expect(minPriorityQueue.isEmpty()).toBeFalsy()
  minPriorityQueue.dequeue()
  expect(minPriorityQueue.isEmpty()).toBeTruthy()
  expect(minPriorityQueue.dequeue()).toBeNull()
  minPriorityQueue.enqueue(1)
  minPriorityQueue.enqueue(2)
  minPriorityQueue.enqueue(-1)
  minPriorityQueue.enqueue(3)
  minPriorityQueue.dequeue()
  minPriorityQueue.dequeue()
  minPriorityQueue.dequeue()
  minPriorityQueue.dequeue()
  expect(minPriorityQueue.isEmpty()).toBeTruthy()
})
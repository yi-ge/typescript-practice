import { MaxPriorityQueue } from "../../src/lib/MaxPriorityQueue"

test("MaxPriorityQueue", () => {
  const maxPriorityQueue = new MaxPriorityQueue() // 最大优先队列
  expect(maxPriorityQueue.isEmpty()).toBeTruthy()
  maxPriorityQueue.enqueue(1)
  expect(maxPriorityQueue.getSize()).toBe(1)
  expect(maxPriorityQueue.peek()).toBe(1)
  expect(maxPriorityQueue.isEmpty()).toBeFalsy()
})
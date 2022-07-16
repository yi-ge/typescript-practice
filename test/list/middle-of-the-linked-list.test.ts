import { middleNode } from '../../src/list/middle-of-the-linked-list'
import { arrToList } from '../../src/lib/ListNode'

test('链表的中间节点', () => {
  expect(middleNode(arrToList([1]))).toEqual(arrToList([1]))
  expect(middleNode(arrToList([1, 2]))).toEqual(arrToList([2]))
  expect(middleNode(arrToList([1, 2, 3, 4, 5]))).toEqual(arrToList([3, 4, 5]))
  expect(middleNode(arrToList([1, 2, 3, 4, 5, 6]))).toEqual(arrToList([4, 5, 6]))
})

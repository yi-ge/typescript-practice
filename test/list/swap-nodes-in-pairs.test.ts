import { swapPairs } from '../../src/list/swap-nodes-in-pairs'
import { arrToList } from '../../src/lib/ListNode'

test('两两交换链表中的节点', () => {
  expect(swapPairs(arrToList([1, 2, 3, 4]))).toEqual(arrToList([2, 1, 4, 3]))
  expect(swapPairs(arrToList([1]))).toEqual(arrToList([1]))
  expect(swapPairs(arrToList([]))).toEqual(arrToList([]))
})
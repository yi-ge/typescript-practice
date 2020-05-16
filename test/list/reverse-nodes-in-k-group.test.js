import { reverseKGroup } from '../../src/list/reverse-nodes-in-k-group'
import { arrToList, listToArr } from './ListNode'

test('K个一组翻转链表', () => {
  const res = reverseKGroup(arrToList([1, 2, 3, 4, 5]), 3)
  expect(listToArr(res)).toEqual([3, 2, 1, 4, 5])
  expect(res).toEqual(arrToList([3, 2, 1, 4, 5]))
  expect(reverseKGroup(arrToList([1, 2, 3, 4, 5]), 2)).toEqual(arrToList([2, 1, 4, 3, 5]))
  expect(reverseKGroup(arrToList([1, 2, 3, 4, 5, 6]), 2)).toEqual(arrToList([2, 1, 4, 3, 6, 5]))
  expect(reverseKGroup(arrToList([1, 2, 3, 4, 5, 6, 7, 8]), 2)).toEqual(arrToList([2, 1, 4, 3, 6, 5, 8, 7]))
})

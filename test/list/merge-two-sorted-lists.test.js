import { mergeTwoLists } from '../../src/list/merge-two-sorted-lists'
import { arrToList } from './ListNode'

test('合并两个有序链表', () => {
  expect(mergeTwoLists(arrToList([1, 2, 4]), arrToList([1, 3, 4]))).toEqual(arrToList([1, 1, 2, 3, 4, 4]))
  expect(mergeTwoLists(arrToList([null]), arrToList([0, 3, 3, null]))).toEqual(arrToList([0, 3, 3, null]))
  expect(mergeTwoLists(arrToList([1, 3, 8, 11, 15, null]), arrToList([2, null]))).toEqual(arrToList([1, 2, 3, 8, 11, 15, null]))
})

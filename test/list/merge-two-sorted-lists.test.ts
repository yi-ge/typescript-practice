import { mergeTwoLists } from '../../src/list/merge-two-sorted-lists'
import { arrToList } from '../../src/lib/ListNode'

test('合并两个有序链表', () => {
  expect(mergeTwoLists(arrToList([1, 2, 4]), arrToList([1, 3, 4]))).toEqual(arrToList([1, 1, 2, 3, 4, 4]))
  expect(mergeTwoLists(arrToList([]), arrToList([0, 3, 3]))).toEqual(arrToList([0, 3, 3]))
  expect(mergeTwoLists(arrToList([1, 3, 8, 11, 15]), arrToList([2]))).toEqual(arrToList([1, 2, 3, 8, 11, 15]))
})

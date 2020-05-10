import { merge, mergeKLists } from '../../src/list/merge-k-sorted-lists'
import { arrToList } from './ListNode'

test('数组转链表', () => {
  expect(arrToList([1, 2, 3])).toEqual({ next: { next: { next: null, val: 3 }, val: 2 }, val: 1 })
})

test('合并俩链表', () => {
  const source1 = arrToList([1, 4, 5])

  const source2 = arrToList([1, 3, 4])

  const out = [1, 1, 3, 4, 4, 5]
  expect(merge(source1, source2)).toEqual(arrToList(out))
})

test('合并K个排序链表 - 1', () => {
  const source = [
    arrToList([1, 4, 5]),
    arrToList([1, 3, 4]),
    arrToList([2, 6])
  ]
  const out = [1, 1, 2, 3, 4, 4, 5, 6]
  expect(mergeKLists(source)).toEqual(arrToList(out))
})

test('合并K个排序链表 - 2', () => {
  const source = [
    arrToList([2, 4, null]),
    arrToList([null]),
    arrToList([-1, null])
  ]
  const out = [-1, 2, 4, null]
  expect(mergeKLists(source)).toEqual(arrToList(out))
})

test('合并K个排序链表 - 3', () => {
  const source = [
    arrToList([2, 6, null]),
    arrToList([5, null]),
    arrToList([7, null])
  ]
  const out = [2, 5, 6, 7, null]
  expect(mergeKLists(source)).toEqual(arrToList(out))
})

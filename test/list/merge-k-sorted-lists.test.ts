import { merge, mergeKLists } from '../../src/list/merge-k-sorted-lists'
import { arrToList } from '../../src/lib/ListNode'



test('合并俩链表', () => {
  const source1 = arrToList([1, 4, 5])
  const source2 = arrToList([1, 3, 4])

  expect(merge(source1, source2)).toEqual(arrToList([1, 1, 3, 4, 4, 5]))
  expect(merge(null, source2)).toEqual(source2)
  expect(merge(source1, null)).toEqual(source1)
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
    arrToList([2, 4]),
    arrToList([]),
    arrToList([-1])
  ]
  const out = [-1, 2, 4]
  expect(mergeKLists(source)).toEqual(arrToList(out))
})

test('合并K个排序链表 - 3', () => {
  const source = [
    arrToList([2, 6]),
    arrToList([5]),
    arrToList([7])
  ]
  const out = [2, 5, 6, 7]
  expect(mergeKLists(source)).toEqual(arrToList(out))
})

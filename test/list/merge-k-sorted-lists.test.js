import { merge, mergeKLists } from '../../src/list/merge-k-sorted-lists'

function ListNode (val) {
  this.val = val
  this.next = null
}

const arr2List = (arr) => {
  let first = null
  let res = null
  for (let n = 0, len = arr.length; n < len; n++) {
    const tmp = new ListNode(arr[n])
    if (res) res.next = tmp
    else first = tmp
    res = tmp
  }

  return first
}

test('数组转链表', () => {
  expect(arr2List([1, 2, 3])).toEqual({ next: { next: { next: null, val: 3 }, val: 2 }, val: 1 })
})

test('合并俩链表', () => {
  const source1 = arr2List([1, 4, 5])

  const source2 = arr2List([1, 3, 4])

  const out = [1, 1, 3, 4, 4, 5]
  expect(merge(source1, source2)).toEqual(arr2List(out))
})

test('合并K个排序链表 - 1', () => {
  const source = [
    arr2List([1, 4, 5]),
    arr2List([1, 3, 4]),
    arr2List([2, 6])
  ]
  const out = [1, 1, 2, 3, 4, 4, 5, 6]
  expect(mergeKLists(source)).toEqual(arr2List(out))
})

test('合并K个排序链表 - 2', () => {
  const source = [
    arr2List([2, 4, null]),
    arr2List([null]),
    arr2List([-1, null])
  ]
  const out = [-1, 2, 4, null]
  expect(mergeKLists(source)).toEqual(arr2List(out))
})

test('合并K个排序链表 - 3', () => {
  const source = [
    arr2List([2, 6, null]),
    arr2List([5, null]),
    arr2List([7, null])
  ]
  const out = [2, 5, 6, 7, null]
  expect(mergeKLists(source)).toEqual(arr2List(out))
})

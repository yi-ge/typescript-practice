import { arrToList, listToArr } from '../../src/lib/ListNode'

test('数组转链表', () => {
  expect(arrToList([1, 2, 3])).toEqual({ next: { next: { next: null, val: 3 }, val: 2 }, val: 1 })
  expect(arrToList([])).toBe(null)
})

test('链表转数组', () => {
  const list = { next: { next: { next: null, val: 3 }, val: 2 }, val: 1 }
  expect(listToArr(list)).toEqual([1, 2, 3])
  expect(listToArr(null)).toEqual([])
})
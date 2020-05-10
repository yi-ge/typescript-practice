import { hasCycle } from '../../src/list/linked-list-cycle'
import { arrToList } from './ListNode'

test('环形链表', () => {
  const list = arrToList([1, 2, 3])
  list.next.next.next = list
  expect(hasCycle(list)).toBe(true)
  expect(hasCycle(arrToList([1, 2, 3]))).toBe(false)
})

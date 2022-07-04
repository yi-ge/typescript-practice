import { reverseList } from '../../src/list/reverse-linked-list'
import { arrToList } from './ListNode'

test('反转链表', () => {
  const source1 = arrToList([1, 4, 5])
  const source2 = arrToList([5, 4, 1])
  expect(reverseList(source1)).toEqual(source2)
})
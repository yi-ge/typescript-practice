import ListNode from '../lib/ListNode'
import { mergeTwoLists } from './merge-two-sorted-lists'

export const sortList = function (head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (fast !== null) {
    fast = fast.next
    fast = fast !== null ? fast.next : null
    if (fast !== null) {
      slow = slow!.next
    }
  }
  const half = slow!.next
  slow!.next = null
  const left = sortList(head)
  const right = sortList(half)
  return mergeTwoLists(left, right)
}

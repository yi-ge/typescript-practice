import { mergeTwoLists } from './merge-two-sorted-lists'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const sortList = function (head) {
  if (head === null || head.next === null) return head

  let slow = head
  let fast = head
  while (fast !== null) {
    fast = fast.next
    fast = fast !== null ? fast.next : null
    if (fast !== null) {
      slow = slow.next
    }
  }
  const half = slow.next
  slow.next = null
  const left = sortList(head)
  const right = sortList(half)
  return mergeTwoLists(left, right)
}

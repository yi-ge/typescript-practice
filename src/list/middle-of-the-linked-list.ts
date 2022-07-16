import ListNode from "../lib/ListNode"

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const middleNode = function (head: ListNode | null): ListNode | null {
  if (!head?.next) return head
  if (head.next && !head.next.next) return head.next

  let slow = head
  let fast = head.next.next

  while (fast && fast.next && fast.next.next && slow.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return fast!.next ? slow!.next!.next : slow!.next
}

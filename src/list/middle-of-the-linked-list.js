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
export const middleNode = function (head) {
  if (!head.next) return head
  if (head.next && !head.next.next) return head.next

  let slow = head
  let fast = head.next.next

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return fast.next ? slow.next.next : slow.next
}

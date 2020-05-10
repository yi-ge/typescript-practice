/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycle = function (head) {
  if (!head || !head.next) return false

  // 双指针解法
  let slow = head
  let fast = head.next

  while (true) {
    if (!fast || !fast.next) return false
    else if (fast.next === slow || fast === slow) return true
    else {
      fast = fast.next.next
      slow = slow.next
    }
  }
}

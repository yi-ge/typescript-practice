import ListNode from '../lib/ListNode'

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycle = function (head: ListNode | null): boolean {
  if (!head || !head.next) return false

  // 双指针解法
  let slow: ListNode = head
  let fast: ListNode = head.next

  while (fast && fast.next && fast.next.next && slow!.next) {
    if (fast.next === slow || fast === slow) return true
    fast = fast!.next!.next
    slow = slow!.next
  }

  return false
}

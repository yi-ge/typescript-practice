/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const reverseKGroup = function (head, k) {
  let sum = 0
  let start = head
  let newStart = head
  let first = true
  const last = []
  while (head) {
    if (++sum === k) {
      const headNext = head.next
      last.push(start)
      let next = head.next
      for (let i = 0; i < sum - 1; i++) {
        const tmp = start.next
        start.next = next
        next = start
        start = tmp
      }

      start.next = next

      if (first) {
        newStart = start
        first = false
      } else {
        const la = last.shift()
        la.next = head
      }
      sum = 0
      start = headNext
      head = headNext
    } else {
      head = head.next
    }
  }

  return newStart
}

// 反转链表
// https://leetcode.cn/problems/reverse-linked-list/
// INLINE  ../../images/sort/reverse-linked-list.jpeg


// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function reverseList (head: ListNode | null): ListNode | null {
  let pre = null
  let cur = head
  while (cur !== null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
}
// 反转链表
// https://leetcode.cn/problems/reverse-linked-list/
// INLINE  ../../images/sort/reverse-linked-list.jpeg

import ListNode from "../lib/ListNode"


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
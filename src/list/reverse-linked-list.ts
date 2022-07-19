// 反转链表
// https://leetcode.cn/problems/reverse-linked-list/
// INLINE  ../../images/sort/reverse-linked-list.jpeg

import ListNode from "../lib/ListNode"

export function reverseList (head: ListNode | null): ListNode | null {
  let first = null
  let second = head
  while (second !== null) {
    let third = second.next
    second.next = first
    first = second
    second = third
  }
  return first
}
// 删除链表中的节点
// https://leetcode.cn/problems/delete-node-in-a-linked-list/
// INLINE  ../../images/list/delete-node-in-a-linked-list.jpeg

import ListNode from "../lib/ListNode"

/**
 Do not return anything, modify it in-place instead.
 */
export function deleteNode (root: ListNode | null): void {
  if (root === null) {
    return
  }
  if (root.next === null) {
    root = null
    return
  }
  root.val = root.next.val
  root.next = root.next.next
}
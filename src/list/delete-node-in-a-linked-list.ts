// 删除链表中的节点
// https://leetcode.cn/problems/delete-node-in-a-linked-list/
// INLINE  ../../images/list/delete-node-in-a-linked-list.jpeg

import ListNode from "../lib/ListNode"

/**
 Do not return anything, modify it in-place instead.
 */
export function deleteNode (node: ListNode | null): void {
  if (node === null) {
    return
  }
  if (node.next === null) {
    node = null
    return
  }
  node.val = node.next.val
  node.next = node.next.next
}
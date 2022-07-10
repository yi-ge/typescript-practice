// 删除链表中的节点
// https://leetcode.cn/problems/delete-node-in-a-linked-list/
// INLINE  ../../images/list/delete-node-in-a-linked-list.jpeg

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

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
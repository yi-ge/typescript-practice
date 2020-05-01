/**
 * 合并俩链表
 * @param {ListNode[]} left
 * @param {ListNode[]} right
 */
export const merge = (left, right) => {
  const dummyHead = {}
  let current = dummyHead
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      if (left.val !== null) {
        current.next = left
        current = current.next
      }
      left = left.next
    } else {
      if (right.val !== null) {
        current.next = right
        current = current.next
      }
      right = right.next
    }
  }

  if (left === null) {
    current.next = right
  } else {
    current.next = left
  }

  return dummyHead.next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export const mergeKLists = function (lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) return merge(lists[0], lists[1])

  // 归并排序，见 src/array/reverse-pairs.js
  const mid = lists.length >> 1

  const left = []
  for (let n = 0; n < mid; n++) {
    left[n] = lists[n]
  }

  const right = []
  for (let n = 0, i = mid; i < lists.length; n++, i++) {
    right[n] = lists[i]
  }

  return merge(mergeKLists(left), mergeKLists(right))
}

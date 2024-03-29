import ListNode from "../lib/ListNode"

export const mergeTwoLists = function (l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // src/list/merge-k-sorted-lists.ts 中已经写过了
  const dummyHead = new ListNode()
  let current = dummyHead
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      if (l1.val !== null) {
        current.next = l1
        current = current.next
      }

      l1 = l1.next
    } else {
      if (l2.val !== null) {
        current.next = l2
        current = current.next
      }

      l2 = l2.next
    }
  }

  if (l1 === null) {
    current.next = l2
  } else {
    current.next = l1
  }

  return dummyHead.next
}

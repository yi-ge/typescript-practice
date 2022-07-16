import ListNode from "../lib/ListNode"

export function swapPairs (head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let prev = head.next
  let next = prev.next

  prev.next = head
  head.next = swapPairs(next)

  return prev
}
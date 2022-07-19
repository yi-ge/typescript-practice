import ListNode from '../lib/ListNode'

// export const hasCycle = function (head: ListNode | null): boolean {
//   const set = new Set()
//   let current = head
//   while (current && current.next !== null) {
//     if (set.has(current)) {
//       return true
//     }
//     set.add(current)
//     current = current.next
//   }
//   return false
// }

export const hasCycle = function (head: ListNode | null): boolean {
  let slow = head
  let fast = head?.next
  while (slow?.next && fast?.next?.next) {
    if (fast.next === slow || slow === fast) return true
    slow = slow.next
    fast = fast.next.next
  }
  return false
}



import { hasCycle } from '../../src/list/linked-list-cycle'

function ListNode (val) {
  this.val = val
  this.next = null
}

const arrToList = (arr) => {
  const head = new ListNode(arr[0])
  let current = head
  for (let n = 1, len = arr.length; n < len; n++) {
    current.next = new ListNode(arr[n])
    current = current.next
  }

  return head
}

test('环形链表', () => {
  const list = arrToList([1, 2, 3])
  list.next.next.next = list
  expect(hasCycle(list)).toBe(true)
  expect(hasCycle(arrToList([1, 2, 3]))).toBe(false)
})

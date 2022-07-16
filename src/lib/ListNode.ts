export default class ListNode {
  val: number
  next: ListNode | null
  constructor (val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export const arrToList = (arr: number[]): ListNode | null => {
  if (!arr[0]) return null
  const head = new ListNode(arr[0])
  let current = head
  for (let n = 1, len = arr.length; n < len; n++) {
    current.next = new ListNode(arr[n])
    current = current.next
  }

  return head
}

export const listToArr = (list: ListNode | null): number[] => {
  const arr: number[] = []
  while (list !== null) {
    arr.push(list.val)
    list = list.next
  }

  return arr
}

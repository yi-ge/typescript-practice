export default class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

export const arrToList = (arr) => {
  const head = new ListNode(arr[0])
  let current = head
  for (let n = 1, len = arr.length; n < len; n++) {
    current.next = new ListNode(arr[n])
    current = current.next
  }

  return head
}

export const listToArr = (list) => {
  const arr = []
  while (list) {
    arr.push(list.val)
    list = list.next
  }

  return arr
}

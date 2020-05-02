import { sortList } from '../../src/list/sort-list'

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

test('链表排序', () => {
  const source = [4, 2, 1, 3]
  expect(sortList(arrToList(source))).toEqual(arrToList(source.sort((a, b) => a - b)))

  const source2 = [-1, 5, 3, 4, 0]
  expect(sortList(arrToList(source2))).toEqual(arrToList(source2.sort((a, b) => a - b)))

  const source3 = [1, 3, 2, null]
  expect(sortList(arrToList(source3))).toEqual(arrToList([1, 2, 3]))

  const source4 = [1, 7, 2, 6, null]
  expect(sortList(arrToList(source4))).toEqual(arrToList([1, 2, 6, 7]))
})

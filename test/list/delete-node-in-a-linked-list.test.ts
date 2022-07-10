import { deleteNode } from '../../src/list/delete-node-in-a-linked-list'
import { arrToList } from './ListNode'

test('删除链表中的节点', () => {
  // 示例 1：
  // 输入：head = [4,5,1,9], node = 5
  // 输出：[4,1,9]
  // 解释：指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9
  const source1 = arrToList([4, 5, 1, 9])
  const source2 = arrToList([4, 1, 9])
  deleteNode(source1.next)
  expect(source1).toEqual(source2)

  // 示例 2：
  // 输入：head = [4,5,1,9], node = 1
  // 输出：[4,5,9]
  // 解释：指定链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9
  const source3 = arrToList([4, 5, 1, 9])
  const source4 = arrToList([4, 5, 9])
  deleteNode(source3.next.next)
  expect(source3).toEqual(source4)
})
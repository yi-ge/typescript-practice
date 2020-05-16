/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export const reverseKGroup = function (head, k) {
  // 《K个一组翻转链表》 https://www.wyr.me/post/622
  let sum = 0 // 记录进行的结点个数
  let start = head // 记录每次翻转的第一个元素
  let res = head // 返回值：如果进行过翻转，则为第一次翻转的最后一个结点
  const queue = [] // 使用队列，方便连接上一次翻转的链表，最大长度为2
  while (head) { // 遍历一次链表
    if (++sum === k) { // 如果经过了k个结点，则翻转从start到head的一段结点
      const headNext = head.next
      queue.push(start) // 计入队列
      let next = head.next
      for (let i = 0; i < sum - 1; i++) { // 翻转结点
        const tmp = start.next
        start.next = next
        next = start
        start = tmp
      }

      start.next = next // 最后一个结点

      if (queue.length === 1) { // 判断是否为第一次翻转
        res = start
      } else {
        const la = queue.shift() // 连接上一次翻转的链表
        la.next = head
      }
      sum = 0 // 重置计数
      start = headNext
      head = headNext
    } else {
      head = head.next
    }
  }

  return res
}

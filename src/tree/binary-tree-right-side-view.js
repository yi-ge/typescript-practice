/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const rightSideView = function (root) {
  if (!root) return []
  const queue = [root] // 队列 把树顶加入队列
  const arr = [] // 用来存储每层最后个元素值
  while (queue.length > 0) {
    let len = queue.length
    while (len) {
      const node = queue.shift() // 取出队列第一个元素
      if (len === 1) arr.push(node.val) // 当是 当前一层的最后一个元素时，把值加入arr
      if (node.left) queue.push(node.left) // 继续往队列添加元素
      if (node.right) queue.push(node.right)
      len--
    }
  }

  return arr
}

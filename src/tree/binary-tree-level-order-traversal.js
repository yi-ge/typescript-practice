/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder = function (root) {
  const res = []
  const queue = [root]
  while (queue.length) { // BFS
    const tmp = []
    const leave = queue.length // 记录这一层有几个
    for (let i = 0; i < leave; i++) { // 一次性把固定个数的队列执行完
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      tmp.push(node.val)
    }
    res.push(tmp)
  }

  return res
}

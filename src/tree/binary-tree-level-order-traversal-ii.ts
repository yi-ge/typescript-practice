import { TreeNode } from '../lib/TreeNode'

export const levelOrder = function (root: TreeNode | null) {
  const res = []
  const queue = [root]
  while (queue.length) { // BFS
    const tmp = []
    const leave = queue.length // 记录这一层有几个
    for (let i = 0; i < leave; i++) { // 一次性把固定个数的队列执行完
      const node = queue.shift()
      if (node && node.left) queue.push(node.left)
      if (node && node.right) queue.push(node.right)
      if (node) tmp.push(node.val)
    }
    if (tmp.length) res.unshift(tmp)
  }

  return res
}

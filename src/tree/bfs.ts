import { TreeNode } from "../lib/TreeNode"

export const bfs = (node: TreeNode): number[] => {
  const res = []
  const queue = [] // 队列
  queue.push(node)
  while (queue.length > 0) {
    node = queue.shift() as TreeNode // 逻辑上此处一定存在值
    res.push(node.val)

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }
  }
  return res
}
// 前序遍历：根左右
// 中序遍历：左根右

import { TreeNode } from "../lib/TreeNode"

// 前序遍历知道根、中序遍历知道左边长度。

export const buildTree = function (preorder: number[], inorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null
  const root = new TreeNode(preorder[0])
  const index = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  return root
}

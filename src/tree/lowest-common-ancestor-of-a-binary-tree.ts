import { TreeNode } from "../lib/TreeNode"

export const lowestCommonAncestor = function (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if ((left === p && right === q) || (left === q && right === p)) return root
  return left || right
}

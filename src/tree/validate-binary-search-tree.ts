import { TreeNode } from "../lib/TreeNode"

export const isValidBST = function (root: TreeNode | null, lower = -Infinity, upper = Infinity): boolean {
  if (root === null) return true
  if (root.val <= lower || root.val >= upper) return false
  return isValidBST(root.left, lower, root.val) && isValidBST(root.right, root.val, upper)
}

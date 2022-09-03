import { TreeNode } from "../lib/TreeNode"

export const isSubtree = function (s: TreeNode | null, t: TreeNode | null): boolean {
  if (!s && t) {
    return false
  }

  const linkNode = function (node: TreeNode | null, target: TreeNode | null): boolean {
    if ((!node && target) || (node && !target)) return false
    if (!node && !target) return true

    return node?.val === target?.val ? linkNode(node!.left, target!.left) && linkNode(node!.right, target!.right) : false
  }

  return linkNode(s, t) || isSubtree(s!.left, t) || isSubtree(s!.right, t)
}

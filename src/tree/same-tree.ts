// 相同的树
// https://leetcode.cn/problems/same-tree/
// INLINE  ../../images/tree/same-tree.jpeg


// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

export function isSameTree (p: TreeNode | null, q: TreeNode | null): boolean {
  if ((p === null || q === null) && p !== q) {
    return false
  }

  if (p?.val !== q?.val) {
    return false
  }

  if ((p?.left || q?.right) && !isSameTree(p?.left || null, q?.left || null)) return false
  if ((p?.right || q?.right) && !isSameTree(p?.right || null, q?.right || null)) return false

  return true
}
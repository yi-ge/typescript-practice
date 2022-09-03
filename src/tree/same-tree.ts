// 相同的树
// https://leetcode.cn/problems/same-tree/
// INLINE  ../../images/tree/same-tree.jpeg

import { TreeNode } from "../lib/TreeNode"

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
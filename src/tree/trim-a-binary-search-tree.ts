// 修剪二叉搜索树
// https://leetcode.cn/problems/trim-a-binary-search-tree
// INLINE  ../../images/tree/trim-a-binary-search-tree.jpeg
// 解题思路：递归

import { TreeNode } from "../lib/TreeNode"

export function trimBST (root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (root === null) {
    return null
  }

  if (root.val < low) {
    return trimBST(root.right, low, high)
  } else if (root.val > high) {
    return trimBST(root.left, low, high)
  } else {
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    return root
  }
}
/**
 * Definition for a binary tree node.
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

// 前序遍历：根左右
// 中序遍历：左根右

// 前序遍历知道根、中序遍历知道左边长度。

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
export const buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null
  const root = new TreeNode(preorder[0])
  const index = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  return root
}

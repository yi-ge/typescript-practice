/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBST = function (root, lower = -Infinity, upper = Infinity) {
  if (root === null) return true
  if (root.val <= lower || root.val >= upper) return false
  return isValidBST(root.left, lower, root.val) && isValidBST(root.right, root.val, upper)
}

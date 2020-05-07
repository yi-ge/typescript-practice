/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
export const isSubtree = function (s, t) {
  if (!s && t) {
    return false
  }

  const linkNode = function (node, target) {
    if ((!node && target) || (node && !target)) return false
    if (!node && !target) return true

    return node.val === target.val ? linkNode(node.left, target.left) && linkNode(node.right, target.right) : false
  }

  return linkNode(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
}

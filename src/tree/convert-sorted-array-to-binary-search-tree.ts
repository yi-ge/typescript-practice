import { TreeNode } from "../lib/TreeNode"

export const sortedArrayToBST = function (nums: number[]): TreeNode | null {
  if (!nums.length) return null

  const createTree = (left: number, right: number): TreeNode | null => {
    if (left > right) return null
    const mid = Math.floor((left + right) / 2)
    const root = new TreeNode(nums[mid])
    root.left = createTree(left, mid - 1)
    root.right = createTree(mid + 1, right)
    return root
  }

  return createTree(0, nums.length - 1)
}

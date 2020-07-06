import TreeNode from '../../test/tree/TreeNode'
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export const sortedArrayToBST = function (nums) {
  if (!nums.length) return null

  const creatTree = (left, right) => {
    if (left > right) return null
    const mid = Math.floor((left + right) / 2)
    const root = new TreeNode(nums[mid])
    root.left = creatTree(left, mid - 1)
    root.right = creatTree(mid + 1, right)
    return root
  }

  return creatTree(0, nums.length - 1)
}

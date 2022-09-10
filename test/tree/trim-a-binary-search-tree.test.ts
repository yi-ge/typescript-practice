import { trimBST } from '../../src/tree/trim-a-binary-search-tree'
import Tree from '../../src/tree/Tree'

test('修剪二叉搜索树', () => {
  // 示例 1：
  // 输入：root = [1,0,2], low = 1, high = 2
  // 输出：[1,null,2]
  expect(trimBST(Tree.arrToTree([1, 0, 2]), 1, 2)).toEqual(Tree.arrToTree([1, null, 2]))

  // 示例 2：
  // 输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
  // 输出：[3,2,null,1]
  expect(trimBST(Tree.arrToTree([3, 0, 4, null, 2, null, null, 1]), 1, 3)).toEqual(Tree.arrToTree([3, 2, null, 1]))
})
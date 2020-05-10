import { lowestCommonAncestor } from '../../src/tree/lowest-common-ancestor-of-a-binary-tree'
import Tree from './Tree'

test('二叉树的最近公共祖先', () => {
  const head = Tree.arrToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  expect(lowestCommonAncestor(head, head.left, head.right)).toEqual(head)
  expect(lowestCommonAncestor(head, head.left, head.left.right.right)).toEqual(head.left)
})

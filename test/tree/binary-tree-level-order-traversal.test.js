import { levelOrder } from '../../src/tree/binary-tree-level-order-traversal'
import Tree from './Tree.js'

test('二叉树的层序遍历', () => {
  const source = [3, 9, 20, null, null, 15, 7]
  expect(levelOrder(Tree.arrToTree(source))).toEqual([
    [3],
    [9, 20],
    [15, 7]
  ])
})

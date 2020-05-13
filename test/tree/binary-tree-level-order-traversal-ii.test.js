import { levelOrder } from '../../src/tree/binary-tree-level-order-traversal-ii'
import Tree from './Tree.js'

test('二叉树的层序遍历 II', () => {
  const source = [3, 9, 20, null, null, 15, 7]
  expect(levelOrder(Tree.arrToTree(source))).toEqual([
    [15, 7],
    [9, 20],
    [3]
  ])

  const source1 = []
  expect(levelOrder(Tree.arrToTree(source1))).toEqual([])
})

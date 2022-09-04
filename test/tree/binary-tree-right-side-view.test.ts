import { rightSideView } from '../../src/tree/binary-tree-right-side-view'
import Tree from '../../src/tree/Tree'

test('二叉树的右视图', () => {
  const arr = [1, 2, 3, null, 5, null, 4]

  expect(rightSideView(Tree.arrToTree(arr))).toEqual([1, 3, 4])
  expect(rightSideView(Tree.arrToTree([]))).toEqual([])
})

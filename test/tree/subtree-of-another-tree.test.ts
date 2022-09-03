import { isSubtree } from '../../src/tree/subtree-of-another-tree'
import Tree from '../../src/tree/Tree'

test('另一个树的子树', () => {
  expect(isSubtree(Tree.arrToTree([3, 4, 5, 1, 2]), Tree.arrToTree([4, 1, 2]))).toBe(true)
  expect(isSubtree(Tree.arrToTree([3, 4, 5, 1, 2, null, null, null, null, 0]), Tree.arrToTree([4, 1, 2]))).toBe(false)
})

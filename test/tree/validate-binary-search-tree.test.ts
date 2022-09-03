import { isValidBST } from '../../src/tree/validate-binary-search-tree'
import Tree from '../../src/tree/Tree'

test('验证二叉搜索树', () => {
  expect(isValidBST(Tree.arrToTree([1, 1]))).toBe(false)
  expect(isValidBST(Tree.arrToTree([2, 1, 3]))).toBe(true)
  expect(isValidBST(Tree.arrToTree([5, 1, 4, null, null, 3, 6]))).toBe(false)
  expect(isValidBST(Tree.arrToTree([-1]))).toBe(true)
  expect(isValidBST(Tree.arrToTree([2, 1, 4, null, null, 3, 5]))).toBe(true)
  expect(isValidBST(null)).toBe(true)
  expect(isValidBST(Tree.arrToTree([10, 5, 15, null, null, 6, 20]))).toBe(false)
})

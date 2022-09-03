import { buildTree } from '../../src/tree/construct-binary-tree-from-preorder-and-inorder-traversal'

test('从前序与中序遍历序列构造二叉树', () => {
  expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual({ left: { left: null, right: null, val: 9 }, right: { left: { left: null, right: null, val: 15 }, right: { left: null, right: null, val: 7 }, val: 20 }, val: 3 })
})

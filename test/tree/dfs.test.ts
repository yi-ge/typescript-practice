import { preorderCycle, inorderCycle, postorderCycle } from './../../src/tree/dfs'
import { preorder, inorder, postorder } from '../../src/tree/dfs'
import { TreeNode } from '../../src/lib/TreeNode'

// * 为了方便查看整个Tree的定义方式。建议通过常规方法创建整棵树
const tree: TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: null
  }
}

describe('二叉树深度优先遍历', () => {
  test('前序遍历递归', () => {
    expect(preorder(tree)).toEqual([1, 2, 4, 5, 3, 6])
  })

  test('中序遍历递归', () => {
    expect(inorder(tree)).toEqual([4, 2, 5, 1, 6, 3])
  })

  test('后序遍历递归', () => {
    expect(postorder(tree)).toEqual([4, 5, 2, 6, 3, 1])
  })

  test('前序遍历循环法', () => {
    expect(preorderCycle(tree)).toEqual([1, 2, 4, 5, 3, 6])
  })

  test('中序遍历循环法', () => {
    expect(inorderCycle(tree)).toEqual([4, 2, 5, 1, 6, 3])
  })

  test('后序遍历循环法', () => {
    expect(postorderCycle(tree)).toEqual([4, 5, 2, 6, 3, 1])
  })
})
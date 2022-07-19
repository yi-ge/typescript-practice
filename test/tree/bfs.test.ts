import { bfs } from '../../src/tree/bfs'
import { TreeNode } from '../../src/tree/TreeNode'

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

test('二叉树广度优先遍历', () => {
  expect(bfs(tree)).toEqual([1, 2, 3, 4, 5, 6])
})
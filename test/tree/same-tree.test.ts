import { isSameTree } from '../../src/tree/same-tree'
import Tree from './Tree'

test('相同的树', () => {
  // 示例 1：
  // 输入：p = [1,2,3], q = [1,2,3]
  // 输出：true
  expect(isSameTree(Tree.arrToTree([1, 2, 3]), Tree.arrToTree([1, 2, 3]))).toBeTruthy()

  // 示例 2：
  // 输入：p = [1,2], q = [1,null,2]
  // 输出：false
  expect(isSameTree(Tree.arrToTree([1, 2]), Tree.arrToTree([1, null, 2]))).toBeFalsy()

  // 示例 3：
  // 输入：p = [1,2,1], q = [1,1,2]
  // 输出：false
  expect(isSameTree(Tree.arrToTree([1, 2, 1]), Tree.arrToTree([1, 1, 2]))).toBeFalsy()
})
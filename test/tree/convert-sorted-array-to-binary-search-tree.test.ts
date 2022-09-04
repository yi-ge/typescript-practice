import { sortedArrayToBST } from '../../src/tree/convert-sorted-array-to-binary-search-tree'

test('将有序数组转换为二叉搜索树', () => {
  expect(sortedArrayToBST([])).toEqual(null)
  expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual({ left: { left: null, right: { left: null, right: null, val: -3 }, val: -10 }, right: { left: null, right: { left: null, right: null, val: 9 }, val: 5 }, val: 0 })
})

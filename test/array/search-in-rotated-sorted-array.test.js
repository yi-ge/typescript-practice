import { search } from '../../src/array/search-in-rotated-sorted-array'

test('搜索旋转排序数组', () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
})

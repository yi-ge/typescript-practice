import { threeSum } from '../../src/math/3sum'

test('三数之和', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1]
  ])

  expect(threeSum([1, 0, 1, 2])).toEqual([])
  expect(threeSum([0, 1, 1])).toEqual([])
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]])
  expect(threeSum([6, -5, -6, -1, -2, 8, -1, 4, -10, -8, -10, -2, -4, -1, -8, -2, 8, 9, -5, -2, -8, -9, -3, -5])).toEqual([[-10, 4, 6], [-8, -1, 9], [-6, -3, 9], [-6, -2, 8], [-5, -4, 9], [-5, -3, 8], [-5, -1, 6], [-4, -2, 6], [-3, -1, 4], [-2, -2, 4]])
})

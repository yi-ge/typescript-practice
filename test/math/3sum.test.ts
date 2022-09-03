import { threeSum } from '../../src/math/3sum'

test('三数之和', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1]
  ])
})

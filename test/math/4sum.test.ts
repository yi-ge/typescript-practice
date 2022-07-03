import { fourSum, fourSum2 } from '../../src/math/4sum'

describe('四数之和', () => {
  test('方法1', () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]])
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]])
    expect(fourSum([1, 2, 3, 4], 10)).toEqual([[1, 2, 3, 4]])
    expect(fourSum([-2, -1, -1, 1, 1, 2, 2], 0)).toEqual([[-2, -1, 1, 2], [-1, -1, 1, 1]])
  })

  test('方法2', () => {
    expect(fourSum2([1, 0, -1, 0, -2, 2], 0)).toEqual([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]])
    expect(fourSum2([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]])
    expect(fourSum2([1, 2, 3, 4], 10)).toEqual([[1, 2, 3, 4]])
    expect(fourSum2([-2, -1, -1, 1, 1, 2, 2], 0)).toEqual([[-2, -1, 1, 2], [-1, -1, 1, 1]])
  })
})
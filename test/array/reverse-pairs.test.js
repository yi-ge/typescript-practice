import {
  reversePairs,
  merge,
  mergeSort,
  resetCount
} from '../../src/array/reverse-pairs'

describe('逆序对', () => {
  beforeEach(() => {
    resetCount()
  })

  test('归并排序 - 合并左右', () => {
    expect(merge([7], [5])).toEqual([5, 7])
    expect(merge([2], [3])).toEqual([2, 3])
    expect(merge([2, 3], [4, 5])).toEqual([2, 3, 4, 5])
  })

  test('归并排序', () => {
    expect(mergeSort([2, 4, 3, 5])).toEqual([2, 3, 4, 5])
    expect(mergeSort([2, 4, 3, 0])).toEqual([0, 2, 3, 4])
  })

  test('逆序对', () => {
    expect(reversePairs([7, 5, 6, 4])).toBe(5)
    expect(reversePairs([2, 4, 1, 3, 5])).toBe(3)
    expect(reversePairs([1, 2, 3, 4])).toBe(0)
  })
})

import { peakIndexInMountainArray, mountainSequence, findInMountainArray } from '../../src/array/find-in-mountain-array'

test('山脉数组的峰顶索引', () => {
  expect(peakIndexInMountainArray([])).toBe(0)
  expect(peakIndexInMountainArray([0, 1, 0])).toBe(1)
  expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1)
  expect(peakIndexInMountainArray([0, 1, 2, 0])).toBe(2)
  expect(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])).toBe(2)
})

test('山脉序列中的最大值', () => {
  expect(mountainSequence([1, 2, 4, 8, 6, 3])).toBe(8)
  expect(mountainSequence([10, 9, 8, 7])).toBe(10)
})


test('山脉数组中查找目标值', () => {
  class MountainArray {
    private arr: number[]
    constructor (arr: number[]) {
      this.arr = arr
    }

    get (index: number): number {
      return this.arr[index]
    }

    length (): number {
      return this.arr.length
    }
  };
  expect(findInMountainArray(3, new MountainArray([1, 2, 3, 4, 5, 3, 1]))).toBe(2)
  expect(findInMountainArray(3, new MountainArray([0, 1, 2, 4, 2, 1]))).toBe(-1)
  expect(findInMountainArray(3, new MountainArray([1, 2, 3, 4, 1, 0]))).toBe(2)
  expect(findInMountainArray(2, new MountainArray([1, 3, 4, 7, 4, 3, 2, 1, 0]))).toBe(6)
})

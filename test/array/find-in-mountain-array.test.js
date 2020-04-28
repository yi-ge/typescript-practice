import { peakIndexInMountainArray, mountainSequence, findInMountainArray } from '../../src/array/find-in-mountain-array'

test('山脉数组的峰顶索引', () => {
  expect(peakIndexInMountainArray([0, 1, 0])).toBe(1)
  expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1)
})

test('山脉序列中的最大值', () => {
  expect(mountainSequence([1, 2, 4, 8, 6, 3])).toBe(8)
  expect(mountainSequence([10, 9, 8, 7])).toBe(10)
})

function MountainArray (arr) {
  this.arr = arr
  // @param {number} index
  // @return {number}
  this.get = function (index) {
    return this.arr[index]
  }

  // @return {number}
  this.length = function () {
    return this.arr.length
  }
};

test('山脉数组中查找目标值', () => {
  expect(findInMountainArray(3, new MountainArray([1, 2, 3, 4, 5, 3, 1]))).toBe(2)
  expect(findInMountainArray(3, new MountainArray([0, 1, 2, 4, 2, 1]))).toBe(-1)
})

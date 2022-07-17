import bubbleSort from '../../src/array/bubble-sort'

test('bubbleSort', () => {
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3])
  expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3])
  expect(bubbleSort([])).toEqual([])
  expect(bubbleSort([3, 6, 4, 5, 6, 8])).toEqual([3, 4, 5, 6, 6, 8])
  expect(bubbleSort([1, 1, 1])).toEqual([1, 1, 1])
  expect(bubbleSort([-1, -10, 3])).toEqual([-10, -1, 3])
  expect(bubbleSort([7, 2, 8, 3, 6, 3])).toEqual([2, 3, 3, 6, 7, 8])
})

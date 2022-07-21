import selectSort from '../../src/array/select-sort'

test('selectSort', () => {
  expect(selectSort([1, 2, 3])).toEqual([1, 2, 3])
  expect(selectSort([3, 2, 1])).toEqual([1, 2, 3])
  expect(selectSort([])).toEqual([])
  expect(selectSort([3, 6, 4, 5, 6, 8])).toEqual([3, 4, 5, 6, 6, 8])
  expect(selectSort([1, 1, 1])).toEqual([1, 1, 1])
  expect(selectSort([-1, -10, 3])).toEqual([-10, -1, 3])
  expect(selectSort([7, 2, 8, 3, 6, 3])).toEqual([2, 3, 3, 6, 7, 8])
})

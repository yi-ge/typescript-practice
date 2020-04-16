import { merge } from '../../src/array/merge-intervals'

test('合并区间', () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]])
  expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]])
  expect(merge([[1, 3]])).toEqual([[1, 3]])
  expect(merge([[1, 4], [5, 6]])).toEqual([[1, 4], [5, 6]])
  expect(merge([[1, 4], [1, 4]])).toEqual([[1, 4]])
  expect(merge([[1, 4], [2, 3]])).toEqual([[1, 4]])
  expect(merge([[1, 4], [0, 2], [3, 5]])).toEqual([[0, 5]])
  expect(merge([[1, 3], [4, 6], [4, 7]])).toEqual([[1, 3], [4, 7]])
  expect(merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]])).toEqual([[1, 3], [4, 7]])
})

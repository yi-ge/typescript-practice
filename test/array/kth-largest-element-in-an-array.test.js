import findKthLargest from '../../src/array/kth-largest-element-in-an-array'

test('findKthLargest', () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5)
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4)
})

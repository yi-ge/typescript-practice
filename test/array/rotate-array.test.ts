import { rotate } from '../../src/array/rotate-array'

test('轮转数组', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  rotate(arr, 3)
  expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4])

  const arr2 = [1, 2]
  rotate(arr2, 3)
  expect(arr2).toEqual([2, 1])

  const arr3 = [1, 2, 3]
  rotate(arr3, 4)
  expect(arr3).toEqual([3, 1, 2])

  const arr4 = [1, 2]
  rotate(arr4, 5)
  expect(arr4).toEqual([2, 1])
})
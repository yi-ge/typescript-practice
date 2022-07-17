import { search } from '../../src/array/binary-search'

test('BinarySearch', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
  expect(search([1, 4, 4, 5, 7, 7, 8, 9, 9, 10], 1)).toEqual(0)
  expect(search([1, 2, 3, 3, 4, 5, 10], 3)).toEqual(2)
  expect(search([1, 2, 3, 3, 4, 5, 10], 6)).toEqual(-1)
})

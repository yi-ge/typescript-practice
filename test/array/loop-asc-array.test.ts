import loopAscArray from '../../src/array/loop-asc-array'

test('loopAscArray', () => {
  expect(loopAscArray([], 6)).toBe(false)
  expect(loopAscArray([6, 7, 0, 2, 3, 4, 5], 6)).toBe(true)
  expect(loopAscArray([6, 7, 0, 2, 3, 4, 5], 4)).toBe(true)
  expect(loopAscArray([7, 0, 2, 3], 7)).toBe(true)
  expect(loopAscArray([0, 3, 4, 6, 7], 0)).toBe(true)
  expect(loopAscArray([6, 7, 0, 3, 4], 0)).toBe(true)
  expect(loopAscArray([6, 7, 0, 3, 4], 5)).toBe(false)
  expect(loopAscArray([1, 2, 3, 4, 5], 6)).toBe(false)
  expect(loopAscArray([1, 2, 3, 4, 5], 1)).toBe(true)
  expect(loopAscArray([3, 4, 5, 1, 1, 2], 1)).toBe(true)
  expect(loopAscArray([3, 4, 5, 1, 1, 2], 6)).toBe(false)
  expect(loopAscArray([3, 4, 5, 1, 1, 2], 0)).toBe(false)
  expect(loopAscArray([1, 0, 1, 1, 1], 0)).toBe(true)
  expect(loopAscArray([1, 0, 1, 1, 1], 2)).toBe(false)
  expect(loopAscArray([3], 2)).toBe(false)
  expect(loopAscArray([2], 2)).toBe(true)
  expect(loopAscArray([1, 1, 1], 2)).toBe(false)
  expect(loopAscArray([1, 1, 1], 1)).toBe(true)
  expect(loopAscArray([1, 1, 1, 0], 1)).toBe(true)
  expect(loopAscArray([1, 1, 1, 0], 2)).toBe(false)
})

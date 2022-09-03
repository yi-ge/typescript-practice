import { maximalSquare } from '../../src/array/maximal-square'

test('最大正方形', () => {
  expect(maximalSquare([])).toBe(0)

  expect(maximalSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
  ])).toBe(4)

  expect(maximalSquare([
    [0, 0, 0],
    [1, 1, 1]
  ])).toBe(1)
})

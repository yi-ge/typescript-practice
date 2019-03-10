import { numIslands } from '../../src/array/number-of-islands'

test('岛屿的个数', () => {
  expect(numIslands([
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ])).toBe(3)

  expect(numIslands([
    [1, 1]
  ])).toBe(1)

  expect(numIslands([])).toBe(0)
})

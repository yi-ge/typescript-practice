import { updateMatrix } from '../../src/array/01-matrix'

test('01 矩阵', () => {
  expect(updateMatrix([])).toEqual([])

  expect(updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])

  expect(updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
  ])).toEqual([
    [0, 0, 0],
    [0, 1, 0],
    [1, 2, 1]
  ])

  expect(updateMatrix([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])

  expect(updateMatrix([
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1]
  ])).toEqual([
    [0, 1, 0, 1, 2],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1]
  ])
})

import { maximalRectangle } from '../../src/stack/maximal-rectangle'

test('maximalRectangle', () => {
  expect(maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])).toBe(6)

  expect(maximalRectangle([
    [1, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1]
  ])).toBe(6)

  expect(maximalRectangle([
    [true, true, false, false, true],
    [false, true, false, false, true],
    [false, false, true, true, true],
    [false, false, true, true, true],
    [false, false, false, false, true]
  ])).toBe(6)

  expect(maximalRectangle([
    [0, 0],
    [0, 0]
  ])).toBe(0)

  expect(maximalRectangle([['1']])).toBe(1)
  expect(maximalRectangle([['0', '1']])).toBe(1)
  expect(maximalRectangle([['1', '1']])).toBe(2)
  expect(maximalRectangle([['1', '1', '1', '1']])).toBe(4)
  expect(maximalRectangle([[1], [0], [1], [1], [1], [1], [0]])).toBe(4)
  expect(maximalRectangle([[1], [0], [1], [1], [1], [1], [1], [0]])).toBe(5)
  expect(maximalRectangle([['0', '1'], ['1', '0']])).toBe(1)
  expect(maximalRectangle([['0', '1'], ['0', '1']])).toBe(2)
  expect(maximalRectangle([['1', '0'], ['1', '0']])).toBe(2)
  expect(maximalRectangle([['0', '0', '0'], ['0', '0', '0'], ['1', '1', '1']])).toBe(3)
})

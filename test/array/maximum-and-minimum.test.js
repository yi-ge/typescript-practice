import { maxAndMin } from '../../src/array/maximum-and-minimum'

test('最大数和最小数', () => {
  expect(maxAndMin([
    [1, 2, 3],
    [4, 3, 2],
    [6, 4, 4]
  ])).toEqual([6, 1])

  expect(maxAndMin([])).toEqual([])
})

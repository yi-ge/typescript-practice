import { maxPoints } from '../../src/math/max-points-on-a-line'

test('直线上最多的点数', () => {
  expect(maxPoints([[1, 1], [2, 2], [3, 3]])).toBe(3)
  expect(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]])).toBe(4)
  expect(maxPoints([[0, 0]])).toBe(1)
})
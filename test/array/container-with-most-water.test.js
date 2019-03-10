import { maxArea } from '../../src/array/container-with-most-water'

test('盛最多水的容器', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
  expect(maxArea([1, 3, 2])).toBe(2)
  expect(maxArea([1, 3, 2, 2])).toBe(4)
})

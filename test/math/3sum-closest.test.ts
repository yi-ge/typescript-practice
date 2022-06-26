import { threeSumClosest } from '../../src/math/3sum-closest'

test('最接近的三数之和', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
  expect(threeSumClosest([0, 0, 0], 1)).toBe(0)
})
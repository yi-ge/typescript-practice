import { maximum } from '../../src/math/maximum-lcci'

test('最大数值', () => {
  expect(maximum(1, 2)).toBe(2)
  expect(maximum(108, 133)).toBe(133)
  expect(maximum(199, 133)).toBe(199)
  expect(maximum(2147483647, -2147483648)).toBe(2147483647)
})

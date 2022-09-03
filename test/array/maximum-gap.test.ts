import maximumGap from '../../src/array/maximum-gap'
import inData from './maximum-gap.test.data'

test('最大间距', () => {
  expect(maximumGap([0, 0])).toBe(0)
  expect(maximumGap([1, 1])).toBe(0)
  expect(maximumGap([1, 1, 1, 1])).toBe(0)
  expect(maximumGap([2, 2, 0])).toBe(2)
  expect(maximumGap([3, 6, 9, 1])).toBe(3)
  expect(maximumGap([10])).toBe(0)
  expect(maximumGap([13, 16, 19, 1])).toBe(12)
  expect(maximumGap([1, 3, 100])).toBe(97)
  expect(maximumGap(inData)).toBe(2147428092)
})

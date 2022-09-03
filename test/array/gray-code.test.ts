import grayCode from '../../src/array/gray-code'

test('grayCode', () => {
  expect(grayCode(1)).toEqual([0, 1])
  expect(grayCode(2)).toEqual([0, 1, 3, 2])
  expect(grayCode(0)).toEqual([0])
})

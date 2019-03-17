import firstMissingPrime from '../../src/array/first-missing-prime-number'

test('缺失的第一个素数', () => {
  expect(firstMissingPrime([3, 5, 7])).toBe(2)
  expect(firstMissingPrime([2, 3, 5, 7, 11, 13, 17, 23, 29])).toBe(19)
})

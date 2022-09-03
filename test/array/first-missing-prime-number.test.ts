import firstMissingPrime, { isPrinme } from '../../src/array/first-missing-prime-number'

test('是否是素数', () => {
  expect(isPrinme(0)).toBe(false)
  expect(isPrinme(1)).toBe(false)
  expect(isPrinme(3)).toBe(true)
  expect(isPrinme(5)).toBe(true)
  expect(isPrinme(7)).toBe(true)
  expect(isPrinme(6)).toBe(false)
})

test('缺失的第一个素数', () => {
  expect(firstMissingPrime([3, 5, 7])).toBe(2)
  expect(firstMissingPrime([2, 3, 5, 7, 11, 13, 17, 23, 29])).toBe(19)
})

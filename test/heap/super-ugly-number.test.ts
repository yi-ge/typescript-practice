import { getPrimes, nthSuperUglyNumber } from '../../src/heap/super-ugly-number'

test('计算质因数', () => {
  expect(getPrimes(6)).toEqual([2, 3])
  expect(getPrimes(4)).toEqual([2])
  expect(getPrimes(180)).toEqual([2, 3, 5])
})

test('超级丑数', () => {
  expect(nthSuperUglyNumber(12, [2, 7, 13, 19])).toBe(32)
  expect(nthSuperUglyNumber(800, [37, 43, 59, 61, 67, 71, 79, 83, 89, 97, 101, 103, 113, 127, 131, 157, 163, 167, 173, 179, 191, 193, 197, 199, 211, 229, 233, 239, 251, 257])).toBe(411811)
})

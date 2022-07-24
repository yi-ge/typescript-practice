import { singleNumbers } from '../../src/array/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof'

test('面试题56 - I. 数组中数字出现的次数', () => {
  expect(singleNumbers([4, 1, 4, 6]).some(i => [1, 6].includes(i))).toBe(true)
  expect(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]).some(i => [2, 10].includes(i))).toBe(true)
})

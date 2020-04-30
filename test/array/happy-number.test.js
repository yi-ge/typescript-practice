import { isHappy } from '../../src/array/happy-number'

test('快乐数', () => {
  expect(isHappy(19)).toBe(true)
  expect(isHappy(5)).toBe(false)
})

import { jump } from '../../src/array/jump-game-ii'

test('跳跃游戏II', () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(2)
  expect(jump([4, 3])).toBe(1)
})

import { findOrder } from '../../src/graphs/course-schedule-ii'

test('课程表 II', () => {
  expect(findOrder(2, [[1, 0]])).toEqual([0, 1])
  expect(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toEqual([0, 1, 2, 3])
})

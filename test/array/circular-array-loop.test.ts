import { circularArrayLoop } from '../../src/array/circular-array-loop'

test('circularArrayLoop', () => {
  expect(circularArrayLoop([0])).toEqual(false)
  expect(circularArrayLoop([2, -1, 1, 2, 2])).toEqual(true)
  expect(circularArrayLoop([-1, 2])).toEqual(false)
  expect(circularArrayLoop([-2, 1, -1, -2, -2])).toEqual(false)
})

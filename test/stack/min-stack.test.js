import { MinStack } from '../../src/stack/min-stack'

test('最小栈', () => {
  var obj = new MinStack()
  obj.push(1)
  obj.push(3)
  obj.push(2)
  obj.pop()
  var top = obj.top()
  var min = obj.getMin()
  expect(top).toBe(3)
  expect(min).toBe(1)
})

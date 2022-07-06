import { removeItem, putItem } from './../../src/lib/splice'

test('移除指定位置的元素', () => {
  const arr = [1, 2, 3, 4]
  const tmp = removeItem(arr, 1)
  const expectValue = [1, 3, 4]
  expect(tmp).toEqual(expectValue)
})

test('在指定位置添加元素', () => {
  const arr = [1, 3, 4]
  const tmp = putItem(arr, 1, 2)
  const expectValue = [1, 2, 3, 4]
  expect(tmp).toEqual(expectValue)
})
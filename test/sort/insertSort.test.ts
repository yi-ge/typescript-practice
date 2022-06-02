import { insertSort } from '../../src/sort/insertSort'
import { mergeSort } from '../../src/sort/mergeSort'

test('插入排序', () => {
  expect(insertSort([2, 6, 1, 4, 8, 4, 7, 8, 97, 3, 2])).toEqual(mergeSort([2, 6, 1, 4, 8, 4, 7, 8, 97, 3, 2]))

  const data = [
    [],
    [3],
    [2, 6, 1, 4, 8, 4, 7, 8, 97, 3, 2],
    [3, 5, 1, 4, 39, 4, 7, 8, 98, 3, 2]
  ]

  for (let i = 0; i < data.length; i++) {
    expect(insertSort(JSON.parse(JSON.stringify(data[i])))).toEqual(mergeSort(JSON.parse(JSON.stringify(data[i]))))
  }
})
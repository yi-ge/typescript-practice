import { wiggleSort } from '../../src/array/wiggle-sort-ii'

test('摆动排序', () => {
  const arr = [1, 5, 1, 1, 6, 4]
  wiggleSort(arr)
  console.log(arr)
  let isRight = true
  for (let i = 0; i < arr.length - 1; i = i + 2) {
    if (arr[i + 1] > arr[i] && (i - 1 <= 0 || arr[i] < arr[i - 1])) {
      continue
    } else {
      isRight = false
    }
  }

  expect(isRight).toBeTruthy()
})
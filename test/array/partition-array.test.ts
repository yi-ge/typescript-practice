import partitionArray from '../../src/array/partition-array'

test('loopAscArray', () => {
  expect(partitionArray([], 9)).toEqual(0)
  expect(partitionArray([7, 7, 9, 8, 6, 6, 8, 7, 9, 8, 6, 6], 10)).toEqual(12)
  expect(partitionArray([3, 2, 2, 1], 2)).toEqual(1)
})

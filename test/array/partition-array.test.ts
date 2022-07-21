import partitionArray from '../../src/array/partition-array'

test('loopAscArray', () => {
  expect(partitionArray([], 9)).toEqual(0)
  expect(partitionArray([3, 2, 2, 1], 2)).toEqual(1)
})

import sortArrayByParity from '../../src/array/sort-array-by-parity'

test('sortArrayByParity', () => {
  expect(sortArrayByParity([4, 2, 5, 7])).toEqual([2, 5, 4, 7])
})

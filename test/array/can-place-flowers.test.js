import canPlaceFlowers from '../../src/array/can-place-flowers'

test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toEqual(true)
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toEqual(false)
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toEqual(true)
})

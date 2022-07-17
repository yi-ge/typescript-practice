import canPlaceFlowers from '../../src/array/can-place-flowers'

test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy()
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy()
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBeTruthy()
})

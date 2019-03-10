import hasGroupsSizeX from '../../src/array/x-of-a-kind-in-a-deck-of-cards'

test('hasGroupsSizeX', () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toEqual(true)
  expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toEqual(false)
  expect(hasGroupsSizeX([1, 1, 2, 2, 2, 2])).toEqual(true)
  expect(hasGroupsSizeX([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,8,8,9,9,9,10,10,10])).toEqual(true)
})

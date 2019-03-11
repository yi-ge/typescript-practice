import removeDuplicates from '../../src/array/remove-duplicates-from-sorted-array'

test('removeDuplicates', () => {
  const nums = [1, 1, 2]
  expect(removeDuplicates(nums)).toBe(2)

  expect(nums).toEqual([1, 2])
})

test('removeDuplicates2', () => {
  const nums = [1, 2]
  expect(removeDuplicates(nums)).toBe(2)

  expect(nums).toEqual([1, 2])
})

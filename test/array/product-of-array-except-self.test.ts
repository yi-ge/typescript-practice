import { productExceptSelf } from '../../src/array/product-of-array-except-self'

test('除自身以外数组的乘积', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
})

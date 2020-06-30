import { addBinary } from '../../src/math/add-binary'

test('二进制求和', () => {
  expect(addBinary('11', '1')).toEqual('100')
  expect(addBinary('1010', '1011')).toEqual('10101')
})

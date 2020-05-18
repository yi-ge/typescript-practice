import { highestFrequency } from '../../src/array/highest-frequency-ip'

test('最高频率的IP', () => {
  expect(highestFrequency(['192.168.1.1', '192.118.2.1', '192.168.1.1'])).toEqual('192.168.1.1')
  expect(highestFrequency(['192.168.1.1', '192.118.2.1', '192.168.1.1', '192.118.2.1', '192.118.2.1'])).toEqual('192.118.2.1')
})

import { defangIPaddr } from '../../src/string/defanging-an-ip-address'

test('IP地址无效化', () => {
  expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1')
  expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0')
})

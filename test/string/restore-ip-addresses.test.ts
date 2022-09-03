import restoreIpAddresses from '../../src/string/restore-ip-addresses'

test('恢复IP地址', () => {
  expect(restoreIpAddresses('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
  expect(restoreIpAddresses('1116512311')).toEqual(['11.165.123.11', '111.65.123.11'])
  expect(restoreIpAddresses('00000')).toEqual([])
  expect(restoreIpAddresses('0000')).toEqual(['0.0.0.0'])
  expect(restoreIpAddresses('010010')).toEqual(['0.10.0.10', '0.100.1.0'])
})

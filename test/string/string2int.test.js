import { string2int } from '../../src/string/string2int'

test('实现string2int()函数', () => {
  // 测试:
  if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
      console.log('请勿使用parseInt()!')
    } else if (string2int.toString().indexOf('Number') !== -1) {
      console.log('请勿使用Number()!')
    } else {
      console.log('测试通过!')
    }
  } else {
    console.log('测试失败!')
  }

  expect(string2int('123')).toBe(123)
  expect(string2int('12300')).toBe(12300)
  expect(string2int('0')).toBe(0)

  // 注意，仅为提供面试思路，实现不严谨
})

import { reverseLeftWords } from '../../src/string/zuo-xuan-zhuan-zi-fu-chuan-lcof'

test('左旋转字符串', () => {
  expect(reverseLeftWords('abcdefg', 2)).toBe('cdefgab')
  expect(reverseLeftWords('lrloseumgh', 6)).toBe('umghlrlose')
})

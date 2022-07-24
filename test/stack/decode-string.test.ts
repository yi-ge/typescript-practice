import { decodeString } from '../../src/stack/decode-string'

test('字符串解码', () => {
  // s = "3[a]2[bc]", 返回 "aaabcbc".
  expect(decodeString('3[a]2[bc]')).toBe('aaabcbc')
  // s = "3[a2[c]]", 返回 "accaccacc".
  expect(decodeString('3[a2[c]]')).toBe('accaccacc')
  // s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
  expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef')
})

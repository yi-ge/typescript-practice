import { isPrefixOfWord } from '../../src/string/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence'

test('检查单词是否为句中其他单词的前缀', () => {
  expect(isPrefixOfWord('i love eating burger', 'burg')).toBe(4)
  expect(isPrefixOfWord('abc', 'd')).toBe(-1)
})

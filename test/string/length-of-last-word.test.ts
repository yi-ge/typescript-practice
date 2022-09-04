import { lengthOfLastWord } from '../../src/string/length-of-last-word'

test('最后一个单词的长度', () => {
  expect(lengthOfLastWord('b   a    ')).toBe(1)
  expect(lengthOfLastWord('')).toBe(0)
})

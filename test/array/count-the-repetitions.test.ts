import { includesInStr, getStrCopyByNum, getMaxRepetitions } from '../../src/array/count-the-repetitions'

test('判断从 s2 中删除某些字符是否可以变为 s1', () => {
  expect(includesInStr('abc', 'ab')).toBe(1)
  expect(includesInStr('acb', 'ab')).toBe(1)
  expect(includesInStr('ab', 'ab')).toBe(1)
  expect(includesInStr('ac', 'ab')).toBe(0)
  expect(includesInStr('aa', 'a')).toBe(2)
  expect(includesInStr('aaa', 'a')).toBe(3)
  expect(includesInStr('abcabc', 'abb')).toBe(1)
})

test('获取重复字符串', () => {
  expect(getStrCopyByNum('abc', 2)).toBe('abcabc')
  expect(getStrCopyByNum('abc', 3)).toBe('abcabcabc')
})

test('统计重复个数', () => {
  expect(getMaxRepetitions('abc', 4, 'ab', 2)).toBe(2)
  expect(getMaxRepetitions('acb', 4, 'ab', 2)).toBe(2)
  expect(getMaxRepetitions('abc', 4, 'abb', 2)).toBe(1)
  expect(getMaxRepetitions('aaa', 3, 'aa', 1)).toBe(4)
  expect(getMaxRepetitions('abccab', 4, 'abc', 2)).toBe(2)
})

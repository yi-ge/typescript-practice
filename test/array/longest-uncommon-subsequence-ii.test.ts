import { isSubsequence, findLUSlength } from '../../src/array/longest-uncommon-subsequence-ii'

describe('最长特殊序列 II', () => {
  test('判断字符串是不是另一个字符串的子序列', () => {
    expect(isSubsequence('abc', 'abcd')).toBeTruthy()
    expect(isSubsequence('abc', 'def')).toBeFalsy()
    expect(isSubsequence('abcd', 'efg')).toBeFalsy()
  })

  test('最长特殊序列 II', () => {
    expect(findLUSlength(["aba","cdc","eae"])).toBe(3)
    expect(findLUSlength(["aaa","aaa","aa"])).toBe(-1)
  })
})

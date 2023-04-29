import { equalFrequency } from '../../src/map/remove-letter-to-equalize-frequency'

test('删除字符使频率相同', () => {
  // 示例 1：
  // 输入：word = "abcc"
  // 输出：true
  // 解释：选择下标 3 并删除该字母，word 变成 "abc" 且每个字母出现频率都为 1 。
  const word = 'abcc'
  expect(equalFrequency(word)).toBeTruthy()

  // 示例 2：
  // 输入：word = "aazz"
  // 输出：false
  // 解释：我们必须删除一个字母，所以要么 "a" 的频率变为 1 且 "z" 的频率为 2 ，要么两个字母频率反过来。所以不可能让剩余所有字母出现频率相同。
  const word2 = 'aazz'
  expect(equalFrequency(word2)).toBeFalsy()
})
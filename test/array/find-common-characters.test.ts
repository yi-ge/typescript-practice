import { commonChars } from '../../src/array/find-common-characters'

describe('查找常用字符', () => {
  test('查找常用字符', () => {
    expect(commonChars(['bella', 'label', 'roller']).sort()).toEqual(['e', 'l', 'l'].sort())
    expect(commonChars(['cool', 'lock', 'cook']).sort()).toEqual(['c', 'o'].sort())
    expect(commonChars(['acabcddd', 'bcbdbcbd', 'baddbadb', 'cbdddcac', 'aacbcccd', 'ccccddda', 'cababaab', 'addcaccd']).sort()).toEqual([].sort())
  })
})

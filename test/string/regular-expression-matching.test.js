import regularExpressionMatching from '../../src/string/regular-expression-matching'

test('regularExpressionMatching', () => {
  expect(regularExpressionMatching('aa', 'a')).toEqual(false)
  expect(regularExpressionMatching('aaa', 'aa')).toEqual(false)
  expect(regularExpressionMatching('aa', 'aa')).toEqual(true)
  expect(regularExpressionMatching('aa', 'a*')).toEqual(true)
  expect(regularExpressionMatching('ab', '.*')).toEqual(true)
  expect(regularExpressionMatching('aab', 'c*a*b')).toEqual(true)
  expect(regularExpressionMatching('mississippi', 'mis*is*p*.')).toEqual(false)
  expect(regularExpressionMatching('mississippi', 'mis*is*ip*.')).toEqual(true)
})

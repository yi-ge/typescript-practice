import { generateParenthesis } from '../../src/string/generate-parentheses'

test('括号生成', () => {
  expect(generateParenthesis(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"])
  expect(generateParenthesis(1)).toEqual(["()"])
})
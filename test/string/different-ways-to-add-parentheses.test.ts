import { diffWaysToCompute } from '../../src/string/different-ways-to-add-parentheses'

test('为运算表达式设计优先级', () => {
  // 示例 1：
  // 输入：expression = "2-1-1"
  // 输出：[0,2]
  // 解释：
  // ((2-1)-1) = 0
  // (2-(1-1)) = 2

  // 示例 2：
  // 输入：expression = "2*3-4*5"
  // 输出：[-34,-14,-10,-10,10]
  // 解释：
  // (2*(3-(4*5))) = -34
  // ((2*3)-(4*5)) = -14
  // ((2*(3-4))*5) = -10
  // (2*((3-4)*5)) = -10
  // (((2*3)-4)*5) = 10

  expect(diffWaysToCompute('2-1-1')).toEqual([2, 0])
  expect(diffWaysToCompute('2*3-4*5')).toEqual([-34, -10, -14, -10, 10])
})
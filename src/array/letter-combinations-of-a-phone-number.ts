// LeetCode 17. 电话号码的字母组合 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// LintCode 425. 电话号码的字母组合 https://www.lintcode.com/problem/letter-combinations-of-a-phone-number/description

export default function letterCombinations (digits: string): string[] {
  const map = new Map<string, string>([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ])

  const nums = digits.split('')

  if (nums.length === 0) return []

  const code: string[] = []

  nums.forEach(item => {
    if (map.get(item)) {
      code.push(map.get(item) as string)
    }
  })

  const comb = (arr: any[]): string[] => {
    const tmp = []
    for (let n = 0; n < arr[0].length; n++) {
      for (let i = 0; i < arr[1].length; i++) {
        tmp.push(`${arr[0][n]}${arr[1][i]}`)
      }
    }
    arr.splice(0, 2, tmp)

    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }

  return code.length > 1 ? comb(code) : code[0].split('')
}

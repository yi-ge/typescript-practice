function backtracking (n: number, res: string[], path: string, leftCount: number, rightCount: number) {
  if (path.length === 2 * n) return res.push(path)

  if (leftCount < n) {
    backtracking(n, res, path + '(', leftCount + 1, rightCount)
  }

  if (rightCount < leftCount) {
    backtracking(n, res, path + ')', leftCount, rightCount + 1)
  }
}

export function generateParenthesis (n: number): string[] {
  const res: string[] = []
  backtracking(n, res, "", 0, 0)
  return res
}
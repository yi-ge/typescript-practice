// 可能的二分法
// https://leetcode.cn/problems/possible-bipartition
// INLINE  ../../images/graphs/possible-bipartition.jpeg
// 学习自： https://leetcode.cn/problems/possible-bipartition/solution/by-da2zling-pikeqil-jjhc/

export function possibleBipartition (n: number, dislikes: number[][]): boolean {
  // 用于记录是否已经染色
  const colors: number[] = new Array(n + 1).fill(0)
  // 用于记录每个人讨厌的人
  const dislikeMap = new Map()

  for (const [first, second] of dislikes) {
    const firstDislike = dislikeMap.get(first) || []
    const secondDislike = dislikeMap.get(second) || []
    dislikeMap.set(first, (firstDislike.push(second), firstDislike))
    dislikeMap.set(second, (secondDislike.push(first), secondDislike))
  }

  // 深度优先进行染色
  const dfs = (curPerson: number, curColor: number) => {
    // 染色
    colors[curPerson] = curColor
    // 获取讨厌的人
    const curPersonDislike = dislikeMap.get(curPerson) || []

    for (const dis of curPersonDislike) {
      // 如果讨厌的人已经染色了，并且颜色和自己一样，那么直接返回false
      if (colors[dis] !== 0 && colors[dis] === colors[curPerson]) return false
      // 如果当前还没有进行染色，那么递归调用dfs
      // curColor ^ 3 实际上就是 把 1 变 2  把 2 变 1
      if (colors[dis] === 0 && !dfs(dis, curColor ^ 3)) return false
    }
    return true
  }

  for (let i = 1; i <= n; i++) {
    // 当前还未染色，并且染色过程发生冲突，直接返回false
    if (colors[i] === 0 && !dfs(i, 1)) {
      return false
    }
  }

  return true
}
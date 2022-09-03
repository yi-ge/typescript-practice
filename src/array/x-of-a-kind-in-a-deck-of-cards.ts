// LeetCode 914. 卡牌分组 https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

// 分组问题，最大公约数

const gcd = (a: number, b: number): number => {
  if (Number(b) === 0) {
    return Number(a)
  } else {
    return gcd(b, a % b)
  }
}

export default function hasGroupsSizeX (deck: number[]): boolean {
  const str = deck.sort((a, b) => a - b).join(',') + ','

  const group = str.match(/(\d+,)\1+|\d+,/g)

  while (group && group.length > 1) {
    const a = group.shift()!.split(',').length - 1
    const b = group.shift()!.split(',').length - 1

    const v = gcd(a, b)

    if (v === 1) {
      return false
    } else {
      group.unshift('0,'.repeat(v))
    }
  }

  return group?.length ? group[0].split(',').length > 2 : false
}

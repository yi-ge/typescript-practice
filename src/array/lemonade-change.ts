export const lemonadeChange = function (bills: number[]): boolean {
  const map = new Map()

  while (bills.length) {
    const money = bills.shift() as number

    if (money === 5) {
      map.set(5, (map.get(5) || 0) + 1)
    } else {
      let change = money - 5
      while (change !== 0 && change - 10 > 0 && map.get(10) > 0) {
        map.set(10, map.get(10) - 1)
        change -= 10
      }

      while (change !== 0 && map.get(5) > 0) {
        map.set(5, map.get(5) - 1)
        change -= 5
      }

      if (change !== 0) return false
      map.set(money, (map.get(money) || 0) + 1)
    }
  }

  return true
}

export const maxProfit = function (prices: number[]): number {
  let profit = 0
  for (let n = 1; n < prices.length; n++) {
    if (prices[n] > prices[n - 1]) profit += prices[n] - prices[n - 1]
  }

  return profit
}


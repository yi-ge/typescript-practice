/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0
  for (let n = 1; n < prices.length; n++) {
    if (prices[n] > prices[n - 1]) profit += prices[n] - prices[n - 1]
  }

  return profit
};

export default maxProfit;
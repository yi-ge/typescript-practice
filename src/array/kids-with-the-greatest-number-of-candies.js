/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
export const kidsWithCandies = (candies, extraCandies) => {
  return candies.map(n => n + extraCandies >= Math.max(...candies))
}

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
export const kidsWithCandies = (candies:number[], extraCandies:number):boolean[] => {
  return candies.map(n => n + extraCandies >= Math.max(...candies))
}

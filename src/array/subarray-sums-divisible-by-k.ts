/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
export const subarraysDivByK = function (A:number[], K:number):number {
  const map = new Map([[0, 1]]); let sum = 0; let count = 0

  A.forEach(n => {
    sum = (sum + n) % K; sum = sum < 0 ? sum + K : sum
    const temp = map.get(sum) || 0
    count += temp
    map.set(sum, temp + 1)
  })

  return count
}

export const largestNumber = function (nums: number[]): string {
  return nums.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`)).join('').replace(/^0+/, '') || '0'
}

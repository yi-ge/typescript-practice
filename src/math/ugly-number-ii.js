/**
 * @param n: An integer
 * @return: return a  integer as description.
 */
export const nthUglyNumber = function (n) {
  const res = [1]
  let inx2 = 0
  let inx3 = 0
  let inx5 = 0

  for (let i = 1; i < n; i++) {
    const temp2 = res[inx2] * 2
    const temp3 = res[inx3] * 3
    const temp5 = res[inx5] * 5
    const min = Math.min(temp2, temp3, temp5)
    if (min === temp2) inx2++
    if (min === temp3) inx3++
    if (min === temp5) inx5++

    res.push(min)
  }

  return res[n - 1] || 0
}

// 思路：
// 一开始，丑数只有{1}，1可以同2，3，5相乘，取最小的1×2=2添加到丑数序列中。

// 现在丑数中有{1，2}，在上一步中，1已经同2相乘过了，所以今后没必要再比较1×2了，我们说1失去了同2相乘的资格。

// 现在1有与3，5相乘的资格，2有与2，3，5相乘的资格，但是2×3和2×5是没必要比较的，因为有比它更小的1可以同3，5相乘，所以我们只需要比较1×3，1×5，2×2。

// 依此类推，每次我们都分别比较有资格同2，3，5相乘的最小丑数，选择最小的那个作为下一个丑数，假设选择到的这个丑数是同i（i=2，3，5）相乘得到的，所以它失去了同i相乘的资格，把对应的pi++，让pi指向下一个丑数即可。

// 作者：zzxn
// 链接：https://leetcode-cn.com/problems/ugly-number-ii/solution/san-zhi-zhen-fang-fa-de-li-jie-fang-shi-by-zzxn/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

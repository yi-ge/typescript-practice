export default (flowerbed, n) => {
  let max = 0

  // 前后各加一个0，避免判断边界情况。
  flowerbed.unshift(0)
  flowerbed.push(0)

  for (let i = 0, len = flowerbed.length - 1; i < len; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) { // 判断前后两个元素是否为0
        max++
        i++
      }
    }
  }

  return max >= n
}

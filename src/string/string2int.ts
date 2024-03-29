// 注意，仅为提供面试思路，实现不严谨
export const string2int = (s: string): number => {
  // 如果是机器检查。这道题很简单，*1就完了, 或者Math.floor，或者 +'123'。都可以绕开系统的检查。
  // 但是如果是面试，就必须要用到map和reduce，上述方法显然不是面试官想听到的。
  // 而这俩都是数组的方法，因此首先用split('')将'123'变为['1','2','3']。
  // reduce常规用法就是 total * 10 + currentValue。至于map，需要思考如何用map将字符串数组变为数字数组。
  // 某人问过我这道题，由于网上写的基本都是错的，面试可能通不过，特记录于此。

  return s.split('').map(i => i.charCodeAt(0) - 48).reduce((total, currentValue) => total * 10 + currentValue)

  // 温馨提示：面试不一定需要说出你知道的或者你的各种想法，而是要尽可能准确的回答面试官想知道的答案。
  //   特别对于职业发展来说，如果你的真实想法不一定是面试官希望听到的，就不要说。
}

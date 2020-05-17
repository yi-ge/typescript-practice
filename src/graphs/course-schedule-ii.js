/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
export const findOrder = function (numCourses, prerequisites) {
  const courses = Array(numCourses).fill(0) // 初始化 上课 需要先完成课程 的门数
  const obj = {} // 记录受该课程 影响的其他课
  prerequisites.forEach(item => {
    const one = item[0]; const two = item[1] // one 要上的课, two 需先完成的课
    courses[one]++ // 门数 + 1
    obj[two] ? obj[two].push(one) : obj[two] = [one] // 存在就加, 不存在就新建
  })
  const res = []
  const queue = [] // 队列
  courses.forEach((t, i) => { // 往队列添加 无需先上 就可以 上 的课
    if (t === 0) queue.push(i) // 因为是从0开始的, 所以索引也能代替 课的名称
  })
  while (queue.length) {
    const cur = queue.shift() // 出队   表示该课已经上了
    res.push(cur) // 把出队的放入 结果数组
    const list = obj[cur] // 获取受该课影响的 课
    list && list.forEach(item => {
      courses[item]-- // 因为 出队表示该课已经上了, 所以 要先完成的门数 - 1
      if (courses[item] === 0) { // 当这个课 要先修完的 已经修完了, 入队
        queue.push(item)
      }
    })
  }

  return res.length === numCourses ? res : []
}

// 参考自 https://leetcode-cn.com/problems/course-schedule-ii/solution/chao-da-an-by-shetia/

import { MyCalendar } from '../../src/tree/my-calendar-i'

test('我的日程安排表 I', () => {
  // 示例：
  // 输入：
  // ["MyCalendar", "book", "book", "book"]
  // [[], [10, 20], [15, 25], [20, 30]]
  // 输出：
  // [null, true, false, true]

  // 解释：
  const myCalendar = new MyCalendar()
  expect(myCalendar.book(10, 20)).toBeTruthy() // return True
  expect(myCalendar.book(15, 25)).toBeFalsy() // return False ，这个日程安排不能添加到日历中，因为时间 15 已经被另一个日程安排预订了。
  expect(myCalendar.book(20, 30)).toBeTruthy() // return True ，这个日程安排可以添加到日历中，因为第一个日程安排预订的每个时间都小于 20 ，且不包含时间 20 。
  expect(myCalendar.book(0, 10)).toBeTruthy()
  expect(myCalendar.book(0, 0)).toBeTruthy()
  expect(myCalendar.book(31, 32)).toBeTruthy()
})
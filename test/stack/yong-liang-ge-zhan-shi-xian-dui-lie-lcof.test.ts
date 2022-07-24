import { CQueue } from '../../src/stack/yong-liang-ge-zhan-shi-xian-dui-lie-lcof'

test('用两个栈实现队列 - 1', () => {
  let obj: any = null
  const action = ['CQueue', 'appendTail', 'deleteHead', 'deleteHead']
  const queue = [[], [3], [], []]
  const res: any[] = []
  while (queue.length) {
    const tmp = action.shift()
    const val = queue.shift()
    if (tmp === 'CQueue') {
      obj = new CQueue()
      res.push(null)
    } else if (tmp === 'appendTail') {
      obj.appendTail(val?.[0])
      res.push(null)
    } else if (tmp === 'deleteHead') {
      res.push(obj.deleteHead())
    }
  }

  expect(res).toEqual([null, null, 3, -1])
})

test('用两个栈实现队列 - 2', () => {
  let obj: any = null
  const action = ['CQueue', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead']
  const queue = [[], [], [5], [2], [], []]
  const res: any[] = []
  while (queue.length) {
    const tmp = action.shift()
    const val = queue.shift()
    if (tmp === 'CQueue') {
      obj = new CQueue()
      res.push(null)
    } else if (tmp === 'appendTail') {
      obj.appendTail(val?.[0])
      res.push(null)
    } else if (tmp === 'deleteHead') {
      res.push(obj.deleteHead())
    }
  }

  expect(res).toEqual([null, -1, null, null, 5, 2])
})

test('用两个栈实现队列 - 3', () => {
  let obj: any = null
  const action = ['CQueue', 'deleteHead', 'appendTail', 'deleteHead', 'deleteHead', 'deleteHead', 'deleteHead', 'appendTail', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'deleteHead', 'appendTail', 'deleteHead', 'deleteHead', 'deleteHead', 'deleteHead', 'appendTail', 'appendTail', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'appendTail', 'deleteHead', 'appendTail', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'deleteHead', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'appendTail', 'deleteHead', 'appendTail', 'appendTail', 'appendTail', 'appendTail', 'deleteHead', 'appendTail', 'deleteHead', 'deleteHead', 'appendTail', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'appendTail', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'deleteHead', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'appendTail', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'appendTail', 'deleteHead', 'appendTail', 'appendTail', 'appendTail', 'deleteHead', 'appendTail', 'appendTail', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead', 'deleteHead', 'appendTail', 'deleteHead', 'appendTail', 'deleteHead', 'appendTail', 'appendTail']
  const queue = [[], [], [97], [], [], [], [], [15], [], [1], [43], [], [], [], [18], [], [], [], [], [36], [69], [21], [91], [], [], [22], [40], [], [], [], [81], [65], [], [77], [], [63], [96], [5], [], [], [35], [90], [], [], [], [], [77], [83], [], [], [52], [], [2], [66], [87], [90], [], [2], [], [], [33], [16], [72], [], [], [14], [78], [8], [], [], [], [], [3], [83], [], [], [13], [], [79], [44], [], [], [33], [], [55], [76], [12], [], [91], [24], [49], [47], [], [], [], [85], [], [69], [], [94], [52]]
  const res: any[] = []
  while (queue.length) {
    const tmp = action.shift()
    const val = queue.shift()
    if (tmp === 'CQueue') {
      obj = new CQueue()
      res.push(null)
    } else if (tmp === 'appendTail') {
      obj.appendTail(val?.[0])
      res.push(null)
    } else if (tmp === 'deleteHead') {
      res.push(obj.deleteHead())
    }
  }

  expect(res).toEqual([null, -1, null, 97, -1, -1, -1, null, 15, null, null, 1, 43, -1, null, 18, -1, -1, -1, null, null, null, null, 36, 69, null, null, 21, 91, 22, null, null, 40, null, 81, null, null, null, 65, 77, null, null, 63, 96, 5, 35, null, null, 90, 77, null, 83, null, null, null, null, 52, null, 2, 66, null, null, null, 87, 90, null, null, null, 2, 33, 16, 72, null, null, 14, 78, null, 8, null, null, 3, 83, null, 13, null, null, null, 79, null, null, null, null, 44, 33, 55, null, 76, null, 12, null, null])
})

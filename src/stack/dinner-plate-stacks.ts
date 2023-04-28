// 餐盘栈
// https://leetcode.cn/problems/dinner-plate-stacks
// INLINE  ../../images/stack/dinner-plate-stacks.jpeg
// 参考：https://leetcode.cn/problems/dinner-plate-stacks/solution/typescriptshi-xian-wei-hu-shuang-dui-don-0s0t/

class HeapSort {
  private arr: number[]
  private compare: (a: number, b: number) => boolean
  public constructor (compare: (a: number, b: number) => boolean) {
    this.arr = []
    this.compare = compare
  }
  private calcHeight (index: number): number {
    return Math.floor(Math.log(index + 1) / Math.log(2)) + 1
  }
  private calcFatherIndex (index: number): number {
    if (index === 0) {
      return -1
    }
    const h = this.calcHeight(index)
    return Math.floor((index - Math.pow(2, h - 1) + 1) / 2) + Math.pow(2, h - 2) - 1
  }
  private calcChildIndex (index: number): number[] {
    return [2 * index + 1, 2 * index + 2]
  }
  private displayToLeaf (index: number) {
    const { arr } = this
    let minIndex = index
    const children = this.calcChildIndex(index)
    if (children[0] <= arr.length && this.compare(arr[minIndex], arr[children[0]])) {
      /* istanbul ignore next */
      minIndex = children[0]
    }
    if (children[1] <= arr.length && this.compare(arr[minIndex], arr[children[1]])) {
      /* istanbul ignore next */
      minIndex = children[1]
    }
    if (minIndex === index) return;
    /* istanbul ignore next */
    [this.arr[index], this.arr[minIndex]] = [arr[minIndex], arr[index]]
    /* istanbul ignore next */
    this.displayToLeaf(minIndex)
  }

  public deleteByValue (value: number) {
    const { arr } = this
    const index = arr.indexOf(value)
    const len = arr.length
    if (index !== -1) {
      [this.arr[index], this.arr[len - 1]] = [arr[len - 1], arr[index]]
      this.arr.pop()
      this.displayToLeaf(index)
    }
  }

  public push (value: number) {
    const { arr } = this
    const len = arr.length
    this.arr.push(value)
    let index = len
    let fatherIndex = this.calcFatherIndex(index)
    while (fatherIndex !== -1) {
      const fatherValue = this.arr[fatherIndex]
      // console.log(value, len, fatherValue, fatherIndex, this.compare(fatherValue,  value))
      if (this.compare(fatherValue, value)) {
        [this.arr[fatherIndex], this.arr[index]] = [value, fatherValue]
      }
      index = fatherIndex
      fatherIndex = this.calcFatherIndex(fatherIndex)
    }
  }

  // return head
  // public pop (): number {
  //   const { arr } = this
  //   const len = arr.length;
  //   [this.arr[len - 1], this.arr[0]] = [this.arr[0], this.arr[len - 1]]
  //   const res = this.arr.pop() ?? -1
  //   this.displayToLeaf(0)
  //   return res
  // }

  public print () {
    return this.arr[0]
  }
}

export class DinnerPlates {
  private capacity: number
  private stackNum: number
  private stacks: number[][]
  private notEmptyBitMap: HeapSort
  private notFullBitMap: HeapSort

  public constructor (capacity: number) {
    this.capacity = capacity
    this.stackNum = 0
    this.stacks = []
    this.notEmptyBitMap = new HeapSort((a, b) => a <= b)
    this.notFullBitMap = new HeapSort((a, b) => a >= b)
  }

  push (val: number): void {
    const { notFullBitMap, capacity } = this
    const notFullIndex = notFullBitMap.print() ?? -1
    if (notFullIndex !== -1) {
      this.stacks[notFullIndex].push(val)
      if (this.stacks[notFullIndex].length === capacity) {
        this.notFullBitMap.deleteByValue(notFullIndex)
      }
      if (this.stacks[notFullIndex].length === 1) {
        /* istanbul ignore next */
        this.notEmptyBitMap.push(notFullIndex)
      }
      return
    }
    this.stacks.push([val])
    this.stackNum++
    if (capacity !== 1) this.notFullBitMap.push(this.stackNum - 1)
    this.notEmptyBitMap.push(this.stackNum - 1)
    return
  }

  pop (): number {
    const { notEmptyBitMap, capacity } = this
    let res = -1
    const notEmptyIndex = notEmptyBitMap.print() ?? -1
    if (notEmptyIndex !== -1) {
      res = this.stacks[notEmptyIndex].pop() as number
      if (this.stacks[notEmptyIndex].length === capacity - 1) {
        this.notFullBitMap.push(notEmptyIndex)
      }
      if (this.stacks[notEmptyIndex].length === 0) {
        this.notEmptyBitMap.deleteByValue(notEmptyIndex)
      }
    }
    return res
  }

  popAtStack (index: number): number {
    const { stackNum, capacity } = this
    let res = -1
    if (index >= stackNum || index < 0) {
      /* istanbul ignore next */
      return -1
    }
    if (this.stacks[index].length > 0) {
      res = this.stacks[index].pop() as number
      if (this.stacks[index].length === capacity - 1) {
        this.notFullBitMap.push(index)
      }
      if (this.stacks[index].length === 0) {
        /* istanbul ignore next */
        this.notEmptyBitMap.deleteByValue(index)
      }
    }
    return res
  }
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
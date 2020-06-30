export var CQueue = function () {
  this.stackA = []
  this.stackB = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackA.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  const stackBNum = this.stackB.length

  while (this.stackA.length) {
    this.stackB.push(this.stackA.pop())
  }

  if (stackBNum !== 0) {
    this.stackB.push(...this.stackB.splice(0, stackBNum))
  }

  const tmp = this.stackB.pop()
  return tmp === undefined ? -1 : tmp
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

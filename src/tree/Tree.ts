import { TreeNode } from "../lib/TreeNode"

export default class Tree {
  private root: TreeNode | null
  private queue: TreeNode[]
  private insertNum: number

  constructor () {
    this.root = null
    this.queue = []
    this.insertNum = 0
  }

  insert (val: number | null) {
    this.insertNum++ // 插入次数加1
    const node = (!val && typeof val === 'object') ? null : new TreeNode(val) // 判断是否为空节点

    if (!this.root) { // 判断根节点是否存在
      this.root = node // 插入根节点
      this.root && this.queue.push(this.root) // 非空节点入列
    } else { // 插入非根节点
      const parent = this.queue[0] // 被插入的父节点
      if (!(this.insertNum % 2)) { // 通过插入次数判断左右
        parent.left = node // 插入左边
        parent.left && this.queue.push(parent.left) // 非空节点入列
      } else {
        parent.right = node // 插入右边
        parent.right && this.queue.push(parent.right) // 非空节点入列
        this.queue.shift() // 当前父节点parent 已经不可能再插入子节点，故出列
      }
    }
    return this
  }

  static arrToTree (arr: (number | null)[]): TreeNode | null {
    const tree = new Tree()

    for (const n in arr) {
      tree.insert(arr[n])
    }

    return tree.root
  }
}

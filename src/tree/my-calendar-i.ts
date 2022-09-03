// 我的日程安排表 I
// https://leetcode.cn/problems/my-calendar-i
// INLINE  ../../images/tree/my-calendar-i.jpeg

type TreeNode = {
  left: TreeNode | null
  right: TreeNode | null
  start: number
  end: number
} | null

export class MyCalendar {
  private root: TreeNode = null
  constructor () { }

  book (start: number, end: number): boolean {
    if (!this.root) {
      this.root = {
        left: null,
        right: null,
        start,
        end
      }
      return true
    }

    let cur = this.root
    while (true) {
      if (end <= cur.start) { // 在树的左侧
        if (cur.left === null) {
          cur.left = {
            left: null,
            right: null,
            start,
            end
          }
          return true
        }
        cur = cur.left
      } else if (start >= cur.end) { // 在树的右侧
        if (cur.right === null) {
          cur.right = {
            left: null,
            right: null,
            start,
            end
          }
          return true
        }
        cur = cur.right
      } else { // 包含该期间
        return false
      }
    }
  }
}


/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
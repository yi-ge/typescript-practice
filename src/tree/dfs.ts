import { TreeNode } from "./TreeNode"

// const printTree = (node) => {
//   if (node === null) return
//   console.log(node.val)
//   printTree(node.left)
//   printTree(node.right)
// }
// 前序遍历递归法
export const preorder = (node: TreeNode | null): number[] => {
  if (node === null) return []
  return [node.val, ...preorder(node.left), ...preorder(node.right)]
}

// 中序遍历递归法
export const inorder = (node: TreeNode | null): number[] => {
  if (node === null) return []
  return [...inorder(node.left), node.val, ...inorder(node.right)]
}

// 后序遍历递归法
export const postorder = (node: TreeNode | null): number[] => {
  if (node === null) return []
  return [...postorder(node.left), ...postorder(node.right), node.val]
}

// 前序遍历循环法
export const preorderCycle = (node: TreeNode | null): number[] => {
  const res = []
  const stack = []
  stack.push(node)
  while (stack.length > 0) {
    node = stack.pop() as TreeNode
    res.push(node.val)

    if (node?.right) {
      stack.push(node.right)
    }

    if (node?.left) {
      stack.push(node.left)
    }
  }
  return res
}

// 中序遍历循环法
export const inorderCycle = (node: TreeNode | null): number[] => {
  const res: number[] = []
  const stack = []
  while (node !== null || stack.length) {
    if (node !== null) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop() as TreeNode
      res.push(node.val)

      node = node.right
    }

  }
  return res
}

// 后序遍历循环法
export const postorderCycle = (node: TreeNode | null): number[] => {
  const res = []
  const stack = []
  stack.push(node)
  while (stack.length > 0) {
    node = stack.pop() as TreeNode
    res.unshift(node.val)

    if (node?.left) {
      stack.push(node.left)
    }

    if (node?.right) {
      stack.push(node.right)
    }
  }
  return res
}

import { TreeNode } from "../../src/lib/TreeNode"

test("TreeNode", () => {
  expect(TreeNode).toBeDefined()
  expect(new TreeNode(undefined, new TreeNode(2), new TreeNode(3))).toBeDefined()
})
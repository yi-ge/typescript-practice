import ListNode from "../../src/lib/ListNode"

test("ListNode", () => {
  expect(ListNode).toBeDefined()
  expect(new ListNode(1, new ListNode(2))).toBeDefined()
})
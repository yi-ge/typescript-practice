# JavaScript 算法练习

[![license](https://img.shields.io/github/license/yi-ge/js-practice.svg?style=flat-square)](https://github.com/yi-ge/js-practice/blob/master/LICENSE)
![Travis (.org)](https://img.shields.io/travis/yi-ge/js-practice?style=flat-square)
![Coveralls github](https://img.shields.io/coveralls/github/yi-ge/js-practice?style=flat-square)
[![GitHub last commit](https://img.shields.io/github/last-commit/yi-ge/js-practice.svg?style=flat-square)](https://github.com/yi-ge/js-practice)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/yi-ge/js-practice)

![Node.js CI](https://github.com/yi-ge/js-practice/workflows/Node.js%20CI/badge.svg)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

LeetCode 与 LintCode 解题记录。此为个人练习仓库，代码中对重要思想进行了注释，但是没有详细的解题思路。需解题思路请移步其它仓库，很抱歉。

每一道题都对应写有测试用例，但可能不够完整。如果您发现错误，欢迎给我留言，谢谢！

## 字符串

- [反转字符串中的单词](src/string/reverse-words-in-a-string.js)

  - LeetCode 557. 反转字符串中的单词 III <https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/>
  - LintCode 1173. 反转字符串 III <https://www.lintcode.com/problem/reverse-words-in-a-string-iii/description>

- [计数二进制子串](src/string/count-binary-substrings.js)

  - LeetCode 696. 计数二进制子串 <https://leetcode-cn.com/problems/count-binary-substrings/>
  - LintCode 1079. 连续子串计数 <https://www.lintcode.com/problem/count-binary-substrings/description>

- [重复的子串](src/string/repeated-substring-pattern.js)

  - LeetCode 459. 重复的子字符串 <https://leetcode-cn.com/problems/repeated-substring-pattern/>
  - LintCode 1227. 重复的子串模式 <https://www.lintcode.com/problem/repeated-substring-pattern/description>

- [正则表达式匹配](src/string/regular-expression-matching.js)

  - LeetCode 10. 正则表达式匹配 <https://leetcode-cn.com/problems/regular-expression-matching/>
  - LintCode 154. 正则表达式匹配 <https://www.lintcode.com/problem/regular-expression-matching/description>

- [恢复 IP 地址](src/string/restore-ip-addresses.js)

  - LeetCode 93. 复原 IP 地址 <https://leetcode-cn.com/problems/restore-ip-addresses/>
  - LintCode 426. 恢复 IP 地址 <https://www.lintcode.com/problem/restore-ip-addresses/description>

- [存在重复元素](src/string/contains-duplicate.js)

  - LeetCode 217. 存在重复元素 <https://leetcode-cn.com/problems/contains-duplicate/>

- [判断字符串是否没有重复字符](src/string/unique-characters.js)

  - LintCode 157. 判断字符串是否没有重复字符 <https://www.lintcode.com/problem/unique-characters/description>

- [比较字符串](src/string/compare-strings.js)

  - LintCode 55. 比较字符串 <https://www.lintcode.com/problem/compare-strings/description>

- [最长无重复字符的子串](src/string/longest-substring-without-repeating-characters.js)

  - LeetCode 3. 无重复字符的最长子串 <https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/>
  - LintCode 384. 最长无重复字符的子串 <https://www.lintcode.com/problem/longest-substring-without-repeating-characters/description>

- [最大数](src/string/largest-number.js)

  - LeetCode 179. 最大数 <https://leetcode-cn.com/problems/largest-number/>
  - LintCode 184. 最大数 <https://www.lintcode.com/problem/largest-number/description>

- [实现string2int()函数](src/string/string2int.js)

  - 面试题参考思路，不严谨实现 廖雪峰 不要使用JavaScript内置的parseInt()函数，利用map和reduce操作实现一个string2int()函数。 <https://www.liaoxuefeng.com/wiki/1022910821149312/1024322552460832>

- [左旋转字符串](src/string/zuo-xuan-zhuan-zi-fu-chuan-lcof.js)

  - LeetCode 面试题58 - II. 左旋转字符串 <https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/>

- [最后一个单词的长度](src/string/length-of-last-word.js)

  - LeetCode 58. 最后一个单词的长度 <https://leetcode-cn.com/problems/length-of-last-word/>
  - LintCode 422. 最后一个单词的长度 <https://www.lintcode.com/problem/length-of-last-word/description>

- [整数转罗马数字](src/string/integer-to-roman.js)

  - LeetCode 12. 整数转罗马数字 <https://leetcode-cn.com/problems/integer-to-roman/>
  - LintCode 418. 整数转罗马数字 <https://www.lintcode.com/problem/integer-to-roman/description>

- [罗马数字转整数](src/string/roman-to-integer.js)

  - LeetCode 13. 罗马数字转整数 <https://leetcode-cn.com/problems/roman-to-integer/>
  - LintCode 419. 罗马数字转整数 <https://www.lintcode.com/problem/roman-to-integer/description>

## 数组

- [电话号码的字母组合](src/array/letter-combinations-of-a-phone-number.js)

  - LeetCode 17. 电话号码的字母组合 <https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/>
  - LintCode 425. 电话号码的字母组合 <https://www.lintcode.com/problem/letter-combinations-of-a-phone-number/description>

- [卡牌分组](src/array/x-of-a-kind-in-a-deck-of-cards.js)

  - LeetCode 914. 卡牌分组 <https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/>

- [删除排序数组中的重复项](src/array/remove-duplicates-from-sorted-array.js)

  - LeetCode 26. 删除排序数组中的重复项 <https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/>
  - LintCode 100. 删除排序数组中的重复数字 <https://www.lintcode.com/problem/remove-duplicates-from-sorted-array/description>

- [能否种花](src/array/can-place-flowers.js)

  - LeetCode 605. 种花问题 <https://leetcode-cn.com/problems/can-place-flowers/>
  - LintCode 1138. 能否放置花 <https://www.lintcode.com/problem/can-place-flowers/description>

- [循环升序数组](src/array/loop-asc-array.js)

  - 假设有一个升序数组,经过不确定长度的偏移，得到一个新的数组，我们称为循环升序数组。
    （例如：[0, 3, 4, 6, 7] 可能变成 [6, 7, 0, 3, 4]）
    给定一个数字和一个循环升序数组，判断这个数字是否在这个数组内，在的话返回 true，否则返回 false。要求时间复杂度为 O(logN)

    示例 1：
    输入：nums = [6, 7, 0, 3, 4]， target = 0
    输出：true

    示例 2：
    输入：nums = [6, 7, 0, 3, 4]， target = 5
    输出：false

- [循环数组中的环-暂无解](src/array/circular-array-loop.js)

  - LeetCode 457. 环形数组循环 <https://leetcode-cn.com/problems/circular-array-loop/>
  - LintCode 1229. 循环数组中的环 <https://www.lintcode.com/problem/circular-array-loop/description>

- [格雷编码](src/array/gray-code.js)

  - LeetCode 89. 格雷编码 <https://leetcode-cn.com/problems/gray-code/>
  - LintCode 411. 格雷编码 <https://www.lintcode.com/problem/gray-code/description>

- [数组划分](src/array/partition-array.js)

  - LintCode 31. 数组划分 <https://www.lintcode.com/problem/partition-array/description>

- [冒泡排序](src/array/bubble-sort.js)

- [选择排序](src/array/select-sort.js)

- [按奇偶排序数组](src/array/sort-array-by-parity.js)

  - LeetCode 922. 按奇偶排序数组 II <https://leetcode-cn.com/problems/sort-array-by-parity-ii/>

- [数组中的第 K 个最大元素](src/array/kth-largest-element-in-an-array.js)

  - LeetCode 215. 数组中的第 K 个最大元素 <https://leetcode-cn.com/problems/kth-largest-element-in-an-array/>
  - LeetCode 414. 第三大的数【相似，需去重】 <https://leetcode-cn.com/problems/third-maximum-number/submissions/>
  - LintCode 5. 第 k 大元素 <https://www.lintcode.com/problem/kth-largest-element/description>
  - LintCode 606. 第 K 大的元素 II <https://www.lintcode.com/problem/kth-largest-element-ii/description>
  - LintCode 544. 前 K 大数【相似】 <https://www.lintcode.com/problem/top-k-largest-numbers/description>
  - LintCode 479. 数组第二大数【相似】 <https://www.lintcode.com/problem/second-max-of-array/description>

- [最大间距](src/array/maximum-gap.js)

  - LeetCode 164. 最大间距 <https://leetcode-cn.com/problems/maximum-gap/>
  - LintCode 400. 最大间距 <https://www.lintcode.com/problem/maximum-gap/>

- [缺失的第一个正数](src/array/first-missing-positive.js)

  - LeetCode 41. 缺失的第一个正数 <https://leetcode-cn.com/problems/first-missing-positive/>
  - LintCode 189. 丢失的第一个正整数 <https://www.lintcode.com/problem/first-missing-positive/description>
  - LintCode 681. 缺失的第一个素数【相似】 <https://www.lintcode.com/problem/first-missing-prime-number/description>

- [缺失的第一个素数](src/array/first-missing-prime-number.js)

  - LintCode 681. 缺失的第一个素数 <https://www.lintcode.com/problem/first-missing-prime-number/description>

- [串联所有单词的子串](src/array/substring-with-concatenation-of-all-words.js)

  - LeetCode 30. 串联所有单词的子串 <https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/>
  - LintCode 1362. 包含所有单词连接的子串 <https://www.lintcode.com/problem/substring-with-concatenation-of-all-words/description>

- [买卖股票的最佳时机 II](src/array/best-time-to-buy-and-sell-stock-ii.js)

  - LeetCode 122. 买卖股票的最佳时机 II <https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/>
  - LintCode 150. 买卖股票的最佳时机 II <https://www.lintcode.com/problem/best-time-to-buy-and-sell-stock-ii/description>

- [搜索插入位置](src/array/search-insert-position.js)

  - LeetCode 35. 搜索插入位置 <https://leetcode-cn.com/problems/search-insert-position/>
  - LintCode 20. 搜索插入位置 <https://www.lintcode.com/problem/search-insert-position/description>

- [二分查找](src/array/binary-search.js)

  - LeetCode 35. 二分查找 <https://leetcode-cn.com/problems/binary-search/>
  - LintCode 20. 二分查找 <https://www.lintcode.com/problem/first-position-of-target/description>

- [查找常用字符](src/array/find-common-characters.js)

  - LeetCode 1002. 查找常用字符 <https://leetcode-cn.com/problems/find-common-characters/>

- [01 矩阵](src/array/01-matrix.js)

  - LeetCode 542. 01 矩阵 <https://leetcode-cn.com/problems/01-matrix/>
  - LintCode 974. 01 矩阵 <https://www.lintcode.com/problem/01-matrix/description>

- [合并区间](src/array/merge-intervals.js)

  - LeetCode 56. 合并区间 <https://leetcode-cn.com/problems/merge-intervals/>
  - LintCode 156. 合并区间 <https://www.lintcode.com/problem/merge-intervals/description>

- [跳跃游戏](src/array/jump-game.js)

  - LeetCode 55. 跳跃游戏 <https://leetcode-cn.com/problems/jump-game/>
  - LintCode 116. 跳跃游戏 <https://www.lintcode.com/problem/jump-game/description>

- [盛最多水的容器](src/array/container-with-most-water.js)

  - LeetCode 11. 盛最多水的容器 <https://leetcode-cn.com/problems/container-with-most-water/>
  - LintCode 383. 装最多水的容器 <https://www.lintcode.com/problem/container-with-most-water/description>

- [统计重复个数](src/array/count-the-repetitions.js)

  - LeetCode 466. 统计重复个数 <https://leetcode-cn.com/problems/count-the-repetitions/>
  - LintCode 1224. 统计重复个数 <https://www.lintcode.com/problem/count-the-repetitions/description>

- [岛屿的个数](src/array/number-of-islands.js)

  - LeetCode 200. 岛屿数量 <https://leetcode-cn.com/problems/number-of-islands/>
  - LintCode 433. 岛屿的个数 <https://www.lintcode.com/problem/number-of-islands/description>

- [统计「优美子数组」](src/array/count-number-of-nice-subarrays.js)

  - LeetCode 1248. 统计「优美子数组」 <https://leetcode-cn.com/problems/count-number-of-nice-subarrays/>

- [主元素](src/array/majority-element.js)

  - LeetCode 面试题 17.10. 主要元素 <https://leetcode-cn.com/problems/find-majority-element-lcci/>
  - LintCode 46. 主元素 <https://www.lintcode.com/problem/majority-element/description>

- [逆序对](src/array/reverse-pairs.js)

  - LeetCode 面试题51. 数组中的逆序对 <https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/>
  - LintCode 532. 逆序对 <https://www.lintcode.com/problem/reverse-pairs/description>

- [搜索旋转排序数组](src/array/search-in-rotated-sorted-array.js)

  - LeetCode 33. 搜索旋转排序数组 <https://leetcode-cn.com/problems/search-in-rotated-sorted-array/>
  - LintCode 62. 搜索旋转排序数组 <https://www.lintcode.com/problem/search-in-rotated-sorted-array/description>

- [数组中数字出现的次数](src/array/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof.js)

  - LeetCode 面试题56 - I. 数组中数字出现的次数 <https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/>

- [只出现一次的数字](src/array/single-number.js)

  - LeetCode 136. 只出现一次的数字 <https://leetcode-cn.com/problems/single-number/>

- [山脉数组中查找目标值](src/array/find-in-mountain-array.js)

  - LeetCode 1095. 山脉数组中查找目标值 <https://leetcode-cn.com/problems/find-in-mountain-array/>
  - LeetCode 852. 山脉数组的峰顶索引 <https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/>
  - LintCode 585. 山脉序列中的最大值 <https://www.lintcode.com/problem/maximum-number-in-mountain-sequence/description>

- [快乐数](src/array/happy-number.js)

  - LeetCode 202. 快乐数 <https://leetcode-cn.com/problems/happy-number/>
  - LintCode 488. 快乐数 <https://www.lintcode.com/problem/happy-number/description>

- [最大子序和](src/array/maximum-subarray.js)

  - LeetCode 53. 最大子序和 <https://leetcode-cn.com/problems/maximum-subarray/>
  - LeetCode 面试题42. 连续子数组的最大和 <https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/>
  - LintCode 41. 最大子数组 <https://www.lintcode.com/problem/maximum-subarray/description>

- [跳跃游戏II](src/array/jump-game-ii.js)

  - LeetCode 45. 跳跃游戏 II <https://leetcode-cn.com/problems/jump-game-ii/>
  - LintCode 117. 跳跃游戏 II <https://www.lintcode.com/problem/jump-game-ii/description>

- [最大数和最小数](src/array/maximum-and-minimum.js)

  - LintCode 770. 最大数和最小数 <https://www.lintcode.com/problem/maximum-and-minimum/description>

- [最低票价](src/array/minimum-cost-for-tickets.js)

  - LeetCode 983. 最低票价 <https://leetcode-cn.com/problems/minimum-cost-for-tickets/>

- [最大正方形](src/array/maximal-square.js)

  - LeetCode 221. 最大正方形 <https://leetcode-cn.com/problems/maximal-square/>
  - LintCode 436. 最大正方形 <https://www.lintcode.com/problem/maximal-square/description>

## 栈

- [最大矩阵](src/stack/maximal-rectangle.js)

  - LeetCode 85. 最大矩阵 <https://leetcode-cn.com/problems/maximal-rectangle/>
  - LintCode 510. 最大矩阵 <https://www.lintcode.com/problem/maximal-rectangle/description>

- [最小栈](src/stack/min-stack.js)

  - LeetCode 155. 最小栈 <https://leetcode-cn.com/problems/min-stack/>
  - LintCode 12. 带最小值操作的栈 <https://www.lintcode.com/problem/min-stack/description>

## 数学

- [阶乘后的零](src/math/factorial-trailing-zeroes.js)

  - LeetCode 172. 阶乘后的零 <https://leetcode-cn.com/problems/factorial-trailing-zeroes/submissions/>
  - LintCode 2. 尾部的零 <https://www.lintcode.com/problem/trailing-zeros/description>

- [丑数 II](src/math/ugly-number-ii.js)

  - LeetCode 264. 丑数 II <https://leetcode-cn.com/problems/ugly-number-ii/>
  - LintCode 4. 丑数 II <https://www.lintcode.com/problem/ugly-number-ii/description>

- [面试题 08.11. 硬币](src/math/coin-lcci.js)

  - LeetCode 面试题 08.11. 硬币 <https://leetcode-cn.com/problems/coin-lcci/>

- [全排列](src/math/permutations.js)

  - LeetCode 46. 全排列 <https://leetcode-cn.com/problems/permutations/>
  - LintCode 15. 全排列 <https://www.lintcode.com/problem/permutations/description>

- [最大数值](src/math/maximum-lcci.js)

  - LeetCode 面试题 16.07. 最大数值 <https://leetcode-cn.com/problems/maximum-lcci/>

- [回文数](src/math/palindrome-number.js)

  - LeetCode 9. 回文数 <https://leetcode-cn.com/problems/palindrome-number/>
  - LintCode 491. 回文数 <https://www.lintcode.com/problem/palindrome-number/>

- [Pow(x, n)](src/math/powx-n.js)

  - LeetCode 50. Pow(x, n) <https://leetcode-cn.com/problems/powx-n/>
  - LintCode 428. x的n次幂 <https://www.lintcode.com/problem/powx-n/>

## 堆

- [超级丑数](src/stack/super-ugly-number.js)【未完成】

  - LeetCode 313. 超级丑数 <https://leetcode-cn.com/problems/super-ugly-number/>
  - LintCode 518. 超级丑数 <https://www.lintcode.com/problem/super-ugly-number/description>

## 树

- [二叉树的右视图](src/tree/binary-tree-right-side-view.js)

  - LeetCode 199. 二叉树的右视图 <https://leetcode-cn.com/problems/binary-tree-right-side-view/>
  - LintCode 760. 二叉树的右视图 <https://www.lintcode.com/problem/binary-tree-right-side-view/description>

- [验证二叉搜索树](src/tree/validate-binary-search-tree.js)

  - LeetCode 98. 验证二叉搜索树 <https://leetcode-cn.com/problems/validate-binary-search-tree/>
  - LintCode 95. 验证二叉查找树 <https://www.lintcode.com/problem/validate-binary-search-tree/>

- [二叉树的最近公共祖先](src/tree/lowest-common-ancestor-of-a-binary-tree.js)

  - LeetCode 236. 二叉树的最近公共祖先 <https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/>
  - LintCode 88. 最近公共祖先 <https://www.lintcode.com/problem/lowest-common-ancestor-of-a-binary-tree/description>

- [另一个树的子树](src/tree/subtree-of-another-tree.js)

  - LeetCode 572. 另一个树的子树 <https://leetcode-cn.com/problems/subtree-of-another-tree/>
  - LintCode 1165. 另一个树的子树 <https://www.lintcode.com/problem/subtree-of-another-tree/description>

- [二叉树的层序遍历](src/tree/binary-tree-right-side-view.js)

  - LeetCode 102. 二叉树的层序遍历 <https://leetcode-cn.com/problems/binary-tree-level-order-traversal/>
  - LintCode 69. 二叉树的层次遍历 <https://www.lintcode.com/problem/binary-tree-level-order-traversal/description>

## 链表

- [合并K个排序链表](src/list/merge-k-sorted-lists.js)

  - LeetCode 23. 合并K个排序链表 <https://leetcode-cn.com/problems/merge-k-sorted-lists/>
  - LintCode 104. 合并k个排序链表 <https://www.lintcode.com/problem/merge-k-sorted-lists/description>

- [合并两个有序链表](src/list/merge-two-sorted-lists.js)

  - LeetCode 21. 合并两个有序链表 <https://leetcode-cn.com/problems/merge-two-sorted-lists/>
  - LeetCode 面试题25. 合并两个排序的链表 <https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof>
  - LintCode 165. 合并两个排序链表 <https://www.lintcode.com/problem/merge-two-sorted-lists/description>

- [链表排序](src/list/sort-list.js)

  - LeetCode 148. 排序链表 <https://leetcode-cn.com/problems/sort-list/>
  - LintCode 98. 链表排序 <https://www.lintcode.com/problem/sort-list/description>

- [环形链表](src/list/linked-list-cycle.js)

  - LeetCode 141. 环形链表 <https://leetcode-cn.com/problems/linked-list-cycle/>
  - LintCode 102. 带环链表 <https://www.lintcode.com/problem/linked-list-cycle/description>

- [链表的中间结点](src/list/middle-of-the-linked-list.js)

  - LeetCode 876. 链表的中间结点 <https://leetcode-cn.com/problems/middle-of-the-linked-list/>
  - LintCode 1609. 链表的中间结点 <https://www.lintcode.com/problem/middle-of-the-linked-list/description>

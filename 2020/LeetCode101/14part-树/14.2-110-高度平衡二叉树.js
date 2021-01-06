/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-05 21:45:41
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-05 21:47:16
*/
// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
// 解法一，递归解法
// 思路基于最大深度基础上判断每个点的left和right相差的绝对值是否大于1，如果大于1则返回-2，加上调用它的+1，正好还是-1，然后继续返回-2，如此递归即可完成判断。
var isBalanced = function(root) {
    function maxDepth(r) {
        if (!r) return 0;
        let left = maxDepth(r.left) + 1;
        let right = maxDepth(r.right) + 1;
        if (left == -1 || right == -1 || left - right > 1 || right - left > 1) return -2;
        return Math.max(left, right);
    }
    if (!root || maxDepth(root) > 0) return true;
    return false;
};

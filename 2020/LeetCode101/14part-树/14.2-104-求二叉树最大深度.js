/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-05 21:09:06
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-05 21:10:09
*/
// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 方法一层次遍历  
var maxDepth = function(root) {
    if (!root) return 0;
    const stack = [];
    stack.push(root);
    let res = 0;
    while(stack.length > 0) {
        for (let i = 0, len = stack.length; i < len; i += 1) {
            const item = stack.shift();
            if (item.right) stack.push(item.right);
            if (item.left) stack.push(item.left);
        }
        res += 1;
    }
    return res;
};

// 方法二递归
var maxDepth = function(root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
 }
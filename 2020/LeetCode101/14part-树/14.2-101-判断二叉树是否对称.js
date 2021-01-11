/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-06 18:09:25
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-06 18:15:00
*/
// 判断一个二叉树是否对称。
// 方法一 广度遍历，每层的第i个和第len - i - 1相等则为对称
var isSymmetric = function(root) {
    if (!root) return true;
    let stack = [];
    stack.push(root);
    while(stack.length > 0) {
        let nextRes = [];
        for (let i = 0, len = stack.length; i < len; i += 1) {
            if (stack[i].val !== stack[len - i - 1].val) {
                return false;
            }
            if (stack[i] !== -1) {
                stack[i].left ? nextRes.push(stack[i].left) : nextRes.push(-1);
                stack[i].right ? nextRes.push(stack[i].right) : nextRes.push(-1);
            }
        }
        stack = nextRes;
    }
    return true;
};

// 方法二 递归判断每个节点的左节点和右节点，如果都为空则返回true，如果有一个为空
// 则返回false，如果两个都不为空且值不相等则返回false，如果两个都不为空值都相等，则继续递归
var isSymmetric = function(root) {
    function isSame(left, right) {
        if (!left && !right) {
            return true;
        }
        if (!left || !right) {
            return false;
        }
        if (left.val !== right.val) {
            return false;
        }
        return isSame(left.left, right.right) && isSame(left.right, right.left);
    }
    return root ? isSame(root.left, root.right) : true;
}
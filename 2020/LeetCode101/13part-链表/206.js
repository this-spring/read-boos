/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-17 00:50:43
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-21 13:15:49
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  var reverseList = function(head) {
//     if (!head) return null;
//     let pre = null;
//     let next = head;
//     while(head) {
//         next = head.next;
//         head.next = pre;
//         pre = head;
//         head = next;
//     }
//     return pre;
// };
function Tree(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        for (let i = 0, len = stack.length; i < len; i += 1) {
            const item = stack.shift();
            console.log(item.value);
            item.left && stack.push(item.left);
            item.right && stack.push(item.right);
        }
    }
}
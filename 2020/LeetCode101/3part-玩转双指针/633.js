/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-28 20:40:28
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-28 20:49:29
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let head = 0;
    let tail = parseInt(Math.sqrt(c)) + 1;
    while(head <= tail) {
        let squ = head * head + tail * tail;
        if (squ == c) {
            return true;
        } else if (squ > c) {
            tail -= 1;
        } else {
            head += 1;
        }
    }
    return false;
};
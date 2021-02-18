/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-18 13:22:23
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-18 13:30:55
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// leetcode 455
var findContentChildren = function(g, s) {
    let i = g.sort((a, b) => a - b);
    let o = s.sort((a, b) => a - b);
    let iIndex = 0, oIndex = 0;
    let iLen = i.length, oLen = o.length;
    let count = 0;
    while(iIndex < iLen && oIndex < oLen) {
        if (i[iIndex] <= o[oIndex]) {
            count += 1;
            iIndex += 1;
        }
        oIndex += 1;
    }
    return count;
};
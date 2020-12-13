/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-13 14:54:30
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-13 15:13:18
*/
/**
 * 题目：
 *  给定两个有序数组，把两个数组合并为一个。
 *  输入是两个数组和它们分别的长度 m 和 n。其中第一个数组的长度被延长至 m + n，多出的 n 位被 0 填补。题目要求把第二个数组归并到第一个数组上，不需要开辟额外空间。
 *  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 *  Output: nums1 = [1,2,2,3,5,6]
 * 
*/

function mergeTwoArr(nums1, m, nums2, n) {
    let n1 = m - 1;
    let n2 = n - 1;
    let pos = m + n - 1;
    while(n1 >=0 && n2 >= 0) {
        if (nums1[n1] >= nums2[n2]) {
            nums1[pos] = nums1[n1];
            n1 -= 1;
        } else {
            nums1[pos] = nums2[n2];
            n2 -= 1;
        }
        pos -= 1;
    }
    while(n2 > 0) {
        nums1[pos] = nums2[n2]
        n2 -= 1;
        pos -= 1;
    }
}
const a1 = [1,2,3,0,0,0];
mergeTwoArr(a1, 3, [2,5,6], 3)
console.log(a1);
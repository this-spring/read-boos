/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-20 13:22:04
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-20 13:22:06
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let res = [];
    for (let i = 0, j = numbers.length - 1; i < j;) {
        let sum = numbers[i] + numbers[j];
        if (sum == target) {
            res.push(i + 1);
            res.push(j + 1);
            break;
        } else if (sum > target) {
            j -= 1;
        } else {
            i += 1;
        }
    }
    return res;
};
/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-13 14:36:50
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-13 14:42:01
*/
/**
 * 题目：
 *   在一个增序的整数数组里找到两个数，使它们的和为给定值。已知有且只有一对解。
 * 输入是一个数组(numbers)和一个给定值(target)。输出是两个数的位置，从 1 开始计数。
 *  Input: numbers = [2,7,11,15], target = 9
 *  Output: [1,2]
 * 
*/

function addSum(numbers, target) {
    const res = [];
    for (let i = 0, j = numbers.length - 1; i < j;) {
        const sum = numbers[i] + numbers[j];
        if (sum > target) {
            j -= 1;
        } else if (sum < target) {
            i += 1;
        } else {
            res.push(numbers[i]);
            res.push(numbers[j]);
            break;
        }
    }
    return res;
}

console.log(addSum([2,7,11,15], 9));
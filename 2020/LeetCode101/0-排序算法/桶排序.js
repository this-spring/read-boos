/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-22 23:44:27
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-23 00:14:14
*/
// 1. 桶排序利用数组的有序性，把对应数值放在对应数组对应索引上，然后依次遍历数组，进而实现桶排序。
// 2. 时间复杂度为O(n)，空间复杂度为O(n)  
// 3. 有点时间复杂度低，但是会有很多闲置空间  
function bucket(arr) {
    const stack = [];
    const res = [];
    for (let i = 0; i < arr.length; i += 1) {
        let index = arr[i];
        if (typeof stack[index] === 'undefined') {
            stack[index] = 0;
        }
        stack[index] += 1;
    }
    for (let i = 0; i < stack.length; i += 1) {
        if (stack[i] !== 0) {
            let cout = stack[i]; // 相同位置有几个
            while(cout >= 1) {
                res.push(i);
                cout -= 1;
            }
        }
    }
    return res;
}

var test = [4,2,6,2,3,8,6,9,0];
console.log(bucket(test));


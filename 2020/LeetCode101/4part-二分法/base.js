/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-15 01:06:34
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-17 00:49:18
*/
const arr = [1,2,3,4,5];

function binarySearch(arr, target) {
    let start = 0, end = arr.length - 1;
    let flag = false;
    while(true) {
        let mid = (end + start) / 2;
        if (target == arr[mid]) {
            flag = true;
            break;
        } else if (target > arr[mid]) {
            start = mid;
        } else {
            end = mid;
        }
        arr = 
        if ()
    }
}

console.log(binarySearch(arr, 2));
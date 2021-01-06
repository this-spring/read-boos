/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-23 12:55:15
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-23 13:58:34
*/
// 1. 快速排序是指选定一个基数后，采用双指针进行遍历，比基数大的放在右侧，比基数小的放在左侧的算法。然后左右侧在选出一个基数不断进行排序的过程。  
// 2. 时间复杂度为O(n*logn)，空间复杂度为O(1)  
// 时间复杂度最好的情况是一次都不需要交换O(n)，最差都需要交互O(n^2) 时间复杂度一般按照最差计算所以为O(n^2)
// js数组之间解构赋值：[x[0], x[1]] = [x[1], x[0]];
function parition(arr, first, last) {
    let pivot = arr[last];
    let p = first;
    let q = last - 1;
    while(p !== q) {
        if (arr[p] > pivot) {
            let temp = arr[p];
            arr[p] = arr[q];
            arr[q] = temp;
            q -= 1;
        } else {
            p += 1;
        }
    }
    if (arr[p] > pivot) {
        let temp = arr[p];
        arr[p] = arr[last];
        arr[last] = temp;
    } else {
        p += 1;
        let temp = arr[p];
        arr[p] = arr[last]
        arr[last] = temp;
    }
    return p;
}
function QuickSort(arr, first, last) {
    if (first < last) {
        mid = parition(arr, first, last);
        QuickSort(arr, first, mid - 1);
        QuickSort(arr, mid + 1, last);
    }
    return arr;
}

var test = [4,2,6,2,3,8,6,9,0];
console.log(QuickSort(test, 0, test.length - 1));
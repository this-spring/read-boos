/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-23 00:14:30
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-23 00:35:22
*/
// 1. 桶排序利用每次取出一个元素，然后跟其他所有元素比较如果比它大那么就交互位置，这样每次遍历一轮就能确定一个数的位置，经过arr.length-1次就可以确定所有。  
// 举例：例如当i==0的时候，arr[0]和其他所有的元素(arr[0,1,2,3....])进行比较，如果比arr[0]大就交换位置，当遍历一次之后，我们能确定一个最大元素在第一位。在进行arr[1]可以确定第二大元素在第二位。
// 经历了n次后就排好序了。中心思想是，外层循环每次循环一次就可以排好一个数的位置。
// 2. 时间复杂度为O(n^2)，空间复杂度为O(1)  
// 时间复杂度最好的情况是一次都不需要交换O(n)，最差都需要交互O(n^2) 时间复杂度一般按照最差计算所以为O(n^2)
function Maopao(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] >= arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var test = [4,2,6,2,3,8,6,9,0];
console.log(Maopao(test));
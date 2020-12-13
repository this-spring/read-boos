/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-04 13:09:37
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-09 13:18:46
 */
/**
 * 题目：
 * 输入两个数组，分别代表孩子的饥饿度和饼干的大小。输出最多有多少孩子可以吃饱的数 量。
 * 
 *  Input: [1,2], [1,2,3]
 *  Output: 2
 * 
*/

function feed(food, child) {
    food = food.sort((a, b) => {
        return a - b;
    });
    child = child.sort((a, b) => {
        return a - b;
    });
    let f = 0;
    let c = 0;
    while(f < food.length && c < child.length) {
        if (child[c] <= food[f]) {
            f += 1;
            c += 1;
        } else {
            f += 1;
        }
    }
    return c;
}
const f = [1, 2];
const c = [1, 2, 3];
console.log(feed(f, c));
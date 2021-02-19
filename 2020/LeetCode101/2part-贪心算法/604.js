/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-19 12:45:45
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-19 12:45:46
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let max = 0;
    flowerbed.unshift(0);
    flowerbed.push(0);
    for (let i = 1, len = flowerbed.length; i < len - 1; i += 1) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            max += 1;
            flowerbed[i] = 1;
        }
    }
    return max >= n;
};
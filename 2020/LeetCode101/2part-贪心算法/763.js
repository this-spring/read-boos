/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-19 13:15:28
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-19 13:15:36
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let start = 0, maxIndex = 0;
    let resArr = [];
    for (let i = 0, len = s.length; i < len ; i += 1) {
        let finded = false;
        for (let j = s.length - 1; j > i; j -= 1) {
            if (s[j] == s[i]) {
                if (j > maxIndex) {
                    maxIndex = j;
                }
                finded = true;
                break;
            }
        }
        if (!finded && i > maxIndex) {
            maxIndex = i;
        }
        if (i == maxIndex) {
            resArr.push(maxIndex - start + 1);
            start = maxIndex + 1;
        }
    }
    return resArr;
};
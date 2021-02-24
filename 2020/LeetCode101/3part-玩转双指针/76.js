/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-23 13:14:55
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-23 22:23:52
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let res = '';
    for (let i = 0; i < s.length; i += 1) {
        let index = t.indexOf(s[i]);
        let findIndex = [];
        if (index >= 0) {
            findIndex[t.length - 1] = 0;
            let tempRes = '';
            findIndex[index] = 1;
            for (let j = i; j < s.length; j += 1) {
                tempRes += s[j];
                let nextIndex = findDiff(t, s[j], findIndex);
                if (nextIndex >= 0) {
                    findIndex[nextIndex] = 1;
                }
                if (checkIndex(findIndex)) {
                    if (res == '' || res.length > tempRes.length) {
                        res = tempRes;
                    }
                    break;
                }
            }
        }
    }
    function findDiff(t, target, findIndex) {
        for (let i = 0; i < t.length; i += 1) {
            if (t[i] == target && findIndex[i] != 1) {
                return i;
            }
        }
        return -1;
    }
    function checkIndex(findIndex) {
        let count = 0;
        findIndex.forEach((item) => {
            if (item == 1) {
                count += 1;
            }
        })
        return count == findIndex.length;
    }
    return res;
};

const s = "ADOBECODEBANC", t = "ABC";
console.log(minWindow(s, t));
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let sortRes = intervals.sort((a, b) => a[1] - b[1]);
    let i = 0;
    let lastMax = -Infinity;
    let count = 0;
    while(i < sortRes.length) {
        let item = sortRes[i];
        if (item[0] >= lastMax) {
            lastMax = item[1];
        } else {
            count += 1;
        }
        i += 1;
    }
    return count;
};
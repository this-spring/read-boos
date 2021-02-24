/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-22 12:15:36
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-22 13:20:18
 */
var merge = function(nums1, m, nums2, n) {
    // let pr = m + n - 1;
    // while(pr >= 0) {
    //     let mv = nums1[m - 1];
    //     let nv = nums2[n - 1];
    //     if (m - 1 < 0) mv = -Infinity;
    //     if (n - 1 < 0) nv = -Infinity;
    //     console.log(mv, nv, m, n);
    //     if (mv >= nv) {
    //         nums1[pr] = mv;
    //         m -= 1;
    //     } else {
    //         nums1[pr] = nv;
    //         n -= 1;
    //     }
    //     pr -= 1;
    // }
    let pr = m + n - 1;
    while(pr >= 0 && m >= 0 && n >= 0) {
        console.log(m, n , pr);
        let mv = nums1[m - 1];
        let nv = nums2[n - 1];
        if (mv >= nv) {
            nums1[pr] = mv;
            m -= 1;
        } else {
            nums1[pr] = nv;
            n -= 1;
        }
        pr -= 1;
    }
    console.log(m , n , pr);
    if (n >= 0) {
        for (let y = 0; y < n; y += 1) {
            nums1[pr] = nums2[y];
            pr -= 1;
        }
    }
};
const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
merge(nums1, m, nums2, n);
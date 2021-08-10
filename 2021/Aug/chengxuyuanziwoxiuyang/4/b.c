/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-08-03 16:59:06
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-08-03 17:00:47
 */
int shared = 1;
void swap(int* a, int* b) {
    *a ^= *b ^= *a ^= *b;
}
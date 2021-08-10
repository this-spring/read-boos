/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-08-03 16:59:03
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-08-03 17:07:37
 */
extern int shared;
// gcc -c a.c b.c
// 
int main() {
    int a = 100;
    swap(&a, &shared);
}
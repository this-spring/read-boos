/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-19 22:08:36
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-19 22:58:11
*/
#include <fcntl.h>
#include <stdio.h>

int main() {
    char path[] = "./test-create.txt";
    // int fd = creat(path, O_RDONLY);
    // printf("fd:%d\n", fd);
    int fd2 = open(path, O_RDWR | O_CREAT);
    printf("fd2:%d\n", fd2);
    return 0;
}

/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-02-19 23:11:56
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-02-19 23:36:14
*/
#include "apue.h"
#include <fcntl.h>

char buf1[] = "abcdefghij";
char buf2[] = "ABCDEFGHIJ";

// xuxiuquans-MacBook-Pro:第三章-文件IO xuxiuquan$ gcc -c lseek.c 
// xuxiuquans-MacBook-Pro:第三章-文件IO xuxiuquan$ gcc -o lseek  lseek.o -L/Users/xuxiuquan/Downloads/apue.3e/lib -lapue

int main() {
    int fd;
    // err_sys("test error");
    if ((fd = creat("file.hole", FILE_MODE)) < 0) {
        err_sys("create error");
    }
    if (write(fd, buf1, 10) != 10) {
        err_sys("buf1 write error");
    }
    if (lseek(fd, 1600, SEEK_SET) == -1) {
        err_sys("lseek error");
    }
    if (write(fd, buf2, 10) != 10) {
        err_sys("buf2 write error");
    }
    return 0;
}
// od命令查看某个文件的8进制、16进制等
// od -N100 file 查看文件100个字节
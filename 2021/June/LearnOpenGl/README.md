<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-06-22 14:39:16
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-06-23 14:32:04
-->
# Source  
https://github.com/JoeyDeVries/LearnOpenGL  

# 编译相关  

最基础的编译方式是通过写gcc或者g++来运行  
较好的方式是用过makefile来编写运行
现代比较流行的是使用cmake来编写和运行  

# gcc编译  

gcc....

Mac打包静态库和动态库
```
add.cpp  
int add(int a, int b)
{
    return a + b;
}

main.cpp
#include<stdio.h>
int add(int a, int b);
int main()
{
    printf("%d\n", add(1,2));
    return 0;
}

<!-- 静态库 -->
$ gcc -c -o add.o add.cpp
$ ar -r libadd.a add.o
$ gcc -o main -L. -ladd main.cpp
$ ./main

<!-- 动态库 -->
$ gcc -shared -fPIC -o libadd.so add.cpp
$ gcc -o main -L. -ladd main.cpp
$ ./main
```
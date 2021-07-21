<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-07-20 00:40:17
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-07-22 01:12:09
-->
## 笔记  

1  

```
mac上利用objdump查看objec目标文件  
objdump -h test.o  

__text 代码段
__data 数据段
__bss bss段


-s将所有段的内容以16进制方式打印出来  
-d参数可以将所包含的指令的段反汇编   

```  

2  

```
file命令可以查看不同操作系统的可执行文件结构  
file /usr/bin/gcc
/usr/bin/gcc: Mach-O 64-bit executable x86_64
Mach-O 可执行文件结构
```

3


```
汇编指令

mov：赋值指令
add：求合指令
sub：减法指令
jmp：跳转指令

mov：寄存器，数据

mov：寄存器，寄存器

mov：寄存器，内存单元

mov：段寄存器，内存单元

mov：内存单元，寄存器

mov：内存单元，段寄存器

mov：段寄存器，寄存器

mov：寄存器，段寄存器

 add求和指令 add a,b  a=a+b

add：寄存器，数据

add：寄存器，寄存器

add：内存单元，寄存器

add：寄存器，内存单元

 sub减法指令 sub a,b a=a-b

sub：寄存器，数据

sub：寄存器，寄存器

sub：内存单元，寄存器

sub：寄存器，内存单元

 jmp转移指令，修改CS、IP寄存器

jmp：段地址：偏移地址  用段地址修改CS 用偏移地址修改IP

jmp：寄存器，只用寄存器的内容修改IP
```  

```
nm命令可以查看符号表
nm 3.3.o
```
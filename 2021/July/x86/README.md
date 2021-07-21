<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-07-20 00:24:15
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-07-20 00:34:08
-->
## mac编译汇编  
exit.s  
```
# exit.s    
    .section    __TEXT,__text
    .globl  _main
_main:
    movq    $0, %rax
    retq
```

编译运行汇编

```
as exit.s -o exPit.o
ld exit.o -o exit -lSystem
exit
```

```
指令 + 源 + 目的
mov 命令赋值命令 q代表8个字节
$0代表真实0  
%rax代表寄存器

0传入rax寄存器而不是别的寄存器
```
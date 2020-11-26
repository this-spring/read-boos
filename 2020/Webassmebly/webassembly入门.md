# webassemlby入门课  

## 一 课前必读  

### 1 我们为什么了解Webassmebly  

定义：  WebAssembly 是基于栈式虚拟机的虚拟二进制指令集（V-ISA），它被设计为高级编程语言的可移植编译目标  

Wasm 的出现更能够让我们直接在 Web 平台上，使用那些业界已存在许久的众多优秀的 C/C++ 代码库  

2017 年 8 月，W3C WebAssembly Working Group 成立，意味着 WebAssembly 正式成为 W3C 众多技术标准中的一员。  
wasm介绍：
Wasm 的历史和起源；  
Wasm 采用的计算模型和体系结构；  
Wasm 模块的内部结构；  
Wasm 相关的实战和应用。  

### 2  基础篇：学习此课程你需要了解哪些基础知识？  
跳过  


### 3  历史篇：为什么会有 WebAssembly 这样一门技术？  

js是弱类型语言，也可以称为解释型语言，执行效率较低，尽管拥有jit优化，不过如果编写者不按照jit优化方式去编写代码，jit是不会生效的。所以导致js语言执行效率较低。  

在wasm之前有很多提高js性能的方案，其中包括NACI和PNACI，但是都由于架构设计和技术局限性导致落地难度大。  

除了 NaCl 与 PNaCl，另一个不可不提的技术便是 Mozilla 于 2013 提出的 ASM.js。同前两者一样，ASM.js 的设计目标也是为了能够在 JavaScript 语言之外，为“构建更高性能的 Web 应用”这个目标，提供另外一种实现的可能。  

asm.js  
- 1. 是js子集，可以视为普通js来执行，拥有良好的兼容性  
- 2. 通过注解的方式标记asm.js代码，当满足一定条件时，浏览器通过注解识别到是asm.js进而直接编译成机器码，当再次执行时直接执行编译好的机器码。  

demo 
```
function asm (stdin, foreign, heap) {
  // 注解
  "use asm";
  function add (x, y) {
    x = x|0; // 变量 x 存储了 int 类型值；
    y = y|0; // 变量 y 存储了 int 类型值；
    var addend = 1.0, sum = 0.0; // 变量 addend 和 sum 默认存放了"双精度浮点"类型值；
    sum = sum + x + y; return +sum; // 函数返回值为"双精度浮点"类型；
  }
  return { add: add };
}
```

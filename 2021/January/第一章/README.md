<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-11 12:13:54
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-12 18:31:44
-->
## 学习webgl很简单  
webgl技术继承自免费开源的opengl技术，可以说webgl就是web端的opengl。  

## webgl起源  
<img src="../img/1.jpg">  

openes是基着色器语言（GLSL）  

<img src="../img/2.jpg"/>  

浏览器底层也是用opengl或者opengl es  

## opengl和opengl es区别  

补充一下，OpenGL始发于1992年，距今22年。那个时候的许多API已不适合这20多年来的硬件发展。但由于OpenGL是向前兼容的，新的版本仍要提供旧的API，令使用旧版本的软件能正常运作，所以会随硬件的变化不断化加入各种新API。  

而且，曾经有一段长时间，OpenGL的发展停滞不前，许多硬件的新功能没有对应的正式API，各显卡厂商加入了各种extension。为了使用这些功能，OpenGL实际上失去了一些跨平台的意义，软件开发者也要面对复杂的环境，甚至为不同硬件使用不同的API。  

OpenGL ES像是OpenGL的一次重生，尽量把冗馀的API去掉，剩下最核心有用的部分。
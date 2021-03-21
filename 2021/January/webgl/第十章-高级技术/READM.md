<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-03-17 13:30:06
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-03-17 14:44:31
-->
## gl.readPixels  

api作用读取一块矩形区域的颜色值，返回ArrayBufferView对象。  

mdn: https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/readPixels   

使用：  
```
// WebGL1:
void gl.readPixels(x, y, width, height, format, type, pixels);

// WebGL2:
void gl.readPixels(x, y, width, height, format, type, GLintptr offset);
void gl.readPixels(x, y, width, height, format, type, ArrayBufferView pixels, GLuint dstOffset);
```  

例子:  
```
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
<!-- 读取到的颜色存储在pixels这里 -->
var pixels = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
console.log(pixels); // Uint8Array
```